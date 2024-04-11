import React from 'react'
import imgCup from "@/img/Cup.svg"
import imgGrup from "@/img/Group.svg"
import imgVector from "@/img/Vector.svg"
import imgCustum from "@/img/customer-support.svg"

const Services = () => {
    return (
        <section className="services">
            <div className="container-fluid">
                <div className="service-list">
                    <div className="service-item">
                        <img src={imgCup} className="service__image" />
                        <div className="service-info">
                            <h4 className="service__name">High Quality</h4>
                            <p className="service__description">crafted from top materials</p>
                        </div>
                    </div>
                    <div className="service-item">
                        <img src={imgGrup} className="service__image" />
                        <div className="service-info">
                            <h4 className="service__name">Warranty Protection</h4>
                            <p className="service__description">Over 2 years</p>
                        </div>
                    </div>
                    <div className="service-item">
                        <img src={imgVector} className="service__image" />
                        <div className="service-info">
                            <h4 className="service__name">Free Shipping</h4>
                            <p className="service__description">Order over 150 $</p>
                        </div>
                    </div>
                    <div className="service-item">
                        <img src={imgCustum} className="service__image" />
                        <div className="service-info">
                            <h4 className="service__name">24 / 7 Support</h4>
                            <p className="service__description">Dedicated support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services