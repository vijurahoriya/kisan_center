import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Faq() {
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
            <section className="faq-sec tp-space">
                <div className="container">
                    <h3 className="text-center title">Frequently Asked Questions</h3>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion" id="faq">
                                <div className="accordion-item">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq-01"
                                    >
                                        In elementum est a ante sodales iaculis.
                                    </button>
                                    <div
                                        id="faq-01"
                                        className="accordion-collapse collapse show"
                                        data-bs-parent="#faq"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                Morbi porttitor ligula in nunc varius sagittis. Proin dui
                                                nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis
                                                ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
                                                tellus at accumsan. Donec a eros non massa vulputate ornare.
                                                Vivamus ornare commodo ante, at commodo felis congue vitae.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq-02"
                                    >
                                        Etiam lobortis massa eu nibh tempor elementum.
                                    </button>
                                    <div
                                        id="faq-02"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faq"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                Morbi porttitor ligula in nunc varius sagittis. Proin dui
                                                nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis
                                                ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
                                                tellus at accumsan. Donec a eros non massa vulputate ornare.
                                                Vivamus ornare commodo ante, at commodo felis congue vitae.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq-03"
                                    >
                                        In elementum est a ante sodales iaculis.
                                    </button>
                                    <div
                                        id="faq-03"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faq"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                Morbi porttitor ligula in nunc varius sagittis. Proin dui
                                                nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis
                                                ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
                                                tellus at accumsan. Donec a eros non massa vulputate ornare.
                                                Vivamus ornare commodo ante, at commodo felis congue vitae.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq-04"
                                    >
                                        Aenean quis quam nec lacus semper dignissim.
                                    </button>
                                    <div
                                        id="faq-04"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faq"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                Morbi porttitor ligula in nunc varius sagittis. Proin dui
                                                nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis
                                                ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
                                                tellus at accumsan. Donec a eros non massa vulputate ornare.
                                                Vivamus ornare commodo ante, at commodo felis congue vitae.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq-05"
                                    >
                                        Nulla tincidunt eros id tempus accumsan.
                                    </button>
                                    <div
                                        id="faq-05"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faq"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing, elit.
                                                Corporis asperiores reprehenderit tenetur impedit rerum dicta
                                                beatae numquam, quae ipsam nisi necessitatibus modi qui et
                                                quas, provident cupiditate explicabo dignissimos quia possimus
                                                voluptate rem ad iusto! Aspernatur alias ea doloremque
                                                voluptates magni similique, suscipit cum ad recusandae
                                                pariatur. Officiis, doloremque ratione et vero atque pariatur
                                                amet eligendi tempora fuga quis labore rem optio maxime. Est
                                                ea quae, odio totam provident optio similique suscipit
                                                corrupti sequi sint unde libero blanditiis, consequatur,
                                                soluta.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq-06"
                                    >
                                        Nulla tincidunt eros id tempus accumsan.
                                    </button>
                                    <div
                                        id="faq-06"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faq"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing, elit.
                                                Corporis asperiores reprehenderit tenetur impedit rerum dicta
                                                beatae numquam, quae ipsam nisi necessitatibus modi qui et
                                                quas, provident cupiditate explicabo dignissimos quia possimus
                                                voluptate rem ad iusto! Aspernatur alias ea doloremque
                                                voluptates magni similique, suscipit cum ad recusandae
                                                pariatur. Officiis, doloremque ratione et vero atque pariatur
                                                amet eligendi tempora fuga quis labore rem optio maxime. Est
                                                ea quae, odio totam provident optio similique suscipit
                                                corrupti sequi sint unde libero blanditiis, consequatur,
                                                soluta.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq-07"
                                    >
                                        Nulla tincidunt eros id tempus accumsan.
                                    </button>
                                    <div
                                        id="faq-07"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faq"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing, elit.
                                                Corporis asperiores reprehenderit tenetur impedit rerum dicta
                                                beatae numquam, quae ipsam nisi necessitatibus modi qui et
                                                quas, provident cupiditate explicabo dignissimos quia possimus
                                                voluptate rem ad iusto! Aspernatur alias ea doloremque
                                                voluptates magni similique, suscipit cum ad recusandae
                                                pariatur. Officiis, doloremque ratione et vero atque pariatur
                                                amet eligendi tempora fuga quis labore rem optio maxime. Est
                                                ea quae, odio totam provident optio similique suscipit
                                                corrupti sequi sint unde libero blanditiis, consequatur,
                                                soluta.
                                            </p>
                                        </div>
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

export default Faq