import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import blogimg01 from "../../assets/images/blog-img-01.png"
import blogimg02 from "../../assets/images/blog-img-02.png"
import blogimg03 from "../../assets/images/blog-img-03.png"
import blogimg04 from "../../assets/images/blog-img-04.png"
import blogdetailsimg from '../../assets/images/blog-details-img.png'

function BlogDetails() {
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
            <section className="blog-details tp-space">
                <div className="container">
                    <h3 className="title">Blogs</h3>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-details-img">
                                <img src={blogdetailsimg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8">
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
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus
                                    PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
                                    dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever since the 1500s, when
                                    an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book. It has survived not only five centuries, but
                                    also the leap into electronic typesetting, remaining essentially
                                    unchanged. It was popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker including
                                    versions of Lorem Ipsum.
                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus
                                    PageMaker including versions of Lorem Ipsum.
                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus
                                    PageMaker including versions of Lorem Ipsum.
                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus
                                    PageMaker including versions of Lorem Ipsum.
                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus
                                    PageMaker including versions of Lorem Ipsum.
                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus
                                    PageMaker including versions of Lorem Ipsum.
                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus
                                    PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="cards shadow-none">
                                <div className="cards-body">
                                    <h5 className="title2 text-uppercase">Latest Blog</h5>
                                    <ul className="blog-list">
                                        <li>
                                            <Link to="/blog-details">
                                                <span>
                                                    <img src={blogimg01} alt="" />
                                                </span>
                                                <div>
                                                    <h6>
                                                        Curabitur pulvinar aliquam lectus, non blandit erat mattis
                                                        vitae.{" "}
                                                    </h6>
                                                    <p>28 Nov, 2015</p>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/blog-details">
                                                <span>
                                                    <img src={blogimg02} alt="" />
                                                </span>
                                                <div>
                                                    <h6>
                                                        Curabitur pulvinar aliquam lectus, non blandit erat mattis
                                                        vitae.{" "}
                                                    </h6>
                                                    <p>28 Nov, 2015</p>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/blog-details">
                                                <span>
                                                    <img src={blogimg03} alt="" />
                                                </span>
                                                <div>
                                                    <h6>
                                                        Curabitur pulvinar aliquam lectus, non blandit erat mattis
                                                        vitae.{" "}
                                                    </h6>
                                                    <p>28 Nov, 2015</p>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/blog-details">
                                                <span>
                                                    <img src={blogimg04} alt="" />
                                                </span>
                                                <div>
                                                    <h6>
                                                        Curabitur pulvinar aliquam lectus, non blandit erat mattis
                                                        vitae.{" "}
                                                    </h6>
                                                    <p>28 Nov, 2015</p>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default BlogDetails