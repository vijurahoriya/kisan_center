import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function ProfileSidebar() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="navigation-bar">
                <h4>Navigation</h4>
                <ul className="navigation-menu">
                    <li>
                        <Link to="/profile" className="active">
                            <i className="fas fa-th-large me-2" />
                            Profile
                        </Link>

                    </li>
                    <li>
                        <Link to="/order-history">
                            <i className="fas fa-redo me-2" />
                            Order History
                        </Link>
                    </li>
                    <li>
                        <Link to="/wishlist">
                            <i className="fas fa-heart me-2" />
                            Wishlist
                        </Link>
                    </li>
                    <li>
                        <Link
                            to=""
                            data-bs-toggle="modal"
                            data-bs-target="#logout"
                        >
                            <i className="fas fa-sign-out-alt me-2" />
                            Log-out
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ProfileSidebar