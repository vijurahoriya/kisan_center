import React from 'react'
import advetisment01 from '../../assets/images/advetisment-img-01.png'
import advetisment02 from '../../assets/images/advetisment-img-02.png'
import advetisment03 from '../../assets/images/advetisment-img-03.png'
import { Link } from 'react-router-dom'

function Advetisment() {
    return (
        <>
            <section className="advetisment-sec tp-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="advetisment-card">
                                <div className="advetisment-img">
                                    <img src={advetisment01} alt="" />
                                </div>
                                <div className="advetisment-content">
                                    <h4>
                                        Boost Crop Yields and Profits With Noble Crop Science Products
                                    </h4>
                                    <Link to="/product-list" className="thm-btn animate-btn">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="advetisment-card">
                                <div className="advetisment-img">
                                    <img src={advetisment02} alt="" />
                                </div>
                                <div className="advetisment-content">
                                    <h4>
                                        Boost Crop Yields and Profits With Noble Crop Science Products
                                    </h4>
                                    <Link to="/product-list" className="thm-btn animate-btn">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="advetisment-card">
                                <div className="advetisment-img">
                                    <img src={advetisment03} alt="" />
                                </div>
                                <div className="advetisment-content">
                                    <h4>
                                        Boost Crop Yields and Profits With Noble Crop Science Products
                                    </h4>
                                    <Link to="/product-list" className="thm-btn animate-btn">
                                        Shop Now
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

export default Advetisment