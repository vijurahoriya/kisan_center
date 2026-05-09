import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function ContactUs() {
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
            <section className="contact-sec tp-space">
                <div className="container">
                    <h3 className="title">Contact</h3>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contact-lft contact-cards">
                                <ul className="contact-lft-list">
                                    <li>
                                        <span className="fas fa-map-marker-alt me-2" />
                                        <Link to="">
                                            Vaishali Tower 2nd Nursery Circle Vaishali Nagar Jaipur 302021
                                        </Link>
                                    </li>
                                    <li>
                                        <span className="fas fa-envelope me-2" />
                                        <a href="mailto:kisancenter@gmail.com">kisancenter@gmail.com</a>
                                    </li>
                                    <li>
                                        <span className="fas fa-phone me-2" />
                                        <a href="tel:(+91) -9876543210">(+91) -9876543210</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contact-cards">
                                <h5>You can ask us questions</h5>
                                <p>
                                    Contact us for all your questions and opinions, or you can solve
                                    your <br />
                                    problems in a shorter time with our contact offices.
                                </p>
                                <form action="">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">First name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter First name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">Last name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Last name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">Email address</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter email address"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">Message</label>
                                                <textarea
                                                    name=""
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Type...."
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="custom-frm-bx">
                                                <button className="thm-btn success" type="button">
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
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

export default ContactUs