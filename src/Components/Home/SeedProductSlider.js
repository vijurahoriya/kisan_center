import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productimg01 from '../../assets/images/product-img-16.png'
import productimg02 from '../../assets/images/product-img-18.png'
import productimg03 from '../../assets/images/product-img-20.png'
import productimg04 from '../../assets/images/product-img-19.png'
import productimg05 from '../../assets/images/product-img-10.png'
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


function SeedProductSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
                <div>
                    <div className="product-card">
                        <div className="product-img">
                            <img src={productimg01} alt="" />
                        </div>
                        <div className="product-card-content">
                            <h6>PI Industries</h6>
                            <Link to="/product-details">Nativo Fungicide</Link>
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
                                    ₹28.85 <del>₹32.8</del>
                                </p>
                                <span data-bs-toggle="modal" data-bs-target="#quantity">
                                    200 GM
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="product-card">
                        <div className="product-img">
                            <img src={productimg02} alt="" />
                        </div>
                        <div className="product-card-content">
                            <h6>PI Industries</h6>
                            <Link to="/product-details">Nativo Fungicide</Link>
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
                                    ₹28.85 <del>₹32.8</del>
                                </p>
                                <span data-bs-toggle="modal" data-bs-target="#quantity">
                                    200 GM
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="product-card">
                        <span className="off-tag">22% OFF</span>
                        <div className="product-img">
                            <img src={productimg03} alt="" />
                        </div>
                        <div className="product-card-content">
                            <h6>PI Industries</h6>
                            <Link to="/product-details">Nativo Fungicide</Link>
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
                                    ₹28.85 <del>₹32.8</del>
                                </p>
                                <span data-bs-toggle="modal" data-bs-target="#quantity">
                                    200 GM
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="product-card">
                        <div className="product-img">
                            <img src={productimg04} alt="" />
                        </div>
                        <div className="product-card-content">
                            <h6>PI Industries</h6>
                            <Link to="/product-details">Nativo Fungicide</Link>
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
                                    ₹28.85 <del>₹32.8</del>
                                </p>
                                <span data-bs-toggle="modal" data-bs-target="#quantity">
                                    200 GM
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="product-card">
                        <span className="off-tag">22% OFF</span>
                        <div className="product-img">
                            <img src={productimg05} alt="" />
                        </div>
                        <div className="product-card-content">
                            <h6>PI Industries</h6>
                            <Link to="/product-details">Nativo Fungicide</Link>
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
                                    ₹28.85 <del>₹32.8</del>
                                </p>
                                <span data-bs-toggle="modal" data-bs-target="#quantity">
                                    200 GM
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    )
}

export default SeedProductSlider