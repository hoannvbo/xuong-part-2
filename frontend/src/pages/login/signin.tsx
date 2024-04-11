import { useForm } from 'react-hook-form'
import imgbtn from "../../img/x.svg"
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useLocalStorage } from '@/hooks/useStorage';
import Joi from "joi";
import { joiResolver } from '@hookform/resolvers/joi';

import { Link, useNavigate } from 'react-router-dom';


const signinSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).min(3).required(),
    password: Joi.string().min(6).required()
})

const Signin = () => {
    const [, setUser] = useLocalStorage('user', {});
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(signinSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });
    const { mutate } = useMutation({
        mutationFn: async (formData: { email: string; password: string }) => {
            const { data } = await axios.post("http://localhost:8080/api/v1/auth/signin", formData);
            return data;
        },
        onSuccess: (data) => {
            setUser(data);
            navigate('/');
            alert("Đăng nhập thành công!");
        },
        onError: (error) => console.log(error),

    });
    const onSubmit = (formData: { email: string; password: string }) => {
        mutate(formData);
    }
    return (

        <div className="login-form">
            <button className="login-form-btn"><img src={imgbtn} /></button>
            <br /><br />
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form-list">
                <div className="login-form-tk">
                    <p>Email:</p>
                    <input className="login-form-input" type="text"{...register('email', { required: true, minLength: 3 })} placeholder='email....' />
                    {errors.email && <p>{errors.email?.message}</p>}

                </div>

                <div className="login-form-tk">
                    <p>Password:</p>
                    <input className="login-form-input" type="password"{...register('password', { required: true, minLength: 6 })} placeholder='mật khẩu....' />
                    {errors.password && <p>{errors.password?.message}</p>}
                </div>
                <div className='login-for-sginupTK' ><Link className='login-for-sginupTK-ip' to="/signup">Đăng kí tài khoản ?</Link></div>

                <div className="login-form-lg">
                    <button className="login-from-btn"><strong>Login</strong></button>
                </div>
            </form>
            <div className="login-form-twoblock">
                <div className="login-form-face">
                    <button><strong>Facebook</strong></button>
                </div>
                <div className="login-form-gg">
                    <button><strong>Google</strong></button>
                </div>
            </div>

        </div>
    )
}

export default Signin