import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import product from "../../assets/images/product-01.png"
import returnimg from "../../assets/images/return-img.png"

function OrderDeliverDetails() {
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
                                className="text-warning fw-700 text-decoration-underline"
                                data-bs-toggle="modal"
                                data-bs-target="#order-return"
                            >
                                Return Order
                            </Link>
                        </div>
                        <div className="cards-body">
                            <p>
                                {" "}
                                Order Delivered in <span className="text-dark">April 28, 2021</span>
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
                                        <li className="deliver">
                                            <span>
                                                <i className="fas fa-check" />
                                            </span>
                                            <h5>On the way</h5>
                                        </li>
                                        <li className="deliver">
                                            <span>
                                                <i className="fas fa-check" />
                                            </span>
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
                                    <div className="cards shadow-none address-bx">
                                        <div className="cards-body">
                                            <h5>Rating</h5>
                                            <p className="rating">
                                                <span className="fas fa-star" />
                                                <span className="fas fa-star" />
                                                <span className="fas fa-star" />
                                                <span className="fas fa-star" />
                                                <span className="far fa-star" />
                                            </p>
                                            <h6>April 28, 2021</h6>
                                            <p>
                                                Here's a name you can trust. Customer support team is so warm
                                                &amp; helpful.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <>
                {/* Return-order-modal-start */}
                <div
                    className="modal fade custom-modal"
                    id="order-return"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="custom-head">
                                <h5>Return Order</h5>
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
                                    <img src={returnimg} alt="" />
                                </div>
                                <form action="">
                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Reason for return order</label>
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
                                        <button className="thm-btn success w-100" type="button">
                                            Return Order
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Return-order-modal-end */}
            </>


        </>
    )
}

export default OrderDeliverDetails