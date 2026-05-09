import React, { useEffect, useState } from 'react'
import google from '../../assets/images/google.svg'
import facebook from '../../assets/images/facebook.svg'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../Features/authSlice';
import { useDispatch } from 'react-redux';
import BreadCrumb from '../Services/BreadCrumb';

function Login() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [mobile, setMobile] = useState("");
    const dispatch = useDispatch();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         navigate("/");
    //     }
    // }, []);
    // Handle Login
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!mobile || mobile.length !== 10) {
            toast.dismiss();
            toast.error("Enter a valid 10-digit mobile number");
            return;
        }
        setIsSubmitting(true)
        try {
            const result = await dispatch(login({ phone: mobile, phone_code_mobile: '+91' })); // Dispatch login API call
            if (result?.success) {
                navigate("/verification", { state: { mobile } });
            }
            // Navigate on success
        } catch (error) {
            toast.error("Login failed. Please try again.");
        } finally {
            setIsSubmitting(false)
        }
    };
    return (
        <>
            <BreadCrumb />
            <section className="user-registration tp-space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="registration-innr">
                                <h4 className="text-center">Sign in/Sign Up with Mobile Number</h4>
                                <p className="text-center">
                                    We have send you an{" "}
                                    <Link to="">One Time Password(OTP)</Link> on this
                                    mobile number.
                                </p>
                                <form onSubmit={handleLogin}>
                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Phone number</label>
                                        <input
                                            type="number"
                                            id="phone"
                                            className="form-control"
                                            placeholder="Enter phone number"
                                            name='phone'
                                            value={mobile}
                                            onChange={(e) => setMobile(e.target.value)}
                                        />
                                    </div>
                                    <div className="custom-frm-bx">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="referral"
                                            />
                                            <label className="form-check-label" htmlFor="referral">
                                                {" "}
                                                Referral code{" "}
                                            </label>
                                        </div>
                                    </div>
                                    <div className="custom-frm-bx">
                                        {/* <button class="thm-btn success w-100" type="button">Get Code</button> */}
                                        <button class="thm-btn success w-100" disabled={isSubmitting} type="submit">
                                            {isSubmitting ? (
                                                <span className="spinner-border spinner-border-sm"></span>
                                            ) : (
                                                "Get Code"
                                            )}
                                        </button>
                                    </div>
                                    <div className="custom-frm-bx or-line">
                                        <p className="text-center">
                                            <span>OR</span>
                                        </p>
                                    </div>
                                    <div className="media-btn">
                                        <Link to="">
                                            <img src={google} className="me-2" alt="" />
                                            Login with Google
                                        </Link>
                                        <Link to="">
                                            <img src={facebook} className="me-2" alt="" />
                                            Login with Facebook
                                        </Link>
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

export default Login