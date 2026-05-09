import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import blogimg01 from "../../assets/images/blog-img-01.png"
import blogimg02 from "../../assets/images/blog-img-02.png"
import blogimg03 from "../../assets/images/blog-img-03.png"
import blogimg04 from "../../assets/images/blog-img-04.png"

function Blog() {
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
            <section className="blog-sec tp-space">
                <div className="container">
                    <h3 className="title">Blogs</h3>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-cards">
                                <div className="blog-img">
                                    <img src={blogimg01} alt="" />
                                </div>
                                <div className="blog-content">
                                    <p className="blog-user">
                                        <span>
                                            <i className="far fa-user-circle me-1" /> Admin
                                        </span>
                                        <span>
                                            <i className="fas fa-calendar me-1" /> 1 Feb, 2020
                                        </span>
                                    </p>
                                    <h5>
                                        Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.{" "}
                                    </h5>
                                    <p>
                                        Mauris scelerisque odio id rutrum volutpat. Pellentesque urna
                                        odio, vulputate at tortor vitae, hendrerit blandit lorem.{" "}
                                    </p>
                                    <div className="text-center">
                                        <Link to="/blog-details" className="thm-btn outline">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-cards">
                                <div className="blog-img">
                                    <img src={blogimg02} alt="" />
                                </div>
                                <div className="blog-content">
                                    <p className="blog-user">
                                        <span>
                                            <i className="far fa-user-circle me-1" /> Admin
                                        </span>
                                        <span>
                                            <i className="fas fa-calendar me-1" /> 1 Feb, 2020
                                        </span>
                                    </p>
                                    <h5>
                                        Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.{" "}
                                    </h5>
                                    <p>
                                        Mauris scelerisque odio id rutrum volutpat. Pellentesque urna
                                        odio, vulputate at tortor vitae, hendrerit blandit lorem.{" "}
                                    </p>
                                    <div className="text-center">
                                        <Link to="/blog-details" className="thm-btn outline">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-cards">
                                <div className="blog-img">
                                    <img src={blogimg03} alt="" />
                                </div>
                                <div className="blog-content">
                                    <p className="blog-user">
                                        <span>
                                            <i className="far fa-user-circle me-1" /> Admin
                                        </span>
                                        <span>
                                            <i className="fas fa-calendar me-1" /> 1 Feb, 2020
                                        </span>
                                    </p>
                                    <h5>
                                        Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.{" "}
                                    </h5>
                                    <p>
                                        Mauris scelerisque odio id rutrum volutpat. Pellentesque urna
                                        odio, vulputate at tortor vitae, hendrerit blandit lorem.{" "}
                                    </p>
                                    <div className="text-center">
                                        <Link to="/blog-details" className="thm-btn outline">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-cards">
                                <div className="blog-img">
                                    <img src={blogimg04} alt="" />
                                </div>
                                <div className="blog-content">
                                    <p className="blog-user">
                                        <span>
                                            <i className="far fa-user-circle me-1" /> Admin
                                        </span>
                                        <span>
                                            <i className="fas fa-calendar me-1" /> 1 Feb, 2020
                                        </span>
                                    </p>
                                    <h5>
                                        Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.{" "}
                                    </h5>
                                    <p>
                                        Mauris scelerisque odio id rutrum volutpat. Pellentesque urna
                                        odio, vulputate at tortor vitae, hendrerit blandit lorem.{" "}
                                    </p>
                                    <div className="text-center">
                                        <Link to="/blog-details" className="thm-btn outline">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-cards">
                                <div className="blog-img">
                                    <img src={blogimg01} alt="" />
                                </div>
                                <div className="blog-content">
                                    <p className="blog-user">
                                        <span>
                                            <i className="far fa-user-circle me-1" /> Admin
                                        </span>
                                        <span>
                                            <i className="fas fa-calendar me-1" /> 1 Feb, 2020
                                        </span>
                                    </p>
                                    <h5>
                                        Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.{" "}
                                    </h5>
                                    <p>
                                        Mauris scelerisque odio id rutrum volutpat. Pellentesque urna
                                        odio, vulputate at tortor vitae, hendrerit blandit lorem.{" "}
                                    </p>
                                    <div className="text-center">
                                        <Link to="/blog-details" className="thm-btn outline">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-cards">
                                <div className="blog-img">
                                    <img src={blogimg02} alt="" />
                                </div>
                                <div className="blog-content">
                                    <p className="blog-user">
                                        <span>
                                            <i className="far fa-user-circle me-1" /> Admin
                                        </span>
                                        <span>
                                            <i className="fas fa-calendar me-1" /> 1 Feb, 2020
                                        </span>
                                    </p>
                                    <h5>
                                        Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.{" "}
                                    </h5>
                                    <p>
                                        Mauris scelerisque odio id rutrum volutpat. Pellentesque urna
                                        odio, vulputate at tortor vitae, hendrerit blandit lorem.{" "}
                                    </p>
                                    <div className="text-center">
                                        <Link to="/blog-details" className="thm-btn outline">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-cards">
                                <div className="blog-img">
                                    <img src={blogimg03} alt="" />
                                </div>
                                <div className="blog-content">
                                    <p className="blog-user">
                                        <span>
                                            <i className="far fa-user-circle me-1" /> Admin
                                        </span>
                                        <span>
                                            <i className="fas fa-calendar me-1" /> 1 Feb, 2020
                                        </span>
                                    </p>
                                    <h5>
                                        Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.{" "}
                                    </h5>
                                    <p>
                                        Mauris scelerisque odio id rutrum volutpat. Pellentesque urna
                                        odio, vulputate at tortor vitae, hendrerit blandit lorem.{" "}
                                    </p>
                                    <div className="text-center">
                                        <Link to="/blog-details" className="thm-btn outline">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-cards">
                                <div className="blog-img">
                                    <img src={blogimg04} alt="" />
                                </div>
                                <div className="blog-content">
                                    <p className="blog-user">
                                        <span>
                                            <i className="far fa-user-circle me-1" /> Admin
                                        </span>
                                        <span>
                                            <i className="fas fa-calendar me-1" /> 1 Feb, 2020
                                        </span>
                                    </p>
                                    <h5>
                                        Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.{" "}
                                    </h5>
                                    <p>
                                        Mauris scelerisque odio id rutrum volutpat. Pellentesque urna
                                        odio, vulputate at tortor vitae, hendrerit blandit lorem.{" "}
                                    </p>
                                    <div className="text-center">
                                        <Link to="/blog-details" className="thm-btn outline">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-cards">
                                <div className="blog-img">
                                    <img src={blogimg01} alt="" />
                                </div>
                                <div className="blog-content">
                                    <p className="blog-user">
                                        <span>
                                            <i className="far fa-user-circle me-1" /> Admin
                                        </span>
                                        <span>
                                            <i className="fas fa-calendar me-1" /> 1 Feb, 2020
                                        </span>
                                    </p>
                                    <h5>
                                        Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.{" "}
                                    </h5>
                                    <p>
                                        Mauris scelerisque odio id rutrum volutpat. Pellentesque urna
                                        odio, vulputate at tortor vitae, hendrerit blandit lorem.{" "}
                                    </p>
                                    <div className="text-center">
                                        <Link to="/blog-details" className="thm-btn outline">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-cards">
                                <div className="blog-img">
                                    <img src={blogimg02} alt="" />
                                </div>
                                <div className="blog-content">
                                    <p className="blog-user">
                                        <span>
                                            <i className="far fa-user-circle me-1" /> Admin
                                        </span>
                                        <span>
                                            <i className="fas fa-calendar me-1" /> 1 Feb, 2020
                                        </span>
                                    </p>
                                    <h5>
                                        Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.{" "}
                                    </h5>
                                    <p>
                                        Mauris scelerisque odio id rutrum volutpat. Pellentesque urna
                                        odio, vulputate at tortor vitae, hendrerit blandit lorem.{" "}
                                    </p>
                                    <div className="text-center">
                                        <Link to="/blog-details" className="thm-btn outline">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-cards">
                                <div className="blog-img">
                                    <img src={blogimg03} alt="" />
                                </div>
                                <div className="blog-content">
                                    <p className="blog-user">
                                        <span>
                                            <i className="far fa-user-circle me-1" /> Admin
                                        </span>
                                        <span>
                                            <i className="fas fa-calendar me-1" /> 1 Feb, 2020
                                        </span>
                                    </p>
                                    <h5>
                                        Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.{" "}
                                    </h5>
                                    <p>
                                        Mauris scelerisque odio id rutrum volutpat. Pellentesque urna
                                        odio, vulputate at tortor vitae, hendrerit blandit lorem.{" "}
                                    </p>
                                    <div className="text-center">
                                        <Link to="/blog-details" className="thm-btn outline">
                                            Read more
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="blog-cards">
                                <div className="blog-img">
                                    <img src={blogimg04} alt="" />
                                </div>
                                <div className="blog-content">
                                    <p className="blog-user">
                                        <span>
                                            <i className="far fa-user-circle me-1" /> Admin
                                        </span>
                                        <span>
                                            <i className="fas fa-calendar me-1" /> 1 Feb, 2020
                                        </span>
                                    </p>
                                    <h5>
                                        Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.{" "}
                                    </h5>
                                    <p>
                                        Mauris scelerisque odio id rutrum volutpat. Pellentesque urna
                                        odio, vulputate at tortor vitae, hendrerit blandit lorem.{" "}
                                    </p>
                                    <div className="text-center">
                                        <Link to="/blog-details" className="thm-btn outline">
                                            Read more
                                        </Link>
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

export default Blog