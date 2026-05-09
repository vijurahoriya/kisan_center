import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import delivery from '../../assets/images/delivery-img.png'

function OrderSuccess() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <section className="delivery-success tp-space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8 col-sm-12 text-center">
                            <img src={delivery} alt="" />
                            <h3 className="title">Order Placed Successfully</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                                quibusdam earum aut id iusto officiis, nostrum, tempore, reiciendis
                                voluptas quae, accusantium vero dolore eaque. Dignissimos assumenda
                                repellendus eum. Quia dolores quam atque quod animi eius eveniet
                                quibusdam deleniti rem, expedita saepe harum sed numquam distinctio
                                eos ex magnam quae ea.
                            </p>
                            <Link to="/order-details" className="thm-btn success rounded-5">
                                My Order
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OrderSuccess