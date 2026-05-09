import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


export default function Hero({ banner }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1900,
    };
    return (
        <>
            <section className="banner-sec">
                <div className="banner-slider">
                    <Slider {...settings}>
                        {
                            banner?.map((banners, index) => {
                                return (
                                    <div className="slide-innr" key={index}>
                                        <img  src={banners.image} alt="banners_image" />
                                        {/* <img className="modile_image" src={banners.mobile_image} alt="banner_image" /> */}
                                        <div className="slide-innr-content">
                                            <h2>{banners.translations[0].title}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: banners.translations[0].description }} />
                                            <Link to={banners.redirect_url} className="thm-btn animate-btn">
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider >
                </div>
            </section>


        </>

    );
}
