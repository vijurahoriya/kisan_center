import React, { useEffect, useState } from 'react'
import Categories from './Categories'
import Advetisment from './Advetisment'
import Hero from '../Banner/Hero'
import ProductSlide from '../ProductSlider/ProductSlide'
import BrandSlider from './BrandSlider'
import DealOfDay from './DealOfDay'
import TopRatedSlider from './TopRatedSlider'
import SeedProductSlider from './SeedProductSlider'
import { kishanApi } from '../Services/axios'

export default function Home() {
    // const [categories, setCategories] = useState([]);
    const [bestSell, setBestSell] = useState([]);
    const [dayDeal, setDayDeal] = useState([]);
    const [banner, setBanner] = useState([]);
    const [brands, setBrands] = useState([]);
    // const [seeds, setSeeds] = useState([]);
    const [top, setTop] = useState([]);

    // Fetch all categories
    const fetchHomeData = async () => {
        try {
            const res = await kishanApi.get(`/website/home-page`);
            if (res.data.status) {
                // setCategories(res.data.data.categories || []);
                setBestSell(res.data.data.BestSelling || []);
                setDayDeal(res.data.data.Day_of_the_Deal || []);
                setBanner(res.data.data.banners || []);
                setBrands(res.data.data.brands || []);
                // setSeeds(res.data.data.seeds || []);
                setTop(res.data.data.toprated || []);
            }
        } catch (error) {
            console.error("Fetch home page data error", error);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchHomeData();
    }, []);
    return (
        <>
            <Hero banner={banner} />
            <Categories />
            <section className="product-sec tp-space">
                <div className="container">
                    <h3 className="title">Day of the <span>Deal</span> </h3>
                    <DealOfDay dayDeal={dayDeal} />
                </div>
            </section>
            <section className="product-sec tp-space">
                <div className="container">
                    <h3 className="title">Best  <span>Selling</span> </h3>
                    <ProductSlide bestSell={bestSell} />
                </div>
            </section>
            <Advetisment />
            <section className="product-sec tp-space">
                <div className="container">
                    <h3 className="title">Top  <span>Rated</span> </h3>
                    <TopRatedSlider top={top} />
                </div>
            </section>
            <section className="brand-sec tp-space">
                <div className="container">
                    <h3 className="title">Brands</h3>
                    <BrandSlider brands={brands} />
                </div>
            </section>
            {/* <section className="product-sec tp-space">
                <div className="container">
                    <h3 className="title">Seeds <span>Products</span> </h3>
                    <SeedProductSlider seeds={seeds} />
                </div>
            </section> */}
        </>
    )
}
