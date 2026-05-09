import React, { useEffect } from 'react'
import productimg01 from '../../assets/images/product-img-01.png'
import productimg02 from '../../assets/images/product-img-02.png'
import productimg03 from '../../assets/images/product-img-03.png'
import productimg04 from '../../assets/images/product-img-04.png'
import productimg05 from '../../assets/images/product-img-05.png'
import productimg06 from '../../assets/images/product-img-06.png'
import productimg07 from '../../assets/images/product-img-07.png'
import productimg08 from '../../assets/images/product-img-08.png'
import productimg09 from '../../assets/images/product-img-09.png'
import productimg10 from '../../assets/images/product-img-10.png'
import { Link } from 'react-router-dom'

function ProductList() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="index.php">
                                <i className="fas fa-home me-2" />
                                Home
                            </Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="">Vegetables &amp; tubers </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            {" "}
                            Seeds of Change Organic
                        </li>
                    </ol>
                </div>
            </div>
            <section className="product-list-sec tp-space2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <div className="cards product-sidebar">
                                <div className="cards-head">
                                    <h5>Filters</h5>
                                </div>
                                <div className="cards-body">
                                    <div className="accordion">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#accordion-01"
                                                    aria-expanded="false"
                                                >
                                                    Category
                                                </button>
                                            </h2>
                                            <div
                                                id="accordion-01"
                                                className="accordion-collapse collapse show"
                                                style={{}}
                                            >
                                                <div className="accordion-body category">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="category"
                                                            id="category-01"
                                                            defaultChecked=""
                                                        />
                                                        <label className="form-check-label" htmlFor="category-01">
                                                            Fungicides
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="category"
                                                            id="category-02"
                                                        />
                                                        <label className="form-check-label" htmlFor="category-02">
                                                            Growth Promoters
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="category"
                                                            id="category-03"
                                                        />
                                                        <label className="form-check-label" htmlFor="category-03">
                                                            Herbicides
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="category"
                                                            id="category-04"
                                                        />
                                                        <label className="form-check-label" htmlFor="category-04">
                                                            Vegetable &amp; Fruit Seeds
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="category"
                                                            id="category-05"
                                                        />
                                                        <label className="form-check-label" htmlFor="category-05">
                                                            Nutrients
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="category"
                                                            id="category-06"
                                                        />
                                                        <label className="form-check-label" htmlFor="category-06">
                                                            Flower Seeds
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="category"
                                                            id="category-07"
                                                        />
                                                        <label className="form-check-label" htmlFor="category-07">
                                                            Insecticides
                                                        </label>
                                                    </div>
                                                </div>
                                                <Link
                                                    to=""
                                                    className="text-warning fw-700 mb-2 d-block"
                                                >
                                                    +30
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#accordion-02"
                                                >
                                                    Brands
                                                </button>
                                            </h2>
                                            <div
                                                id="accordion-02"
                                                className="accordion-collapse collapse show"
                                            >
                                                <div className="accordion-body">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="brand-01"
                                                            defaultChecked=""
                                                        />
                                                        <label className="form-check-label" htmlFor="brand-01">
                                                            {" "}
                                                            SYNGENTA{" "}
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="brand-02"
                                                        />
                                                        <label className="form-check-label" htmlFor="brand-02">
                                                            {" "}
                                                            NAMDHARI{" "}
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="brand-03"
                                                        />
                                                        <label className="form-check-label" htmlFor="brand-03">
                                                            {" "}
                                                            SEMINIS{" "}
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="brand-04"
                                                        />
                                                        <label className="form-check-label" htmlFor="brand-04">
                                                            {" "}
                                                            EAST WEST{" "}
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="brand-05"
                                                        />
                                                        <label className="form-check-label" htmlFor="brand-05">
                                                            {" "}
                                                            INDO AMERICAN HYBRID SEEDS{" "}
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="brand-06"
                                                        />
                                                        <label className="form-check-label" htmlFor="brand-06">
                                                            {" "}
                                                            VNR{" "}
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="brand-07"
                                                        />
                                                        <label className="form-check-label" htmlFor="brand-07">
                                                            {" "}
                                                            MAHYCO{" "}
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="brand-08"
                                                        />
                                                        <label className="form-check-label" htmlFor="brand-08">
                                                            {" "}
                                                            URJA SEEDS{" "}
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="brand-09"
                                                        />
                                                        <label className="form-check-label" htmlFor="brand-09">
                                                            {" "}
                                                            ASHOKA{" "}
                                                        </label>
                                                    </div>
                                                </div>
                                                <Link
                                                    to=""
                                                    className="text-warning fw-700 mb-2 d-block"
                                                >
                                                    +30
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#accordion-03"
                                                >
                                                    Price Range
                                                </button>
                                            </h2>
                                            <div
                                                id="accordion-03"
                                                className="accordion-collapse collapse show"
                                            >
                                                <div className="accordion-body">
                                                    <div className="price-range-slide">
                                                        <div id="slider-range" className="range-dot" />
                                                        <div className="price-range-bx">
                                                            <input
                                                                type="text"
                                                                id="min-price"
                                                                className="form-control"
                                                                readOnly=""
                                                            />
                                                            <input
                                                                type="text"
                                                                id="max-price"
                                                                className="form-control"
                                                                readOnly=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12">
                            <div className="cards">
                                <div className="cards-head">
                                    <h5 className="mb-0">Fungicides</h5>
                                    <div className="product-list-filter">
                                        <p className="mb-0">
                                            <span className="text-dark">65,867</span> Results found.
                                        </p>
                                        <div className="custom-frm-bx mb-0">
                                            <select name="" id="" className="form-select">
                                                <option value="">Most Popular</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="cards-body">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <div className="product-card">
                                                <span className="off-tag">22% OFF</span>
                                                <div className="product-img">
                                                    <img src={productimg01} alt="" />
                                                </div>
                                                <div className="product-card-content">
                                                    <h6>PI Industries</h6>
                                                    <Link to="">Nativo Fungicide</Link>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fal fa-star" />
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
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <div className="product-card">
                                                <div className="product-img">
                                                    <img src={productimg02} alt="" />
                                                </div>
                                                <div className="product-card-content">
                                                    <h6>PI Industries</h6>
                                                    <Link to="">Indofil M-45 Fungicide</Link>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fal fa-star" />
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
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <div className="product-card">
                                                <span className="off-tag">22% OFF</span>
                                                <div className="product-img">
                                                    <img src={productimg03} alt="" />
                                                </div>
                                                <div className="product-card-content">
                                                    <h6>PI Industries</h6>
                                                    <Link to="">Indofil M-45 Fungicide</Link>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fal fa-star" />
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
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <div className="product-card">
                                                <span className="off-tag">22% OFF</span>
                                                <div className="product-img">
                                                    <img src={productimg04} alt="" />
                                                </div>
                                                <div className="product-card-content">
                                                    <h6>PI Industries</h6>
                                                    <Link to="">Indofil M-45 Fungicide</Link>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fal fa-star" />
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
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <div className="product-card">
                                                <span className="off-tag">22% OFF</span>
                                                <div className="product-img">
                                                    <img src={productimg05} alt="" />
                                                </div>
                                                <div className="product-card-content">
                                                    <h6>PI Industries</h6>
                                                    <Link to="">Indofil M-45 Fungicide</Link>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fal fa-star" />
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
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <div className="product-card">
                                                <span className="off-tag">22% OFF</span>
                                                <div className="product-img">
                                                    <img src={productimg06} alt="" />
                                                </div>
                                                <div className="product-card-content">
                                                    <h6>PI Industries</h6>
                                                    <Link to="">Indofil M-45 Fungicide</Link>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fal fa-star" />
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
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <div className="product-card">
                                                <span className="off-tag">22% OFF</span>
                                                <div className="product-img">
                                                    <img src={productimg07} alt="" />
                                                </div>
                                                <div className="product-card-content">
                                                    <h6>PI Industries</h6>
                                                    <Link to="">Indofil M-45 Fungicide</Link>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fal fa-star" />
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
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <div className="product-card">
                                                <span className="off-tag">22% OFF</span>
                                                <div className="product-img">
                                                    <img src={productimg08} alt="" />
                                                </div>
                                                <div className="product-card-content">
                                                    <h6>PI Industries</h6>
                                                    <Link to="">Indofil M-45 Fungicide</Link>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fal fa-star" />
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
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <div className="product-card">
                                                <span className="off-tag">22% OFF</span>
                                                <div className="product-img">
                                                    <img src={productimg09} alt="" />
                                                </div>
                                                <div className="product-card-content">
                                                    <h6>PI Industries</h6>
                                                    <Link to="">Indofil M-45 Fungicide</Link>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fal fa-star" />
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
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <div className="product-card">
                                                <span className="off-tag">22% OFF</span>
                                                <div className="product-img">
                                                    <img src={productimg10} alt="" />
                                                </div>
                                                <div className="product-card-content">
                                                    <h6>PI Industries</h6>
                                                    <Link to="">Indofil M-45 Fungicide</Link>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fal fa-star" />
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
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <div className="product-card">
                                                <span className="off-tag">22% OFF</span>
                                                <div className="product-img">
                                                    <img src={productimg01} alt="" />
                                                </div>
                                                <div className="product-card-content">
                                                    <h6>PI Industries</h6>
                                                    <Link to="">Indofil M-45 Fungicide</Link>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fal fa-star" />
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
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <div className="product-card">
                                                <span className="off-tag">22% OFF</span>
                                                <div className="product-img">
                                                    <img src={productimg02} alt="" />
                                                </div>
                                                <div className="product-card-content">
                                                    <h6>PI Industries</h6>
                                                    <Link to="">Indofil M-45 Fungicide</Link>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fal fa-star" />
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
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <div className="product-card">
                                                <span className="off-tag">22% OFF</span>
                                                <div className="product-img">
                                                    <img src={productimg03} alt="" />
                                                </div>
                                                <div className="product-card-content">
                                                    <h6>PI Industries</h6>
                                                    <Link to="">Indofil M-45 Fungicide</Link>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fal fa-star" />
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
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <div className="product-card">
                                                <span className="off-tag">22% OFF</span>
                                                <div className="product-img">
                                                    <img src={productimg04} alt="" />
                                                </div>
                                                <div className="product-card-content">
                                                    <h6>PI Industries</h6>
                                                    <Link to="">Indofil M-45 Fungicide</Link>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fal fa-star" />
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
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <div className="product-card">
                                                <span className="off-tag">22% OFF</span>
                                                <div className="product-img">
                                                    <img src={productimg05} alt="" />
                                                </div>
                                                <div className="product-card-content">
                                                    <h6>PI Industries</h6>
                                                    <Link to="">Indofil M-45 Fungicide</Link>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fal fa-star" />
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
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <div className="product-card">
                                                <span className="off-tag">22% OFF</span>
                                                <div className="product-img">
                                                    <img src={productimg06} alt="" />
                                                </div>
                                                <div className="product-card-content">
                                                    <h6>PI Industries</h6>
                                                    <Link to="">Indofil M-45 Fungicide</Link>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fal fa-star" />
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
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <div className="product-card">
                                                <span className="off-tag">22% OFF</span>
                                                <div className="product-img">
                                                    <img src={productimg06} alt="" />
                                                </div>
                                                <div className="product-card-content">
                                                    <h6>PI Industries</h6>
                                                    <Link to="">Nativo Fungicide</Link>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fal fa-star" />
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
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <div className="product-card">
                                                <div className="product-img">
                                                    <img src={productimg08} alt="" />
                                                </div>
                                                <div className="product-card-content">
                                                    <h6>PI Industries</h6>
                                                    <Link to="">Indofil M-45 Fungicide</Link>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fal fa-star" />
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
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <div className="product-card">
                                                <span className="off-tag">22% OFF</span>
                                                <div className="product-img">
                                                    <img src={productimg09} alt="" />
                                                </div>
                                                <div className="product-card-content">
                                                    <h6>PI Industries</h6>
                                                    <Link to="">Indofil M-45 Fungicide</Link>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fal fa-star" />
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
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <div className="product-card">
                                                <span className="off-tag">22% OFF</span>
                                                <div className="product-img">
                                                    <img src={productimg10} alt="" />
                                                </div>
                                                <div className="product-card-content">
                                                    <h6>PI Industries</h6>
                                                    <Link to="">Indofil M-45 Fungicide</Link>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fal fa-star" />
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
                                        <div className="col-lg-12">
                                            <div className="custom-pagination">
                                                <ul className="pagination">
                                                    <li className="page-item">
                                                        <Link className="page-link" to="">
                                                            <i className="fas fa-arrow-left" />
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="">
                                                            1
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="">
                                                            2
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="">
                                                            3
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="">
                                                            <i className="fas fa-arrow-right" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default ProductList