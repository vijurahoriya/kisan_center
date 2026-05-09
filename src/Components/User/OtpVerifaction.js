import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { resendOtp, verifyOtp } from '../Features/authSlice';
import BreadCrumb from '../Services/BreadCrumb';

function OtpVerifaction() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const location = useLocation();
    const mobile = location.state?.mobile || '';
    const [otp, setOtp] = useState(["", "", "", ""]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [resendDisabled, setResendDisabled] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const validateToken = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                navigate("/", { replace: true });
            }
        };
        validateToken();
    }, [navigate]);

    // Handle OTP input
    const handleChange = (index, value) => {
        if (!/^\d?$/.test(value)) return; // Allow only numbers
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < 3) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
        }
    };
    const handlePaste = (e) => {
        const pasted = e.clipboardData.getData('Text').trim();
        if (/^\d{4}$/.test(pasted)) {
            const newOtp = pasted.split('');
            setOtp(newOtp);
            document.getElementById('otp-3')?.focus();
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        const otpCode = otp.join(""); // Combine digits into a single OTP
        if (otpCode.length !== 4) {
            toast.error("Enter a 4-digit OTP");
            return;
        }
        setLoading(true)
        try {
            const result = await dispatch(verifyOtp({ phone: mobile, otp: otpCode }));
            if (result?.success) {
                navigate("/");
            }
            // Redirect to dashboard after successful verification
        } catch (error) {
            toast.error("OTP verification failed");
        } finally {
            setLoading(false)
        }
    };

    const handleResendOtp = (e) => {
        e.preventDefault();
        setResendDisabled(true)
        setResendLoading(true)
        try {
            dispatch(resendOtp({ phone: mobile, phone_code_mobile: '+91' }));
        } catch (error) {
            toast.error("OTP Resent Successfully");
        } finally {
            setResendLoading(false)
            // Enable the resend button after 30 seconds
            setTimeout(() => setResendDisabled(false), 30000);
        }

    };
    return (
        <>
            <BreadCrumb />
            <section className="user-registration tp-space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-10 col-sm-12">
                            <div className="registration-innr verifaction">
                                <h4 className="text-center">OTP Verification</h4>
                                <p className="text-center">
                                    Enter the code from the sms we sent to{" "}
                                    <Link to="">+91-{mobile}</Link>
                                </p>
                                <form action="" onSubmit={(e) => e.preventDefault()}>
                                    <div className="row justify-content-center">
                                        {otp.map((digit, index) => (
                                            <div className="col-2" key={index}>
                                                <div className="custom-frm-bx">
                                                    <input
                                                        type="text"
                                                        id={`otp-${index}`}
                                                        maxLength="1"
                                                        className="form-control text-center"
                                                        value={digit}
                                                        onChange={(e) => handleChange(index, e.target.value)}
                                                        onPaste={index === 0 ? handlePaste : undefined}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        <div className="col-lg-12">
                                            <div className="custom-frm-bx">
                                                <button
                                                    className="thm-btn success w-100"
                                                    type="button"
                                                    onClick={handleVerifyOtp}
                                                    disabled={otp.join('').length !== 4 || loading}
                                                >
                                                    {loading ? 'Verifying...' : 'Submit'}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="custom-frm-bx">
                                                <p className="text-center">
                                                    I didn't receive any code.{" "}
                                                    <button
                                                        type="button"
                                                        onClick={handleResendOtp}
                                                        className="btn btn-link p-0"
                                                        style={{ color: '#007bff', textDecoration: 'underline' }}
                                                    >
                                                        RESEND
                                                    </button>
                                                </p>
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

export default OtpVerifaction