import React from 'react'

const ListAdmin = () => {
    return (
        <div>
            <h2>Product</h2>
            <div className="table-responsive">

                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price New</th>
                            <th scope="col">Price Old</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Description</th>
                            <th scope="col">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">


                        <tr>
                            <th scope="row"></th>
                            <td>tên</td>
                            <td>
                                <img width="50px" src="#" />
                            </td>
                            <td>32423</td>
                            <td>123</td>
                            <td>3</td>
                            <td>ssrgr</td>

                            <td>
                                <a className="btn btn-warning">Edit</a>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>


                    </tbody>
                </table>
                <a className="btn btn-primary">Add Product</a>
            </div>
        </div>
    )
}

export default ListAdmin