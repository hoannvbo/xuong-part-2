import React from 'react'

import imgRC1 from "@/img/Rectangle 63.png"
import imgRC2 from "@/img/Rectangle 64.png"
import imgRC3 from "@/img/Rectangle 65.png"
import imgRC4 from "@/img/Rectangle 66.png"
const Shop = () => {
    return (
        <section className="shop">
            <div className="container">
                <div className="section-heading">
                    <h2 className="section-heading__title">Shop</h2>
                </div>
                <div className="section-body">
                    <div className="shops">
                        <div className="shop-item">
                            <a href='#' className="shop__link"><img src={imgRC1} className="shop__image" /></a>
                        </div>
                        <div className="shop-item">
                            <a href='#' className="shop__link"><img src={imgRC2} className="shop__image" /></a>
                        </div>
                        <div className="shop-item">
                            <a href='#' className="shop__link"><img src={imgRC3} className="shop__image" /></a>
                        </div>
                        <div className="shop-item">
                            <a href='#' className="shop__link"><img src={imgRC4} className="shop__image" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shop