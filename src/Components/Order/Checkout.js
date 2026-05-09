import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import product from "../../assets/images/product-01.png"
import smallicon from '../../assets/images/small-coin.svg'

function Checkout() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/">
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
            <section className="checkout-sec tp-space">
                <div className="container">
                    <h3 className="title">Checkout</h3>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="checkout-lft">
                                <h4>Billing Information</h4>
                                <form action="">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">First name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your first Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">Last name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your Last Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">Email address</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter Email Address"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">Phone number</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="phone"
                                                    placeholder="Enter Phone Number"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">Alternate Phone Number</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="phone2"
                                                    placeholder="Enter Alternate Phone Number"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">Full Address</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Full Address"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6">
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">Country / Region</label>
                                                <select name="" id="" className="form-select">
                                                    <option value="">Select</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6">
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">State</label>
                                                <select name="" id="" className="form-select">
                                                    <option value="">State</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6">
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">City</label>
                                                <select name="" id="" className="form-select">
                                                    <option value="">City</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6">
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">Pin code</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Enter pin code"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="custom-frm-bx">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="address"
                                                    />
                                                    <label className="form-check-label" htmlFor="address">
                                                        {" "}
                                                        Ship to a different address{" "}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <h4>Additional Info</h4>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">Order Notes (Optional)</label>
                                                <textarea
                                                    name=""
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Notes about your order, e.g. special notes for delivery"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cards shadow-none">
                                <div className="cards-head">
                                    <h5 className="fz-18">Order Summary</h5>
                                </div>
                                <div className="cards-body">
                                    <div className="order-summary">
                                        <div className="order-summary-lft">
                                            <span>
                                                <img src={product} alt="" />
                                            </span>
                                            <div>
                                                <h5>KATYAYANI ACTIVAT...</h5>
                                                <p className="mb-0">
                                                    250 gms <em>Qty:2</em>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="price">₹57.70</p>
                                    </div>
                                    <div className="order-summary">
                                        <div className="order-summary-lft">
                                            <span>
                                                <img src={product} alt="" />
                                            </span>
                                            <div>
                                                <h5>KATYAYANI ACTIVAT...</h5>
                                                <p className="mb-0">
                                                    250 gms <em>Qty:2</em>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="price">₹57.70</p>
                                    </div>
                                    <div className="summary-frm">
                                        <form action="">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="gst"
                                                    defaultChecked=""
                                                />
                                                <label className="form-check-label" htmlFor="gst">
                                                    {" "}
                                                    Use GST Invoice{" "}
                                                </label>
                                            </div>
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">GST Number</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Enter GST number"
                                                />
                                            </div>
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">Business Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Business Name"
                                                />
                                            </div>
                                            <div className="custom-frm-bx text-center">
                                                <button className="thm-btn org-btn" type="button">
                                                    Save
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <ul className="billing">
                                        <li>
                                            <span>Subtotal:</span>
                                            <span>₹115.40</span>
                                        </li>
                                        <li>
                                            <span>Shipping:</span>
                                            <span>Free</span>
                                        </li>
                                        <li>
                                            <span>Total:</span>
                                            <span>₹115.40</span>
                                        </li>
                                    </ul>
                                    <div className="coin-bx">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="coin"
                                            />
                                            <label className="form-check-label" htmlFor="coin">
                                                {" "}
                                                Use <img src={smallicon} alt="" /> 50 Coins{" "}
                                                <span className="d-block">1 Coin= 1 Rupees </span>{" "}
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className="fz-20 fw-700 text-dark">Payment Method</h5>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="payment"
                                            id="cash"
                                        />
                                        <label className="form-check-label" htmlFor="cash">
                                            Cash on Delivery
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="payment"
                                            id="upi"
                                        />
                                        <label className="form-check-label" htmlFor="upi">
                                            UPI
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="payment"
                                            id="card"
                                        />
                                        <label className="form-check-label" htmlFor="card">
                                            Credit / debit Card{" "}
                                        </label>
                                    </div>
                                    <Link
                                        to="/success"
                                        className="thm-btn success w-100 rounded-5 mt-3"
                                    >
                                        Place Order
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}

export default Checkout