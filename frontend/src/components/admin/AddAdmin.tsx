import React from 'react'

const AddAdmin = () => {
    return (
        <div className='container'>
            <h1>Thêm sản phẩm</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Tên sản phẩm..." 
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Hình</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Hình..." />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">giá mới</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">giá cũ</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">số lượng</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">mô tả</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <p></p>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default AddAdmin