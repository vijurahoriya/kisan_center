import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import cancelimg from "../../assets/images/cancel-img.png"
import checkicon from "../../assets/images/check-icon.png"
import smallcoin from "../../assets/images/small-coin.svg"
import product from "../../assets/images/product-01.png"


function OrderDetails() {
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
            <section className="order-dtl-sec tp-space">
                <div className="container">
                    <div className="cards shadow-none">
                        <div className="cards-head order-tp">
                            <h5>
                                Order Details{" "}
                                <span>
                                    {" "}
                                    • Order Placed in <em>April 24, 2021 at 7:32 PM</em>{" "}
                                </span>{" "}
                                <span>• 4 Products</span>
                            </h5>
                            <Link
                                to=""
                                className="text-danger fw-700 text-decoration-underline"
                                data-bs-toggle="modal"
                                data-bs-target="#order-cancel"
                            >
                                Cancel Order
                            </Link>
                        </div>
                        <div className="cards-body">
                            <p>
                                {" "}
                                Order expected arrival{" "}
                                <span className="text-dark">April 28, 2021</span>
                            </p>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="cards shadow-none address-bx">
                                        <div className="cards-body">
                                            <h5>Billing Address</h5>
                                            <h6>Sunil Sharma</h6>
                                            <p>
                                                4140 Parker Rd. Allentown, New Mexico 31134{" "}
                                                <span className="d-block">sunil4657687@gmail.com</span>{" "}
                                                <span className="d-block">+91-9876543210</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="cards shadow-none address-bx">
                                        <div className="cards-body">
                                            <h5>Shipping Address</h5>
                                            <h6>Sunil Sharma</h6>
                                            <p>
                                                4140 Parker Rd. Allentown, New Mexico 31134{" "}
                                                <span className="d-block">sunil4657687@gmail.com</span>{" "}
                                                <span className="d-block">+91-9876543210</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="cards shadow-none">
                                        <div className="cards-body">
                                            <ul className="billing">
                                                <li>
                                                    <span>Order Id:</span>
                                                    <span>Payment Method:</span>
                                                </li>
                                                <li>
                                                    <span>#987605</span>
                                                    <span>UPI</span>
                                                </li>
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <ul className="delivery-track">
                                        <li className="deliver">
                                            <span>
                                                <i className="fas fa-check" />
                                            </span>
                                            <h5>Order received</h5>
                                        </li>
                                        <li className="deliver">
                                            <span>
                                                <i className="fas fa-check" />
                                            </span>
                                            <h5>Processing</h5>
                                        </li>
                                        <li className="not-deliver">
                                            <span>03</span>
                                            <h5>On the way</h5>
                                        </li>
                                        <li className="not-deliver">
                                            <span>04</span>
                                            <h5>Delivered</h5>
                                        </li>
                                    </ul>
                                    <div className="order-dtl-table cart-lft">
                                        <div className="table table-responsive">
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Product Image</th>
                                                        <th>Product Name</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th>Subtotal</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <img
                                                                src={product}
                                                                className="img-40"
                                                                alt=""
                                                            />
                                                        </td>
                                                        <td>
                                                            <h6>Indofil</h6>
                                                            <h4>Indofil M-45 Fungicide</h4>
                                                            <p>250 gms</p>
                                                        </td>
                                                        <td>
                                                            <p className="price">₹28.85</p>
                                                        </td>
                                                        <td>X2</td>
                                                        <td>
                                                            <p className="price">₹57.70</p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="rating-bx">
                                        <h5>Rating</h5>
                                        <Link
                                            to=""
                                            data-bs-toggle="modal"
                                            data-bs-target="#add-rating"
                                        >
                                            Leave a Rating <i className="far fa-plus ms-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Order-cancel-modal-start */}
            <div
                className="modal fade custom-modal"
                id="order-cancel"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="custom-head">
                            <h5>Cancel Order</h5>
                        </div>
                        <button
                            type="button"
                            className="btn-close close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <i className="fas fa-times" />
                        </button>
                        <div className="modal-body">
                            <div className="logout-innr">
                                <img src={cancelimg} alt="" />
                            </div>
                            <form action="">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Reason for Cancel Order</label>
                                    <select name="" id="" className="form-select">
                                        <option value="">My Reason is not listed</option>
                                    </select>
                                </div>
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Comment</label>
                                    <textarea
                                        name=""
                                        id=""
                                        className="form-control"
                                        placeholder="Type..."
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="custom-frm-bx">
                                    <button className="thm-btn danger w-100" type="button">
                                        Cancel Order
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Order-cancel-modal-end */}
            {/* Order-Rating-modal-start */}
            <div
                className="modal fade custom-modal"
                id="add-rating"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="custom-head">
                            <h5>Rating</h5>
                        </div>
                        <button
                            type="button"
                            className="btn-close close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <i className="fas fa-times" />
                        </button>
                        <div className="modal-body">
                            <form action="">
                                <ul id="stars" className="star-list">
                                    <li className="star selected" title="Poor" data-value={1}>
                                        <i className="fas fa-star fa-fw" />
                                    </li>
                                    <li className="star" title="Fair" data-value={2}>
                                        <i className="fas fa-star fa-fw" />
                                    </li>
                                    <li className="star" title="Good" data-value={3}>
                                        <i className="fas fa-star fa-fw" />
                                    </li>
                                    <li className="star" title="Excellent" data-value={4}>
                                        <i className="fas fa-star fa-fw" />
                                    </li>
                                    <li className="star" title="WOW!!!" data-value={5}>
                                        <i className="fas fa-star fa-fw" />
                                    </li>
                                </ul>
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Comment</label>
                                    <textarea
                                        name=""
                                        id=""
                                        className="form-control"
                                        placeholder="Type..."
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="custom-frm-bx">
                                    <button
                                        className="thm-btn success w-100"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#congratulations"
                                    >
                                        Publish Review
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Order-Rating-modal-end */}
            {/* congratulations-modal-start */}
            <div
                className="modal fade custom-modal"
                id="congratulations"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button
                            type="button"
                            className="btn-close close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <i className="fas fa-times" />
                        </button>
                        <div className="modal-body">
                            <div className="congratulations-innr">
                                <img src={checkicon} alt="" />
                                <h4>Thank you for your feedback!</h4>
                                <p>Your review has been submitted successfully.</p>
                                <h5>
                                    Congratulations! <span>You Win</span>
                                </h5>
                                <p className="congratulations-coin">
                                    <img src={smallcoin} alt="" /> <span>20</span>{" "}
                                    Coins
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* congratulations-modal-end */}




        </>
    )
}

export default OrderDetails