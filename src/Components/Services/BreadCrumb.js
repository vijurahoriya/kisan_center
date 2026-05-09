import React from 'react'
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
    const location = useLocation();

    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <>
            <div className="page-header">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/">
                                <i className="fa fa-home me-2" />
                                Home
                            </Link>
                        </li>

                        {pathnames.map((name, index) => {
                            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                            const isLast = index === pathnames.length - 1;

                            // Optional: Format title (replace dashes, capitalize)
                            const displayName = name.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

                            return isLast ? (
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                    key={index}
                                >
                                    {displayName}
                                </li>
                            ) : (
                                <li className="breadcrumb-item" key={index}>
                                    <Link to={routeTo}>{displayName}</Link>
                                </li>
                            );
                        })}
                    </ol>
                </div>

            </div>

        </>
    )
}

export default BreadCrumb