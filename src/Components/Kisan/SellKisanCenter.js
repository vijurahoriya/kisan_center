import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function SellKisanCenter() {
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
            <section className="kesan-cntr tp-space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <div className="kesan-cntr-innr">
                                <h4 className="text-center">Sell on kisan center</h4>
                                <h6 className="text-center">
                                    Partner with Us – Join Our Network of Trusted Vendors!
                                </h6>
                                <form action="">
                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter Email Address"
                                        />
                                    </div>
                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Phone number</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="phone"
                                            defaultValue="+91 9876543210"
                                            placeholder=""
                                        />
                                        <span className="verified">
                                            <i className="fas fa-badge-check me-2" />
                                            Verified
                                        </span>
                                    </div>
                                    <div className="custom-frm-bx">
                                        <label htmlFor="">State</label>
                                        <select name="" id="" className="form-select">
                                            <option value="">Select State</option>
                                        </select>
                                    </div>
                                    <div className="custom-frm-bx">
                                        <label htmlFor="">City</label>
                                        <select name="" id="" className="form-select">
                                            <option value="">Select City</option>
                                        </select>
                                    </div>
                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Pin Code</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Pin Code"
                                        />
                                    </div>
                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Company Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Company name"
                                        />
                                    </div>
                                    <div className="custom-frm-bx">
                                        <label htmlFor="">GST Number</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter GST Number"
                                        />
                                    </div>
                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Phone number</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="phone2"
                                            defaultValue="+91 9876543210"
                                            placeholder=""
                                        />
                                        <span className="verified">
                                            <i className="fas fa-badge-check me-2" />
                                            Verified
                                        </span>
                                    </div>
                                    <div className="custom-frm-bx">
                                        <button className="thm-btn success w-100" type="button">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default SellKisanCenter