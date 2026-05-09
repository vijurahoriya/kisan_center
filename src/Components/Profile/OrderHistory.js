import React, { useEffect } from 'react'
import ProfileSidebar from './ProfileSidebar'
import { Link } from 'react-router-dom'
import BreadCrumb from '../Services/BreadCrumb';

function OrderHistory() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <BreadCrumb />
            <section className="user-main tp-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <ProfileSidebar />
                        </div>
                        <div className="col-lg-9">
                            <div className="cards shadow-none order-history">
                                <div className="cards-body">
                                    <h5 className="title2">Order History</h5>
                                    <div className="table table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Order ID</th>
                                                    <th>Date</th>
                                                    <th>Total</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>#987605</td>
                                                    <td>April 24, 2021 at 7:32 PM </td>
                                                    <td>₹115.40 (5 Products)</td>
                                                    <td>
                                                        <span className="badges warning">Pending</span>
                                                    </td>
                                                    <td>
                                                        <Link
                                                            to=""
                                                            className="text-success fw-600"
                                                        >
                                                            View Details
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#987605</td>
                                                    <td>April 24, 2021 at 7:32 PM </td>
                                                    <td>₹115.40 (5 Products)</td>
                                                    <td>
                                                        <span className="badges warning">Pending</span>
                                                    </td>
                                                    <td>
                                                        <Link
                                                            to=""
                                                            className="text-success fw-600"
                                                        >
                                                            View Details
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#987605</td>
                                                    <td>April 24, 2021 at 7:32 PM </td>
                                                    <td>₹115.40 (5 Products)</td>
                                                    <td>
                                                        <span className="badges success">Delivered</span>
                                                    </td>
                                                    <td>
                                                        <Link
                                                            to=""
                                                            className="text-success fw-600"
                                                        >
                                                            View Details
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#987605</td>
                                                    <td>April 24, 2021 at 7:32 PM </td>
                                                    <td>₹115.40 (5 Products)</td>
                                                    <td>
                                                        <span className="badges success">Delivered</span>
                                                    </td>
                                                    <td>
                                                        <Link
                                                            to=""
                                                            className="text-success fw-600"
                                                        >
                                                            View Details
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#987605</td>
                                                    <td>April 24, 2021 at 7:32 PM </td>
                                                    <td>₹115.40 (5 Products)</td>
                                                    <td>
                                                        <span className="badges success">Delivered</span>
                                                    </td>
                                                    <td>
                                                        <Link
                                                            to=""
                                                            className="text-success fw-600"
                                                        >
                                                            View Details
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#987605</td>
                                                    <td>April 24, 2021 at 7:32 PM </td>
                                                    <td>₹115.40 (5 Products)</td>
                                                    <td>
                                                        <span className="badges success">Delivered</span>
                                                    </td>
                                                    <td>
                                                        <Link
                                                            to=""
                                                            className="text-success fw-600"
                                                        >
                                                            View Details
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#987605</td>
                                                    <td>April 24, 2021 at 7:32 PM </td>
                                                    <td>₹115.40 (5 Products)</td>
                                                    <td>
                                                        <span className="badges success">Delivered</span>
                                                    </td>
                                                    <td>
                                                        <Link
                                                            to=""
                                                            className="text-success fw-600"
                                                        >
                                                            View Details
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#987605</td>
                                                    <td>April 24, 2021 at 7:32 PM </td>
                                                    <td>₹115.40 (5 Products)</td>
                                                    <td>
                                                        <span className="badges danger">Cancel</span>
                                                    </td>
                                                    <td>
                                                        <Link
                                                            to=""
                                                            className="text-success fw-600"
                                                        >
                                                            View Details
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#987605</td>
                                                    <td>April 24, 2021 at 7:32 PM </td>
                                                    <td>₹115.40 (5 Products)</td>
                                                    <td>
                                                        <span className="badges info">Return</span>
                                                    </td>
                                                    <td>
                                                        <Link
                                                            to=""
                                                            className="text-success fw-600"
                                                        >
                                                            View Details
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#987605</td>
                                                    <td>April 24, 2021 at 7:32 PM </td>
                                                    <td>₹115.40 (5 Products)</td>
                                                    <td>
                                                        <span className="badges success">Delivered</span>
                                                    </td>
                                                    <td>
                                                        <Link
                                                            to=""
                                                            className="text-success fw-600"
                                                        >
                                                            View Details
                                                        </Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
            </section>

        </>
    )
}

export default OrderHistory