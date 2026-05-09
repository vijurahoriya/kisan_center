import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import categoryimg01 from '../../assets/images/category-img-01.png'
import categoryimg02 from '../../assets/images/category-img-02.png'
import categoryimg03 from '../../assets/images/category-img-03.png'
import categoryimg04 from '../../assets/images/category-img-04.png'
import categoryimg05 from '../../assets/images/category-img-05.png'
import categoryimg06 from '../../assets/images/category-img-06.png'
import { Link } from 'react-router-dom';
import { kishanApi } from '../Services/axios';

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="custom-arrow next" onClick={onClick}>
            <span className="fas fa-arrow-right"></span>
        </button>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="custom-arrow prev" onClick={onClick}>
            <span className="fas fa-arrow-left"></span>
        </button>
    );
};


function Categories() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2.5,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1.9,
                },
            },
        ],
    };
    const [categories, setCategories] = useState([]);
    const fetchCategoriesk = async () => {
        try {
            const res = await kishanApi.get('/categories/active/list');
            if (res.data.status) {
                setCategories(res.data.categories); // Set categories here
            }
        } catch (error) {
            console.error('Fetch categories error', error);
        }
    };
    useEffect(() => {
        fetchCategoriesk();
    }, []);
    return (
        <>
            <section className="category-sec tp-space">
                <div className="container">
                    <h3 className="title">Categories</h3>
                    <Slider {...settings}>
                        {
                            categories?.map((categories, index) => {
                                return <div key={index}>
                                    <Link to="/product-list">
                                        <div className="category-card">
                                            <div className="category-card-innr">
                                                <img src={categories.image} alt={categories.translations[0].name} />
                                            </div>
                                            <h4>{categories.translations[0].name}</h4>
                                        </div>
                                    </Link>
                                </div>
                            })
                        }
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Categories