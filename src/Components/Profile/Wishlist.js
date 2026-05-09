import React, { useEffect } from 'react'
import ProfileSidebar from './ProfileSidebar'
import { Link } from 'react-router-dom'
import productimg01 from '../../assets/images/product-img-01.png'
import productimg02 from '../../assets/images/product-img-02.png'
import productimg03 from '../../assets/images/product-img-03.png'
import productimg04 from '../../assets/images/product-img-04.png'
import productimg05 from '../../assets/images/product-img-05.png'
import productimg06 from '../../assets/images/product-img-06.png'
import productimg07 from '../../assets/images/product-img-07.png'
import productimg08 from '../../assets/images/product-img-08.png'

function Wishlist() {
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
            <section className="user-main tp-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <ProfileSidebar />
                        </div>
                        <div className="col-lg-9">
                            <div className="cards shadow-none wishlist">
                                <div className="cards-body">
                                    <h5 className="title2 mb-3">Wishlist</h5>
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
                                                <div className="product-remove">
                                                    <Link to="">
                                                        <span className="fas fa-times me-2" />
                                                        Remove
                                                    </Link>
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
                                                    <Link to="">Nativo Fungicide</Link>
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
                                                <div className="product-remove">
                                                    <Link to="">
                                                        <span className="fas fa-times me-2" />
                                                        Remove
                                                    </Link>
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
                                                    <Link to="">Nativo Fungicide</Link>
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
                                                <div className="product-remove">
                                                    <Link to="">
                                                        <span className="fas fa-times me-2" />
                                                        Remove
                                                    </Link>
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
                                                    <Link to="">Nativo Fungicide</Link>
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
                                                <div className="product-remove">
                                                    <Link to="">
                                                        <span className="fas fa-times me-2" />
                                                        Remove
                                                    </Link>
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
                                                    <Link to="">Nativo Fungicide</Link>
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
                                                <div className="product-remove">
                                                    <Link to="">
                                                        <span className="fas fa-times me-2" />
                                                        Remove
                                                    </Link>
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
                                                <div className="product-remove">
                                                    <Link to="">
                                                        <span className="fas fa-times me-2" />
                                                        Remove
                                                    </Link>
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
                                                    <Link to="">Nativo Fungicide</Link>
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
                                                <div className="product-remove">
                                                    <Link to="">
                                                        <span className="fas fa-times me-2" />
                                                        Remove
                                                    </Link>
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
                                                    <Link to="">Nativo Fungicide</Link>
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
                                                <div className="product-remove">
                                                    <Link to="">
                                                        <span className="fas fa-times me-2" />
                                                        Remove
                                                    </Link>
                                                </div>
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

export default Wishlist