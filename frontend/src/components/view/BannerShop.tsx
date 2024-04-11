import imgBannerShop from "@/img/banner-shop.png"
const BannerShop = () => {
    return (
        <section className="banner">
            <div className="banner-img__shop">
                <img src={imgBannerShop} className="banner__shop" />
            </div>
            <div className="banner-text__shop">
                <h3>Shop</h3>
                <p><strong>Home</strong> &gt; Shop</p>
            </div>
        </section>

    )
}

export default BannerShop