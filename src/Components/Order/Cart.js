import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import product from "../../assets/images/product-01.png"

function Cart() {
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
            <section className="cart-sec tp-space">
                <div className="container">
                    <h3 className="title">My Shopping Cart</h3>
                    <div className="row">
                        <div className="col-lg-9 col-md-12">
                            <div className="cart-lft">
                                <div className="table table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Product Image</th>
                                                <th>Product Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Subtotal</th>
                                                <th />
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
                                                <td>
                                                    <div className="quantity">
                                                        <button type="button" className="minus">
                                                            <i className="fas fa-minus" />
                                                        </button>
                                                        <input
                                                            className="number"
                                                            type="number"
                                                            defaultValue={0}
                                                        />
                                                        <button type="button" className="plus">
                                                            <i className="fas fa-plus" />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="price">₹57.70</p>
                                                </td>
                                                <td>
                                                    <Link to="">
                                                        <i className="fas fa-times" />
                                                    </Link>
                                                </td>
                                            </tr>
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
                                                <td>
                                                    <div className="quantity">
                                                        <button type="button" className="minus">
                                                            <i className="fas fa-minus" />
                                                        </button>
                                                        <input
                                                            className="number"
                                                            type="number"
                                                            defaultValue={0}
                                                        />
                                                        <button type="button" className="plus">
                                                            <i className="fas fa-plus" />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="price">₹57.70</p>
                                                </td>
                                                <td>
                                                    <Link to="">
                                                        <i className="fas fa-times" />
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={12} className="text-end">
                                                    <Link
                                                        to=""
                                                        className="thm-btn disable-btn rounded-5 text-dark"
                                                    >
                                                        Back to Shopping
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="apply-cupon">
                                    <h5>Coupon Code</h5>
                                    <div className="apply-cupon-innr">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter code"
                                        />
                                        <button className="thm-btn success" type="button">
                                            Apply Coupon
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="cards shadow-none">
                                <div className="cards-head">
                                    <h5 className="fz-18">Cart Total</h5>
                                </div>
                                <div className="cards-body">
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
                                    <Link to="/checkout" className="thm-btn success w-100 mt-3">
                                        {" "}
                                        Proceed to checkout
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

export default Cart