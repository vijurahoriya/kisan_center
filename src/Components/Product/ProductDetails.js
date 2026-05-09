import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductSlide from '../ProductSlider/ProductSlide'
import ProductSyncSlider from '../ProductSlider/ProductSyncSlider'
import BulkOrder from './BulkOrder';
import BreadCrumb from '../Services/BreadCrumb';
import { kishanApi } from '../Services/axios';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(null);

    // fetch product api
    const fetchProduct = async () => {
        try {
            const res = await kishanApi.get(`/website/product-detail-with-simler/${id}`);
            console.log(res.data.productData)
            setProduct(res.data.productData);

        } catch (err) {
            console.error("Error fetching product details", err);
            toast.error("Failed to fetch product.");
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);
        fetchProduct();
    }, [id]);
    if (!product || !product.variants || product.variants.length === 0) {
        return <p>Loading...</p>;
    }
    const translation = product.translations?.find(t => t.language_code === "EN" || t.language_code === "En");
    return (
        <>
            <BreadCrumb />
            <section className="product-details tp-space2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <ProductSyncSlider images={product?.image}/>
                        </div>
                        <div className="col-lg-6">
                            <div className="product-details-rgt">
                                <h4>{translation?.name || "Product Name"}</h4>
                                <p className="rating">
                                    <span className="fas fa-star" /><span className="fas fa-star" /><span className="fas fa-star" /><span className="fas fa-star" /><span className="far fa-star" />
                                    {product.total_reviews || 0} Reviews
                                </p>
                                <p className="price">
                                    ₹{selectedVariantIndex !== null
                                        ? product.variants[selectedVariantIndex].discount.toFixed(2)
                                        : product?.discount?.toFixed(2)}
                                    <del>
                                        ₹{selectedVariantIndex !== null
                                            ? product.variants[selectedVariantIndex].price.toFixed(2)
                                            : product?.price?.toFixed(2)}
                                    </del>
                                    <small className="d-block">Inclusive of all taxes</small>
                                </p>


                                <h5>Variants</h5>

                                <ul className="variat-btn">
                                    {product.variants.map((variant, index) => (
                                        <li key={index}>
                                            <button
                                                type="button"
                                                onClick={() => setSelectedVariantIndex(index)}
                                                className='selected'
                                                style={{
                                                    border: selectedVariantIndex === index ? "2px solid green" : "1px solid #ddd",
                                                    padding: "10px",
                                                    borderRadius: "5px",
                                                    width: "100%",
                                                    textAlign: "left"
                                                }}
                                            >
                                                ₹{variant.discount.toFixed(2)} <del>₹{variant.price}</del>
                                                <span className="d-block">{variant.variant_value}</span>
                                                {variant.combination.map((combo, idx) => (
                                                    <span key={idx} className="d-block">
                                                        {combo.name}:
                                                        {
                                                            /^#([0-9A-F]{3}){1,2}$/i.test(combo.value)
                                                                ? <span style={{
                                                                    display: "inline-block",
                                                                    width: "20px",
                                                                    height: "20px",
                                                                    backgroundColor: combo.value,
                                                                    border: "1px solid #000",
                                                                    marginLeft: "5px"
                                                                }} title={combo.value}></span>
                                                                : combo.value
                                                        }
                                                    </span>
                                                ))}
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                <Link to="#" className="thm-btn success animate-btn">Add To Cart</Link>
                                <Link to="#" className="thm-btn org-btn jump-btn">Buy Now</Link>
                                <Link to="#" className="fav-btn"><i className="far fa-heart" /></Link>
                                <Link to="#" className="share-btn"><i className="fas fa-share-alt" /></Link>
                                <br />
                                <Link to="#" className="thm-btn dark mt-2" data-bs-toggle="modal" data-bs-target="#bulk-order">
                                    Bulk Order
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="cards mt-5 shadow-none review-rating">
                        <div className="cards-body">
                            <ul className="nav" id="myTab" role="tablist">
                                <li className="tab-item" role="presentation">
                                    <button
                                        className="tab-link active"
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab-01"
                                        type="button"
                                        role="tab"
                                    >
                                        Description
                                    </button>
                                </li>
                                <li className="tab-item" role="presentation">
                                    <button
                                        className="tab-link"
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab-02"
                                        type="button"
                                        role="tab"
                                    >
                                        Reviews
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="tab-01"
                                    role="tabpanel"
                                    tabIndex={0}
                                >
                                    <div className="product-desc">
                                        <p dangerouslySetInnerHTML={{ __html: product.translations[0].description || "No description" }} />
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="tab-02"
                                    role="tabpanel"
                                    tabIndex={0}
                                >
                                    <div className="row justify-content-between">
                                        <div className="col-lg-8">
                                            <div className="rating-card">
                                                <div className="rating-lft">
                                                    <h5>4.0</h5>
                                                    <p className="rating">
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="fas fa-star" />
                                                        <span className="far fa-star" />
                                                        <br />
                                                        71 Reviews
                                                    </p>
                                                </div>
                                                <div className="rating-rgt">
                                                    <div className="rating-bar">
                                                        <span>
                                                            5 <i className="fas fa-star" />
                                                        </span>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar grn"
                                                                role="progressbar"
                                                                style={{ width: "90%" }}
                                                            />
                                                        </div>
                                                        <span>256</span>
                                                    </div>
                                                    <div className="rating-bar">
                                                        <span>
                                                            4 <i className="fas fa-star" />
                                                        </span>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar lgt-grn"
                                                                role="progressbar"
                                                                style={{ width: "70%" }}
                                                            />
                                                        </div>
                                                        <span>220</span>
                                                    </div>
                                                    <div className="rating-bar">
                                                        <span>
                                                            3 <i className="fas fa-star" />
                                                        </span>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar yllw"
                                                                role="progressbar"
                                                                style={{ width: "55%" }}
                                                            />
                                                        </div>
                                                        <span>110</span>
                                                    </div>
                                                    <div className="rating-bar">
                                                        <span>
                                                            2 <i className="fas fa-star" />
                                                        </span>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar org"
                                                                role="progressbar"
                                                                style={{ width: "40%" }}
                                                            />
                                                        </div>
                                                        <span>47</span>
                                                    </div>
                                                    <div className="rating-bar">
                                                        <span>
                                                            1 <i className="fas fa-star" />
                                                        </span>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar rd"
                                                                role="progressbar"
                                                                style={{ width: "25%" }}
                                                                aria-valuenow={25}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                        <span>15</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-6 col-sm-6">
                                            <div className="review-user-cards">
                                                <h6>Jan 20, 2024</h6>
                                                <p className="rating">
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="far fa-star" />
                                                </p>
                                                <h4>
                                                    <span>AK</span> Alex K.
                                                </h4>
                                                <p>
                                                    Working at Sam.AI has been an incredible journey so far.
                                                    The technology we're building is truly cutting-edge, and
                                                    being a part of a team that's revolutionizing how people
                                                    achieve their goals is immensely fulfilling.{" "}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-6 col-sm-6">
                                            <div className="review-user-cards">
                                                <h6>Jan 20, 2024</h6>
                                                <p className="rating">
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="far fa-star" />
                                                </p>
                                                <h4>
                                                    <span>AK</span> Alex K.
                                                </h4>
                                                <p>
                                                    Working at Sam.AI has been an incredible journey so far.
                                                    The technology we're building is truly cutting-edge, and
                                                    being a part of a team that's revolutionizing how people
                                                    achieve their goals is immensely fulfilling.{" "}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-6 col-sm-6">
                                            <div className="review-user-cards">
                                                <h6>Jan 20, 2024</h6>
                                                <p className="rating">
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="far fa-star" />
                                                </p>
                                                <h4>
                                                    <span>AK</span> Alex K.
                                                </h4>
                                                <p>
                                                    Working at Sam.AI has been an incredible journey so far.
                                                    The technology we're building is truly cutting-edge, and
                                                    being a part of a team that's revolutionizing how people
                                                    achieve their goals is immensely fulfilling.{" "}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-6 col-sm-6">
                                            <div className="review-user-cards">
                                                <h6>Jan 20, 2024</h6>
                                                <p className="rating">
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="far fa-star" />
                                                </p>
                                                <h4>
                                                    <span>AK</span> Alex K.
                                                </h4>
                                                <p>
                                                    Working at Sam.AI has been an incredible journey so far.
                                                    The technology we're building is truly cutting-edge, and
                                                    being a part of a team that's revolutionizing how people
                                                    achieve their goals is immensely fulfilling.{" "}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-6 col-sm-6">
                                            <div className="review-user-cards">
                                                <h6>Jan 20, 2024</h6>
                                                <p className="rating">
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="far fa-star" />
                                                </p>
                                                <h4>
                                                    <span>AK</span> Alex K.
                                                </h4>
                                                <p>
                                                    Working at Sam.AI has been an incredible journey so far.
                                                    The technology we're building is truly cutting-edge, and
                                                    being a part of a team that's revolutionizing how people
                                                    achieve their goals is immensely fulfilling.{" "}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-6 col-sm-6">
                                            <div className="review-user-cards">
                                                <h6>Jan 20, 2024</h6>
                                                <p className="rating">
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="far fa-star" />
                                                </p>
                                                <h4>
                                                    <span>AK</span> Alex K.
                                                </h4>
                                                <p>
                                                    Working at Sam.AI has been an incredible journey so far.
                                                    The technology we're building is truly cutting-edge, and
                                                    being a part of a team that's revolutionizing how people
                                                    achieve their goals is immensely fulfilling.{" "}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-6 col-sm-6">
                                            <div className="review-user-cards">
                                                <h6>Jan 20, 2024</h6>
                                                <p className="rating">
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="far fa-star" />
                                                </p>
                                                <h4>
                                                    <span>AK</span> Alex K.
                                                </h4>
                                                <p>
                                                    Working at Sam.AI has been an incredible journey so far.
                                                    The technology we're building is truly cutting-edge, and
                                                    being a part of a team that's revolutionizing how people
                                                    achieve their goals is immensely fulfilling.{" "}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-6 col-sm-6">
                                            <div className="review-user-cards">
                                                <h6>Jan 20, 2024</h6>
                                                <p className="rating">
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="far fa-star" />
                                                </p>
                                                <h4>
                                                    <span>AK</span> Alex K.
                                                </h4>
                                                <p>
                                                    Working at Sam.AI has been an incredible journey so far.
                                                    The technology we're building is truly cutting-edge, and
                                                    being a part of a team that's revolutionizing how people
                                                    achieve their goals is immensely fulfilling.{" "}
                                                </p>
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
            <section className="product-sec tp-space">
                <div className="container">
                    <h3 className="title">
                        Similar <span>Products</span>
                    </h3>
                    <ProductSlide />
                </div>
            </section>
            {/* bulk-order-popup-start */}
            <BulkOrder />
            {/* bulk-order-popup-end */}




        </>
    )
}

export default ProductDetails