import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

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

function DealOfDay({ dayDeal }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <Slider {...settings}>
                {
                    dayDeal?.map((DealOfDay, index) => {
                        return <div key={index}>

                            <div className="product-card">
                                <span className="off-tag">
                                    {DealOfDay.price > DealOfDay.discount
                                        ? `${Math.round(((DealOfDay.price - DealOfDay.discount) / DealOfDay.price) * 100)}% OFF`
                                        : "Deal"}
                                </span>
                                <div className="product-img">
                                    <Link to={`/product-details/${DealOfDay._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <img src={DealOfDay.image} alt={DealOfDay.image_alt} />
                                    </Link>
                                </div>
                                <div className="product-card-content">
                                    {/* <h6>PI Industries</h6> */}
                                    <Link to={`/product-details/${DealOfDay._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {DealOfDay.translations[0].name}
                                    </Link>
                                    <p className="rating">
                                        <span className="fas fa-star" />
                                        <span className="fas fa-star" />
                                        <span className="fas fa-star" />
                                        <span className="fas fa-star" />
                                        <span className="far fa-star" />
                                        10 Reviews
                                    </p>
                                    <div className="product-qut">
                                        <p className="price">
                                            ₹{DealOfDay.discount} <del>₹{DealOfDay.price}</del>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </Slider >

        </>
    )
}

export default DealOfDay