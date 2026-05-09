import React from 'react'
import bulkimg from '../../assets/images/bulk-img.png'

function BulkOrder() {
    return (
        <>
            <div
                className="modal fade bulk-order-poup"
                id="bulk-order"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <i className="fas fa-times" />
                        </button>
                        <div className="bulk-order-head">
                            <h5>Bulk order inquiry </h5>
                            <p>
                                Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div className="modal-body">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div>
                                        <form action="">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">First Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter first name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Last Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter last name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Phone number</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="phone"
                                                            placeholder="Enter phone number"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Product Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter product name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Product Quantity</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            placeholder=""
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
                                                        <button className="thm-btn success w-100" type="button">
                                                            Submit{" "}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block d-xl-block">
                                    <img src={bulkimg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BulkOrder