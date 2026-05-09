import React, { useEffect, useState } from 'react'
import ProfileSidebar from './ProfileSidebar'
import useravtar from '../../assets/images/user-avtar.png'
import walleticon from '../../assets/images/wallet-coin.png'
import coinicon from '../../assets/images/coin-icon.png'
import smallicon from '../../assets/images/small-coin.svg'
import earningcoin from '../../assets/images/earning-coin.png'
import { Link } from 'react-router-dom'
import BreadCrumb from '../Services/BreadCrumb'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile, updateProfile } from '../Features/authSlice'

function Profile() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { isSubmitting, setIsSubmitting } = useState(false)
    // Initialize form data with user data
    const [formData, setFormData] = useState({
        full_name: user?.full_name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        // gender: user?.gender || "",
        profile_picture: user?.profile_picture || "",
    });

    // Update form data when user data changes
    useEffect(() => {
        if (user) {
            setFormData({
                full_name: user.full_name || "",
                email: user.email || "",
                phone: user.phone || "",
                // gender: user.gender || "",
                profile_picture: user.profile_picture || "",
            });
        }
    }, [user]);

    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleFileChange = (e) => {
        // Handle file upload if needed
        const file = e.target.files[0];
        setFormData({ ...formData, profile_picture: file });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setIsSubmitting(true)
        try {
            // Create FormData object to handle file upload
            const formDataObj = new FormData();
            formDataObj.append('full_name', formData.full_name);
            formDataObj.append('email', formData.email);
            formDataObj.append('phone', formData.phone);
            formDataObj.append('gender', formData.gender);
            if (formData.profile_picture instanceof File) {
                formDataObj.append('profile_picture', formData.profile_picture);
            }

            dispatch(updateProfile(formDataObj));
        } catch (error) {

        } finally {
            // setIsSubmitting(false)
        }

    }

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
                            <div className="cards shadow-none ">
                                <div className="cards-body">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="profile-frm">
                                                <form action="" onSubmit={handleSubmit}>
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="custom-frm-bx profile-usr">
                                                                <img src={
                                                                    formData.profile_picture
                                                                        ? typeof formData.profile_picture === "string"
                                                                            ? formData.profile_picture // If already a URL from backend
                                                                            : URL.createObjectURL(formData.profile_picture) // If it's a File from file input
                                                                        : useravtar
                                                                } alt="useravtar" />
                                                                <input type="file" id="image" onChange={handleFileChange} />
                                                                <label htmlFor="image">
                                                                    <i className="fas fa-pencil" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="custom-frm-bx">
                                                                <label htmlFor="">name</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name='full_name'
                                                                    value={formData.full_name}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="custom-frm-bx">
                                                                <label htmlFor="">Email address</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name='email'
                                                                    value={formData.email}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="custom-frm-bx">
                                                                <label htmlFor="">Phone number</label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    id="phone"
                                                                    name='phone'
                                                                    value={formData.phone}
                                                                    onChange={handleChange}
                                                                    disabled
                                                                    readOnly
                                                                />
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-lg-12 col-md-12">
                                                            <div className="custom-frm-bx">
                                                                <label htmlFor="">Gender</label>
                                                                <select name='gender'
                                                                    value={formData.gender}
                                                                    onChange={handleChange} className="form-select">
                                                                    <option value="">Select Gender</option>
                                                                    <option value="Male">Male</option>
                                                                    <option value="Female">Female</option>
                                                                    <option value="Other">Other</option>
                                                                </select>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="custom-frm-bx">
                                                                <button
                                                                    className="thm-btn success w-100"
                                                                    type="submit"
                                                                // disabled={isSubmitting}
                                                                >
                                                                    {/* {isSubmitting ? 'Updating...' : 'Update'} */}Update
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="wallet-card">
                                                <img src={walleticon} alt="" />
                                                <div>
                                                    <h6 className="text-white">Total Earning Coins</h6>
                                                    <h3>
                                                        300 <span>Coin</span>
                                                    </h3>
                                                    <h6>1 Coin= 1 Rupees </h6>
                                                </div>
                                            </div>
                                            <div className="wallet-btn">
                                                <Link
                                                    to="refer-earn.php"
                                                    className="thm-btn dark"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#how-to-earn"
                                                >
                                                    How To Earn
                                                </Link>
                                                <Link to="" className="thm-btn org-btn">
                                                    How to Use
                                                </Link>
                                                <Link
                                                    to=""
                                                    className="thm-btn"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#earning-history"
                                                >
                                                    Earning History
                                                </Link>
                                                <Link to="/refer-earn"
                                                    className="thm-btn success w-100 mt-3"
                                                >
                                                    Refer &amp; Earn
                                                </Link>
                                            </div>
                                            <div className="cards shadow-none biilig-cards">
                                                <h4>Billing Address</h4>
                                                <h5>Sunil Sharma</h5>
                                                <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                                                <p>sunil4657687@gmail.com</p>
                                                <p>+91-9876543210</p>
                                                <Link to="" className="text-success fw-600">
                                                    Edit Address
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <>
                {/* how-to-earn-modal-start */}
                <div
                    className="modal fade custom-modal"
                    id="how-to-earn"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="custom-head">
                                <h5>How To Earn</h5>
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
                                    <img src={coinicon} alt="" />
                                </div>
                                <ul className="earn-history-list">
                                    <li>
                                        <div className="earn-history-lft">
                                            <span>1</span>
                                            <div>
                                                <h5>Refer your Friend </h5>
                                                <p>
                                                    Your Friend clicks on the referral link or uses referral
                                                    code
                                                </p>
                                            </div>
                                        </div>
                                        <div className="earn-history-rgt">
                                            <p>
                                                <img src={smallicon} alt="" />{" "}
                                                <span>20</span> Coins
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="earn-history-lft">
                                            <span>2</span>
                                            <div>
                                                <h5>Product Buy</h5>
                                                <p>
                                                    Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                                    typesetting industry.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="earn-history-rgt">
                                            <p>
                                                <img src={smallicon} alt="" />{" "}
                                                <span>10</span> Coins
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="earn-history-lft">
                                            <span>3</span>
                                            <div>
                                                <h5>Product Rating</h5>
                                                <p>
                                                    Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                                    typesetting industry.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="earn-history-rgt">
                                            <p>
                                                <img src={smallicon} alt="" />{" "}
                                                <span>30</span> Coins
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* how-to-earn-modal-end */}
                {/* earning-history-modal-start */}
                <div
                    className="modal fade custom-modal"
                    id="earning-history"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="custom-head">
                                <h5>Earning History</h5>
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
                                <ul className="earn-history-list earning-history">
                                    <li>
                                        <div className="earn-history-lft">
                                            <img src={earningcoin} alt="" />
                                            <div>
                                                <h5>Referral code Used</h5>
                                                <p className="text-success">12 March 2025</p>
                                            </div>
                                        </div>
                                        <div className="earn-history-rgt">
                                            <p>
                                                <img src={smallicon} alt="" />{" "}
                                                <span>20</span> Coins
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="earn-history-lft">
                                            <img src={earningcoin} alt="" />
                                            <div>
                                                <h5>Referral code Used</h5>
                                                <p className="text-success">12 March 2025</p>
                                            </div>
                                        </div>
                                        <div className="earn-history-rgt">
                                            <p>
                                                <img src={smallicon} alt="" />{" "}
                                                <span>20</span> Coins
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="earn-history-lft">
                                            <img src={earningcoin} alt="" />
                                            <div>
                                                <h5>Referral code Used</h5>
                                                <p className="text-success">12 March 2025</p>
                                            </div>
                                        </div>
                                        <div className="earn-history-rgt">
                                            <p>
                                                <img src={smallicon} alt="" />{" "}
                                                <span>20</span> Coins
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="earn-history-lft">
                                            <img src={earningcoin} alt="" />
                                            <div>
                                                <h5>Referral code Used</h5>
                                                <p className="text-success">12 March 2025</p>
                                            </div>
                                        </div>
                                        <div className="earn-history-rgt">
                                            <p>
                                                <img src={smallicon} alt="" />{" "}
                                                <span>20</span> Coins
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="earn-history-lft">
                                            <img src={earningcoin} alt="" />
                                            <div>
                                                <h5>Referral code Used</h5>
                                                <p className="text-success">12 March 2025</p>
                                            </div>
                                        </div>
                                        <div className="earn-history-rgt">
                                            <p>
                                                <img src={smallicon} alt="" />{" "}
                                                <span>20</span> Coins
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="earn-history-lft">
                                            <img src={earningcoin} alt="" />
                                            <div>
                                                <h5>Referral code Used</h5>
                                                <p className="text-success">12 March 2025</p>
                                            </div>
                                        </div>
                                        <div className="earn-history-rgt">
                                            <p>
                                                <img src={smallicon} alt="" />{" "}
                                                <span>20</span> Coins
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="earn-history-lft">
                                            <img src={earningcoin} alt="" />
                                            <div>
                                                <h5>Referral code Used</h5>
                                                <p className="text-success">12 March 2025</p>
                                            </div>
                                        </div>
                                        <div className="earn-history-rgt">
                                            <p>
                                                <img src={smallicon} alt="" />{" "}
                                                <span>20</span> Coins
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="earn-history-lft">
                                            <img src={earningcoin} alt="" />
                                            <div>
                                                <h5>Referral code Used</h5>
                                                <p className="text-success">12 March 2025</p>
                                            </div>
                                        </div>
                                        <div className="earn-history-rgt">
                                            <p>
                                                <img src={smallicon} alt="" />{" "}
                                                <span>20</span> Coins
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="earn-history-lft">
                                            <img src={earningcoin} alt="" />
                                            <div>
                                                <h5>Referral code Used</h5>
                                                <p className="text-success">12 March 2025</p>
                                            </div>
                                        </div>
                                        <div className="earn-history-rgt">
                                            <p>
                                                <img src={smallicon} alt="" />{" "}
                                                <span>20</span> Coins
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="earn-history-lft">
                                            <img src={earningcoin} alt="" />
                                            <div>
                                                <h5>Referral code Used</h5>
                                                <p className="text-success">12 March 2025</p>
                                            </div>
                                        </div>
                                        <div className="earn-history-rgt">
                                            <p>
                                                <img src={smallicon} alt="" />{" "}
                                                <span>20</span> Coins
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="earn-history-lft">
                                            <img src={earningcoin} alt="" />
                                            <div>
                                                <h5>Referral code Used</h5>
                                                <p className="text-success">12 March 2025</p>
                                            </div>
                                        </div>
                                        <div className="earn-history-rgt">
                                            <p>
                                                <img src={smallicon} alt="" />{" "}
                                                <span>20</span> Coins
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="earn-history-lft">
                                            <img src={earningcoin} alt="" />
                                            <div>
                                                <h5>Referral code Used</h5>
                                                <p className="text-success">12 March 2025</p>
                                            </div>
                                        </div>
                                        <div className="earn-history-rgt">
                                            <p>
                                                <img src={smallicon} alt="" />{" "}
                                                <span>20</span> Coins
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="earn-history-lft">
                                            <img src={earningcoin} alt="" />
                                            <div>
                                                <h5>Referral code Used</h5>
                                                <p className="text-success">12 March 2025</p>
                                            </div>
                                        </div>
                                        <div className="earn-history-rgt">
                                            <p>
                                                <img src={smallicon} alt="" />{" "}
                                                <span>20</span> Coins
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* earning-history-modal-end */}

            </>


        </>
    )
}

export default Profile