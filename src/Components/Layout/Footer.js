import React from 'react'
import newsletter from '../../assets/images/newsletter-img.png'
import deliveryicon01 from '../../assets/images/delivery-icon-01.png'
import deliveryicon02 from '../../assets/images/delivery-icon-02.png'
import deliveryicon03 from '../../assets/images/delivery-icon-03.png'
import deliveryicon04 from '../../assets/images/delivery-icon-04.png'
import deliveryicon05 from '../../assets/images/delivery-icon-05.png'
import productimg from '../../assets/images/product-img-01.png'
import logo from '../../assets/images/logo.png'
import appstoreicon from '../../assets/images/appstore.svg'
import playstoreicon from '../../assets/images/playstore.svg'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <>
            {/* Tracking-modal-start */}
            <div
                className="modal fade tracking-modal"
                id="tracking"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <i className="far fa-times" />
                        </button>
                        <div className="modal-body">
                            <h4 className="text-center">Track Order</h4>
                            <p className="text-center">
                                To track your order please enter your order ID in the input field
                                below and press the “Track Order” button. this was given to you on
                                your receipt and in the confirmation email you should have received.
                            </p>
                            <form action="">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Order ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Order ID"
                                    />
                                </div>
                                <div className="custom-frm-bx">
                                    <button className="thm-btn success w-100" type="button">
                                        Track Order
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tracking-modal-end */}
            <section className="delivery-sec tp-space">
                <div className="container">
                    <ul className="delivery-list">
                        <li>
                            <span>
                                <img src={deliveryicon01} alt="" />
                            </span>
                            <div>
                                <h6>Best prices &amp; offers</h6>
                                <p>Orders $50 or more</p>
                            </div>
                        </li>
                        <li>
                            <span>
                                <img src={deliveryicon02} alt="" />
                            </span>
                            <div>
                                <h6>Free delivery</h6>
                                <p>24/7 amazing services</p>
                            </div>
                        </li>
                        <li>
                            <span>
                                <img src={deliveryicon03} alt="" />
                            </span>
                            <div>
                                <h6>Great daily deal</h6>
                                <p>When you sign up</p>
                            </div>
                        </li>
                        <li>
                            <span>
                                <img src={deliveryicon04} alt="" />
                            </span>
                            <div>
                                <h6>Wide assortment</h6>
                                <p>Mega Discounts</p>
                            </div>
                        </li>
                        <li>
                            <span>
                                <img src={deliveryicon05} alt="" />
                            </span>
                            <div>
                                <h6>Easy returns</h6>
                                <p>Within 30 days</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="news-letter tp-space">
                <div className="container">
                    <div className="news-letter-innr">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <div className="news-letter-lft">
                                    <h3>Join our newsletter </h3>
                                    <p>
                                        Register now to get latest updates on promotions &amp; coupons.
                                    </p>
                                    <div className="news-letter-bx">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your emaill address"
                                        />
                                        <button className="thm-btn org-btn" type="button">
                                            Subscribe
                                        </button>
                                        <span className="fas fa-paper-plane" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <img src={newsletter} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <>
                {/* Quantity-model-start */}
                <div
                    className="modal fade quantity-popup"
                    id="quantity"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="fas fa-times" />
                            </button>
                            <div className="modal-body">
                                <div className="product-bar">
                                    <div className="product-bar-img">
                                        <img src={productimg} alt="" />
                                    </div>
                                    <div className="product-bar-content">
                                        <p>Indofil</p>
                                        <h4>Indofil M-45 Fungicide</h4>
                                    </div>
                                </div>
                                <div className="quantity-bar">
                                    <div className="quantity-bar-price">
                                        <h6>250 GM</h6>
                                        <p className="price">
                                            ₹28.85 <del>₹32.8</del>
                                        </p>
                                    </div>
                                    <Link to="" className="thm-btn light-btn">
                                        Add To Cart
                                    </Link>
                                </div>
                                <div className="quantity-bar">
                                    <div className="quantity-bar-price">
                                        <h6>250 GM</h6>
                                        <p className="price">
                                            ₹28.85 <del>₹32.8</del>
                                        </p>
                                    </div>
                                    <Link to="" className="thm-btn light-btn">
                                        Add To Cart
                                    </Link>

                                </div>
                                <div className="quantity-bar">
                                    <div className="quantity-bar-price">
                                        <h6>250 GM</h6>
                                        <p className="price">
                                            ₹28.85 <del>₹32.8</del>
                                        </p>
                                    </div>
                                    <div className="quantity">
                                        <button type="button" className="minus">
                                            <i className="fas fa-minus" />
                                        </button>
                                        <input className="number" type="number" defaultValue={0} />
                                        <button type="button" className="plus">
                                            <i className="fas fa-plus" />
                                        </button>
                                    </div>
                                </div>
                                <div className="quantity-bar">
                                    <div className="quantity-bar-price">
                                        <h6>250 GM</h6>
                                        <p className="price">
                                            ₹28.85 <del>₹32.8</del>
                                        </p>
                                    </div>
                                    <Link to="" className="thm-btn disable-btn">
                                        Sold Out
                                    </Link>
                                </div>
                                <div className="quantity-bar">
                                    <div className="quantity-bar-price">
                                        <h6>250 GM</h6>
                                        <p className="price">
                                            ₹28.85 <del>₹32.8</del>
                                        </p>
                                    </div>
                                    <Link to="" className="thm-btn light-btn">
                                        Add To Cart
                                    </Link>
                                </div>
                                <div className="quantity-bar">
                                    <div className="quantity-bar-price">
                                        <h6>250 GM</h6>
                                        <p className="price">
                                            ₹28.85 <del>₹32.8</del>
                                        </p>
                                    </div>
                                    <Link to="" className="thm-btn light-btn">
                                        Add To Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Quantity-model-end */}
            </>

            <footer className="thm-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="ftr-abt">
                                <Link to="">
                                    <img src={logo} alt="" />
                                </Link>
                                <ul className="ftr-contact">
                                    <li>
                                        <Link to="">
                                            Vaishali Tower 2nd Nursery Circle Vaishali Nagar Jaipur 302021
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="tel:(+91)-9876543210">
                                            <i className="fas fa-headset me-2" />
                                            (+91) -9876543210
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="mailto:kisancenter@gmail.com">
                                            <i className="fas fa-envelope me-2" />
                                            kisancenter@gmail.com
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <i className="far fa-clock me-2" />
                                            Hours:10:00 - 18:00, Mon - Sat
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <h4 className="ftr-head">Company</h4>
                            <ul className="ftr-link">
                                <li>
                                    <Link to="/about-us">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/sell-kisan-center">Sell on Kisan Center</Link>
                                </li>
                                <li>
                                    <Link to="/faq">FAQs</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Blogs</Link>
                                </li>
                                <li>
                                    <Link to="/contact-us">Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/terms-of-service">Terms of Service</Link>
                                </li>
                                <li>
                                    <Link to="/shiping-policy">Shipping Policies</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <h4 className="ftr-head">Account</h4>
                            <ul className="ftr-link">
                                <li>
                                    <Link to="/login">Sign In</Link>
                                </li>
                                <li>
                                    <Link to="/cart">View Cart</Link>
                                </li>
                                <li>
                                    <Link to="/wishlist">My Wishlist</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Blogs</Link>
                                </li>
                                <li>
                                    <Link to="/contact-us">Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/terms-of-service">Terms of Service</Link>
                                </li>
                                <li>
                                    <Link to="/shiping-policy">Shipping Policies</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <h4 className="ftr-head">Category</h4>
                            <ul className="ftr-link">
                                <li>
                                    <Link to="/product-list">Fungicides</Link>
                                </li>
                                <li>
                                    <Link to="/product-list">Growth Promoters</Link>
                                </li>
                                <li>
                                    <Link to="/product-list">Herbicides</Link>
                                </li>
                                <li>
                                    <Link to="/product-list">Vegetable &amp; Fruit Seeds</Link>
                                </li>
                                <li>
                                    <Link to="/product-list">Nutrients</Link>
                                </li>
                                <li>
                                    <Link to="/product-list">Flower Seeds</Link>
                                </li>
                                <li>
                                    <Link to="/product-list">Insecticides</Link>
                                </li>
                                <li>
                                    <Link to="/product-list" className="view">
                                        30+ Category
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <h4 className="ftr-head">Popular</h4>
                            <ul className="ftr-link">
                                <li>
                                    <Link to="/product-list">Brands</Link>
                                </li>
                                <li>
                                    <Link to="/product-list">Seeds</Link>
                                </li>
                                <li>
                                    <Link to="/product-list">Crop Protection</Link>
                                </li>
                                <li>
                                    <Link to="/product-list">Crop Nutrition</Link>
                                </li>
                                <li>
                                    <Link to="/product-list">Animal Husbandary</Link>
                                </li>
                                <li>
                                    <Link to="/product-list">Equipments</Link>
                                </li>
                                <li>
                                    <Link to="/product-list">Organic</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <h4 className="ftr-head">Install App</h4>
                            <div className="ftr-download">
                                <Link to="" target="_blank">
                                    <img src={playstoreicon} alt="" />
                                </Link>
                                <Link to="" target="_blank">
                                    <img src={appstoreicon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-ftr">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                <p className="mb-0">
                                    © 2025, <Link to="">Kisan center</Link> All rights
                                    reserved
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                <div className="bottom-ftr-middle">
                                    <span className="fas fa-phone call-icon" />
                                    <div>
                                        <Link to="tel:+91-9876543210">+91-9876543210</Link>
                                        <p>24/7 Support Center</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <ul className="bottom-ftr-media">
                                    <li>Follow Us</li>
                                    <li>
                                        <Link to="">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <i className="fab fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <i className="fab fa-pinterest-p" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <i className="fab fa-youtube" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer