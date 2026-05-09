import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import coin from '../../assets/images/coin.svg'
import languageEn from '../../assets/images/language-icon-01.png'
import languageHin from '../../assets/images/language-icon-02.png'
import languageTl from '../../assets/images/language-icon-03.png'
import languageKn from '../../assets/images/language-icon-04.png'
import productimg06 from '../../assets/images/product-img-06.png'
import productimg07 from '../../assets/images/product-img-07.png'
import productimg08 from '../../assets/images/product-img-08.png'
import productimg09 from '../../assets/images/product-img-09.png'
import productimg10 from '../../assets/images/product-img-10.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../Features/authSlice'
import logouticon from '../../assets/images/logout.png'
import HeaderCategory from './HeaderCategory'

function Header() {
    const [toggleSearch, setToggleSearch] = useState(false)

    const handleToggleSearch = () => {
        setToggleSearch(!toggleSearch)
    }
    const dispatch = useDispatch();
    const { isLogin } = useSelector(state => state.auth);
    const handleLogout = () => {
        dispatch(logoutUser());
        document.getElementById('logout-btn-close').click();
    }
    return (
        <>
            <header className="theme-header">
                <div className="tp-header d-none d-lg-block d-xl-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-7 text-start">
                                <ul className="tp-header-lft">
                                    <li className="header-item">
                                        <Link to="/about-us" className="header-link">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="header-item">
                                        <Link to="/profile" className="header-link">
                                            My Account
                                        </Link>
                                    </li>
                                    <li className="header-item">
                                        <Link to="/wishlist" className="header-link">
                                            Wishlist
                                        </Link>
                                    </li>
                                    <li className="header-item">
                                        <Link
                                            to="/product-list"
                                            data-bs-toggle="modal"
                                            data-bs-target="#tracking"
                                            className="header-link"
                                        >
                                            Order Tracking
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-5 text-end">
                                <ul className="tp-header-lft tp-header-rgt">
                                    <li className="header-item">
                                        <Link to="/sell-kisan-center" className="header-link">
                                            Sell on Kisan Center
                                        </Link>
                                    </li>
                                    <li className="header-item">
                                        <div className="dropdown">
                                            <button
                                                className="dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                {" "}
                                                English{" "}
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <Link className="dropdown-item">
                                                        <img src={languageEn} alt="" />
                                                        English
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item">
                                                        <img src={languageHin} alt="" />
                                                        हिंदी
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item">
                                                        <img src={languageTl} alt="" />
                                                        తెలుగు
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item">
                                                        <img src={languageKn} alt="" />
                                                        ಕನ್ನಡ
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="middle-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-5">
                                <div className="middle-header-lft">
                                    <Link
                                        to="/"
                                        className="nav-brand d-none d-lg-block d-xl-block"
                                    >
                                        <img src={logo} alt="" />
                                    </Link>
                                    <div className="middle-header-search">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="search"
                                            placeholder="Search for items..."
                                            onClick={handleToggleSearch}
                                        />
                                        <button type="button">
                                            <i className="fas fa-search" />
                                        </button>
                                        {
                                            toggleSearch &&
                                            <div className={`search-bar-box ${toggleSearch ? 'd-block' : 'd-none'}`} id="search-bar" >
                                                <ul className="search-bar-box-list">
                                                    <li>
                                                        <Link to="/product-list">
                                                            <div className="ct-icon">
                                                                <img src={productimg06} alt="" />
                                                            </div>
                                                            <div className="ct-dtls">
                                                                <p>PI Industries</p>
                                                                <h5>Rogor Insecticide</h5>
                                                                <p className="price">
                                                                    ₹28.85 <del>₹32.8</del>
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/product-list">
                                                            <div className="ct-icon">
                                                                <img src={productimg07} alt="" />
                                                            </div>
                                                            <div className="ct-dtls">
                                                                <p>PI Industries</p>
                                                                <h5>Rogor Insecticide</h5>
                                                                <p className="price">
                                                                    ₹28.85 <del>₹32.8</del>
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/product-list">
                                                            <div className="ct-icon">
                                                                <img src={productimg06} alt="" />
                                                            </div>
                                                            <div className="ct-dtls">
                                                                <p>PI Industries</p>
                                                                <h5>Rogor Insecticide</h5>
                                                                <p className="price">
                                                                    ₹28.85 <del>₹32.8</del>
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/product-list">
                                                            <div className="ct-icon">
                                                                <img src={productimg08} alt="" />
                                                            </div>
                                                            <div className="ct-dtls">
                                                                <p>PI Industries</p>
                                                                <h5>Rogor Insecticide</h5>
                                                                <p className="price">
                                                                    ₹28.85 <del>₹32.8</del>
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/product-list">
                                                            <div className="ct-icon">
                                                                <img src={productimg09} alt="" />
                                                            </div>
                                                            <div className="ct-dtls">
                                                                <p>PI Industries</p>
                                                                <h5>Rogor Insecticide</h5>
                                                                <p className="price">
                                                                    ₹28.85 <del>₹32.8</del>
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/product-list">
                                                            <div className="ct-icon">
                                                                <img src={productimg10} alt="" />
                                                            </div>
                                                            <div className="ct-dtls">
                                                                <p>PI Industries</p>
                                                                <h5>Rogor Insecticide</h5>
                                                                <p className="price">
                                                                    ₹28.85 <del>₹32.8</del>
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/product-list">
                                                            <div className="ct-icon">
                                                                <img src={productimg06} alt="" />
                                                            </div>
                                                            <div className="ct-dtls">
                                                                <p>PI Industries</p>
                                                                <h5>Rogor Insecticide</h5>
                                                                <p className="price">
                                                                    ₹28.85 <del>₹32.8</del>
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="show-btn text-center">
                                                    <Link to="/product-list" className="thm-btn success">
                                                        Show More
                                                    </Link>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-7">
                                <div className="middle-header-rgt">
                                    <ul>
                                        <li>
                                            <Link to="/profile" className="coin-btn">
                                                <img
                                                    src={coin}
                                                    className="me-2 fa-spin"
                                                    alt=""
                                                />
                                                300
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/wishlist" className="header-btn">
                                                <i className="far fa-heart" /> <span>0</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cart" className="header-btn animate">
                                                <i className="fas fa-shopping-basket" /> <span>1</span>
                                            </Link>
                                        </li>
                                    </ul>
                                    {
                                        isLogin ? (
                                            <div className="dropdown">
                                                <button
                                                    className="dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <i className="fas fa-user me-2" />
                                                    Account
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <Link className="dropdown-item" to="/profile">
                                                            <i className="fas fa-user-circle me-2" />
                                                            Profile
                                                        </Link>

                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="/order-history">
                                                            <i className="fas fa-redo me-2" />
                                                            Order History
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="/wishlist">
                                                            <i className="fas fa-heart me-2" />
                                                            Wishlist
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="dropdown-item"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#logout"
                                                        >
                                                            <i className="fas fa-sign-out-alt me-2" />
                                                            Logout
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        ) : (
                                            <Link
                                                to="/login"
                                                className="thm-btn"
                                            >
                                                <i className="fas fa-user me-2" />
                                                Login
                                            </Link>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HeaderCategory />
            </header>

            {/* logout-modal-start */}
            <div
                className="modal fade custom-modal"
                id="logout"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="custom-head">
                            <h5>Logout Accout</h5>
                        </div>
                        <button
                            type="button"
                            className="btn-close close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            id='logout-btn-close'
                        >
                            <i className="fas fa-times" />
                        </button>
                        <div className="modal-body">
                            <div className="logout-innr">
                                <img src={logouticon} alt="" />
                                <p>
                                    Are you sure you want to logout? Once you logout you need to login
                                    again. Are you OK? Cancel
                                </p>
                                <Link
                                    to=""
                                    className="thm-btn org-btn"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </Link>
                                <button type='button' onClick={handleLogout} className="thm-btn danger">
                                    Yes, Logout!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* logout-modal-end */}

        </>
    )
}

export default Header