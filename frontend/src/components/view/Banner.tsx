import React from 'react'
import imgBanner from "@/img/banner-home.png"

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-img">
                <img src={imgBanner} className="banner__img" />
            </div>
            <div className="banner-text">
                <h3>Trang chủ</h3>
                <p>Home</p>
            </div>
        </section>
    )
}

export default Banner