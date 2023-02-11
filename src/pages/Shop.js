import React from "react";
import './Shop.css'
import ShopSearch from '../components/ShopSearch'
import ProductslList from "../components/ProductsList";

const Projects = () => {



    return (
        <section className="portfolio section" id="portfolio">
            <div>
                {/* <h1 className="section-title">Shop</h1> */}
                {/* <div className="modal">
                    <div className="modal-overlay"></div>
                    <div className="slider-wrap">
                        <div className="prev-btn navigation">
                            <i className="uil uil-angle-left-b">b</i>
                        </div>
                        <div className="images">
                            <img className="showImage" src="./assets/img/port1.jpg" alt="" />
                            <img src="./assets/img/bartender1.jpg" alt="" />
                            <img src="./assets/img/port3.jpg" alt="" />
                            <img src="./assets/img/port4.png" alt="" />
                            <img src="./assets/img/port5.png" alt="" />
                            <img src="./assets/img/port6.jpg" alt="" />
                        </div>
                        <div className="next-btn navigation">
                            <i className="uil uil-angle-right-b">d</i>
                        </div>
                    </div>
                </div> */}
                <div className="container">
                    <div className="portfolio-header">
                        <div className="portfolio-title">
                            {/* <h3 className="sub-heading">Portfolio</h3> */}
                            <h1 className="heading">Bodega</h1>
                        </div>
                        <div>
                        <ShopSearch />
                        <div className="filter-btns">
                            <button className="filter-btn" data-filter="all">All</button>
                            <button className="filter-btn" data-filter=".product">Product</button>
                            <button className="filter-btn" data-filter=".inter">Merch</button>
                            <button className="filter-btn" data-filter=".web">Equipment</button>
                        </div>
                        </div>
                    </div>
                    {/* <div className="portfolio-gallery"> */}
                        <ProductslList/>
                    {/* </div> */}
                </div>
            </div>
        </section>
    )
}

export default Projects;