import React from 'react'

const EditAdmin = () => {
    return (
        <div className='container'>
            <h1>Sửa sản phẩm</h1>
            <form >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên dự án</label>
                    <input type="text" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tên dự án..." />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Hình</label>
                    <input type="text" name='image' className="form-control" id="exampleInputPassword1" placeholder="Hình..." />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Công nghệ</label>
                    <input type="text" name='skills' className="form-control" id="exampleInputPassword1" placeholder="Hình..." />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Ngày hoàn thành</label>
                    <input type="date" name='date' className="form-control" id="exampleInputPassword1" placeholder="Hình..." />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Link file</label>
                    <input type="text" name='linkdown' className="form-control" id="exampleInputPassword1" placeholder="Hình..." />
                </div>
                <p></p>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default EditAdmin