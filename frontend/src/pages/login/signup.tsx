import { useForm } from 'react-hook-form'
import imgbtn from "../../img/x.svg"
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Joi from "joi";
import { joiResolver } from '@hookform/resolvers/joi';

import { useNavigate } from 'react-router-dom';

type userType = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    avatar: string;
};
const signinSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .min(3)
        .required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().required().valid(Joi.ref("password")),
    avatar: Joi.string().uri(),
});
const Signup = (props: Props) => {
    // const [, setUser] =  useLocalStorage("user", {});
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<userType>({
        resolver: joiResolver(signinSchema),
    });
    const { mutate } = useMutation({
        mutationFn: async (formData: userType) => {
            try {
                await axios.post("http://localhost:8080/api/v1/auth/signup", formData);
                alert("Đăng ký thành công");
                navigate("/signin");
            } catch (error) {
                console.log(error);
            }
        },
        onError: (error) => console.log(error),
    });
    const onSubmit = (formData: userType) => {
        mutate(formData);
    };
    return (
        <>

            {/* ------------------------------------------------------------------------------ */}

            <div className="login-formup">
                <button className="login-form-btn"><img src={imgbtn} /></button>
                <br /><br />
                <h2>Đăng ký</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="login-form-list">
                    <div className="login-form-tk">
                        <p>Tên nhân vật:</p>
                        <input className="login-form-input" type="text"{...register('name', { required: true, minLength: 3 })} placeholder='tên nhân vật....' />
                        {errors.name && <p>{errors.name?.message}</p>}

                    </div>
                    <div className="login-form-tk">
                        <p>Email:</p>
                        <input className="login-form-input" type="email"{...register('email', { required: true, minLength: 3 })} placeholder='email....' />
                        {errors.email && <p>{errors.email?.message}</p>}

                    </div>

                    <div className="login-form-tk">
                        <p>Password:</p>
                        <input className="login-form-input" type="password"{...register('password', { required: true, minLength: 6 })} placeholder='mật khẩu....' />
                        {errors.password && <p>{errors.password?.message}</p>}
                    </div>
                    <div className="login-form-tk">
                        <p>confirmPassword:</p>
                        <input className="login-form-input" type="password"{...register('confirmPassword', { required: true })} placeholder='nhập lại mật khẩu....' />
                        {errors.confirmPassword && <p>{errors.confirmPassword?.message}</p>}
                    </div>
                    <div className="login-form-tk">
                        <p>avatar:</p>
                        <input className="login-form-input" type="text"{...register('avatar', { required: true })} placeholder='Ảnh' />
                        {errors.avatar && <p>{errors.avatar?.message}</p>}
                    </div>
                    <div className="login-form-lg">
                        <button className="login-from-btn"><strong>Đăng ký</strong></button>
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
        </>
    );
};

export default Signup;
