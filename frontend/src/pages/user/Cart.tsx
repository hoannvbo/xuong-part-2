import useCart from '@/hooks/useCart';
import imgDele from "@/img/icontable.svg";
import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
const Cart = () => {
    const { data, mutate, handleQuantityChange,calculateTotal, isLoading, isError } = useCart();
    if (isLoading) return <p>loading.......</p>
    if (isError) return <p>lỗi</p>


    return (
        <section className="cart">
            <div className="container">
                <div className="cart-product">
                    <div className="cart-product-left">
                        <div className="cart-product-table">
                            <table className="cart-product-table-form">
                                <thead className="cart-product-table-head">
                                    <tr><th style={{ width: 150 }}>
                                    </th><td style={{ width: 200 }}><strong>Product</strong></td>
                                        <td style={{ width: 140 }}><strong>Price</strong></td>
                                        <td style={{ width: 180 }}><strong>Quantity</strong></td>
                                        <td style={{ width: 130 }}><strong>Subtotal</strong></td>
                                        <td style={{ width: 50 }} />
                                    </tr></thead>
                                <tbody className="cart-product-table-body">
                                    {data?.products.map((product: any, index: number) => {
                                        return (
                                            <tr key={index}>
                                                <td><img className="cart-product-table-imgpro" src={product.image} /></td>
                                                <td>{product.name}</td>
                                                <td>{product.price.toLocaleString('vi-VN')} VNĐ</td>
                                                <td>
                                                    <button className='cart-product-table-btnAdd' onClick={() => mutate({ action: "INCREMENT", productId: product.productId })}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                                                    </svg>
                                                    </button>
                                                    {product.quantity}
                                                    <input type="number" onInput={(e) => handleQuantityChange(product.productId, e as ChangeEvent<HTMLInputElement>)} />
                                                    <button className='cart-product-table-btnDele' onClick={() => mutate({ action: "DECREMENT", productId: product.productId })}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                                                    </svg>
                                                    </button>
                                                </td>

                                                <td>{(product.quantity * product.price).toLocaleString('vi-VN')}VNĐ</td>

                                                <td>
                                                    <button onClick={() => mutate({ action: "REMOVE", productId: product.productId })}><img src={imgDele} /></button>
                                                </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="cart-product-right">
                        <h3>Cart Totals</h3>
                        <div className="cart-product-price">
                            <div className="cart-product-price__left">
                                <p><strong>Subtotal</strong></p>
                                <p><strong>Total</strong></p>
                            </div>
                            <div className="cart-product-price__righr">
                                <p>......</p>
                                <span>{calculateTotal().toLocaleString('vi-VN')}VNĐ</span>
                            </div>
                        </div>
                        <button className="cart-product-btn" >  
                       <Link to={"/order"} style={{textDecoration: 'none', color: 'black'}}>Xác Nhận</Link>
                        
                        </button>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Cart