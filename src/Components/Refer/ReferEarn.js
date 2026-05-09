import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import referimg from '../../assets/images/refer-img.png'
import refericon1 from '../../assets/images/refer-icon-01.png'
import refericon2 from '../../assets/images/refer-icon-02.png'
import refericon3 from '../../assets/images/refer-icon-03.png'
import whatsapp from '../../assets/images/whatsapp.png'
import instagram from '../../assets/images/instagram.png'
import telegram from '../../assets/images/telegram.png'
import facebook from '../../assets/images/facebook.png'

function ReferEarn() {
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
            <section className="refer-sec tp-space">
                <div className="container">
                    <div className="refer-innr">
                        <div className="row">
                            <div className="col-lg-6 col-md-7 col-sm-12 order-2 order-md-1 order-lg-1">
                                <div className="refer-lft">
                                    <h2>Refer your Friend &amp; Get Coins</h2>
                                    <div className="refer-bx">
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="https://www.flaticon.com/free-icon/group_..."
                                        />
                                        <button className="thm-btn org-btn" type="button">
                                            Copy
                                        </button>
                                    </div>
                                    <h6 className="text-white">Share to</h6>
                                    <div className="refer-media">
                                        <Link to="">
                                            <img src={whatsapp} alt="" />
                                        </Link>
                                        <Link to="">
                                            <img src={instagram} alt="" />
                                        </Link>
                                        <Link to="">
                                            <img src={telegram} alt="" />
                                        </Link>
                                        <Link to="">
                                            <img src={facebook} alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-5 col-sm-12 text-end order-1 order-md-2 order-lg-2">
                                <img src={referimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="user-refer tp-space">
                <div className="container">
                    <h3 className="title">
                        How To <span>Earn Points</span>
                    </h3>
                    <ul className="user-refer-list">
                        <li>
                            <img src={refericon1} alt="" />
                            <h6>Share referral link using Whatsapp, Instagram more </h6>
                        </li>
                        <li>
                            <img src={refericon2} alt="" />
                            <h6>Your Friend clicks on the referral link or uses referral code</h6>
                        </li>
                        <li>
                            <img src={refericon3} alt="" />
                            <h6>You both win Assured Rewards!</h6>
                        </li>
                    </ul>
                </div>
            </section>



        </>
    )
}

export default ReferEarn