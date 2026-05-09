import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="custom-arrow prev" onClick={onClick}>
            <span className="fas fa-arrow-left"></span>
        </button>
    );
};


const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="custom-arrow next" onClick={onClick}>
            <span className="fas fa-arrow-right"></span>
        </button>
    );
};

function BrandSlider({ brands }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };
    return (
        <>
            <Slider {...settings}>
                {
                    brands?.map((brands, index) => {
                        return (
                            <div key={brands._id}>
                                <div className="brand-card">
                                    <div className="brand-img">
                                        <img src={brands.logo} alt="brand_logo" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>

        </>
    )
}

export default BrandSlider