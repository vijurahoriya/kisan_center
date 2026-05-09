import React, { useEffect, useState } from 'react'
import { kishanApi } from '../Services/axios';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
const HeaderCategory = () => {
    const [categories, setCategories] = useState([]);
    const [activeCategoryId, setActiveCategoryId] = useState(null);
    const [subcategoryMap, setSubcategoryMap] = useState({});
    
    // Fetch all categories
    const fetchCategories = async () => {
        try {
            const res = await kishanApi.get(`/website/home-page`);
            if (res.data.status) {
                setCategories(res.data.data.categories);
            }
        } catch (error) {
            console.error("Fetch categories error", error);
        }
    };
    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (activeCategoryId) {
            fetchSubcategories(activeCategoryId);
        }
    }, [activeCategoryId]);


    const fetchSubcategories = async (categoryId) => {
        try {
            const res = await kishanApi.get(`/subcategories/sub-category/${categoryId}`)
            const subcat = Array.isArray(res.data.subcategories) ? res.data.subcategories : [];

            setSubcategoryMap((prev) => ({
                ...prev,
                [categoryId]: subcat,
            }));
        } catch (error) {
            console.error("Fetch subcategories error:", error);
            setSubcategoryMap((prev) => ({
                ...prev,
                [categoryId]: [],
            }));
        }
    };

    const getCategory = (id) => {
        setActiveCategoryId(id);
        if (!subcategoryMap[id]) {
            fetchSubcategories(id);
        }
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg custom-navbar">
                <div className="container">
                    <Link className="navbar-brand d-lg-none " to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto align-items-center">
                            <li className="nav-item dropdown category-btn">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fas fa-th-large me-2" />
                                    All Categories
                                </Link>
                                <ul className="dropdown-menu sub-menu">
                                    {categories?.map((category, i) => {
                                        return (
                                            <li key={i}>
                                                <Link className="dropdown-item" to="/product-list">
                                                    <img src={category.image} alt="image" />
                                                    {category.translations[0].name}
                                                </Link>
                                            </li>

                                        )
                                    })}
                                    <li>
                                        <Link className="dropdown-item" to="/product-list">
                                            +20 More
                                        </Link>
                                    </li>
                                </ul>

                            </li>

                            {categories?.map((category) => {
                                const subcats = subcategoryMap[category._id] || [];

                                return (
                                    <li className="nav-item dropdown has-megamenu" key={category._id}>
                                        <Link
                                            to=""
                                            className="nav-link dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            onClick={() => getCategory(category._id)}
                                        >
                                            {category.translations?.[0]?.name}
                                        </Link>
                                        <div className="dropdown-menu megamenu" role="menu">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-lg-3 col-12">
                                                        <div className="menu-inner">
                                                            <ul>
                                                                {subcats.length > 0 ? (
                                                                    subcats.map((sub, index) => (
                                                                        <li key={index}>
                                                                            <Link to="/product-list">
                                                                                {sub?.translations?.[0]?.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))
                                                                ) : (
                                                                    <li style={{ cursor: "default", color: "gray" }}>
                                                                        No subcategories found.
                                                                    </li>
                                                                )}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="navigation-btn">
                            <span className="fas fa-headset " />
                            <div>
                                <Link to="tel:+91-9876543210">+91-9876543210</Link>
                                <p>24/7 Support Center</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default HeaderCategory