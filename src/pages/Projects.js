import React from "react";

const Projects = () => {

    return (
        <section className="portfolio section" id="portfolio">
            <div className="container">
                <h1>Projects</h1>
                <div className="modal">
                    <div className="modal-overlay"></div>
                    <div className="slider-wrap">
                        <div className="prev-btn navigation">
                            <i className="uil uil-angle-left-b">b</i>
                        </div>
                        <div className="images">
                            <img className="showImage" src="./assets/img/port1.jpg" alt="" />
                            <img src="./assets/img/port2.png" alt="" />
                            <img src="./assets/img/port3.jpg" alt="" />
                            <img src="./assets/img/port4.png" alt="" />
                            <img src="./assets/img/port5.png" alt="" />
                            <img src="./assets/img/port6.jpg" alt="" />
                        </div>
                        <div className="next-btn navigation">
                            <i className="uil uil-angle-right-b">d</i>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="portfolio-header">
                        <div className="portfolio-title">
                            <h3 className="sub-heading">Portfolio</h3>
                            <h1 className="heading">Latest Proyects</h1>
                        </div>
                        <div className="filter-btns">
                            <button className="filter-btn" data-filter="all">All</button>
                            <button className="filter-btn" data-filter=".product">Product</button>
                            <button className="filter-btn" data-filter=".inter">Interacting</button>
                            <button className="filter-btn" data-filter=".web">Web App</button>
                        </div>
                    </div>
                    <div className="portfolio-gallery">
                        <div className="mix prt-card inter">
                            <div className="prt-image">
                                <img src="./assets/img/port1.jpg" alt="" />
                                <div className="prt-overlay">
                                    <span className="prt-icon zoom-icon">
                                    {/* <span className="prt-icon zoom-icon" style="--i: 0s"> */}
                                        <i className="uil uil-search-plus"></i>
                                    </span>
                                    <a href="#" className="prt-icon">
                                    {/* <a href="#" className="prt-icon" style="--i: 0.15s"> */}
                                        <i className="uil uil-link-h"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="prt-desc">
                                <h3>"Port1" Interaction</h3>
                                <a href="#" className="btn secondary-btn sm">Read More</a>
                            </div>
                        </div>
                        <div className="mix prt-card product">
                            <div className="prt-image">
                                <img src="./assets/img/port2.png" alt="" />
                                <div className="prt-overlay">
                                    <span className="prt-icon zoom-icon">
                                    {/* <span className="prt-icon zoom-icon" style="--i: 0s"> */}
                                        <i className="uil uil-search-plus"></i>
                                    </span>
                                    <a href="#" className="prt-icon">
                                    {/* <a href="#" className="prt-icon" style="--i: 0.15s"> */}
                                        <i className="uil uil-link-h"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="prt-desc">
                                <h3>"Port2" product design</h3>
                                <a href="#" className="btn secondary-btn sm">Read More</a>
                            </div>
                        </div>
                        <div className="mix prt-card web">
                            <div className="prt-image">
                                <img src="./assets/img/port3.jpg" alt="" />
                                <div className="prt-overlay">
                                    <span className="prt-icon zoom-icon">
                                    {/* <span className="prt-icon zoom-icon" style="--i: 0s"> */}
                                        <i className="uil uil-search-plus"></i>
                                    </span>
                                    <a href="#" className="prt-icon">
                                    {/* <a href="#" className="prt-icon" style="--i: 0.15s"> */}
                                        <i className="uil uil-link-h"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="prt-desc">
                                <h3>"Port3" web design</h3>
                                <a href="#" className="btn secondary-btn sm">Read More</a>
                            </div>
                        </div>
                        <div className="mix prt-card web">
                            <div className="prt-image">
                                <img src="./assets/img/port4.png" alt="" />
                                <div className="prt-overlay">
                                    <span className="prt-icon zoom-icon">
                                    {/* <span className="prt-icon zoom-icon" style="--i: 0s"> */}
                                        <i className="uil uil-search-plus"></i>
                                    </span>
                                    <a href="#" className="prt-icon">
                                    {/* <a href="#" className="prt-icon" style="--i: 0.15s"> */}
                                        <i className="uil uil-link-h"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="prt-desc">
                                <h3>"Port4" web design</h3>
                                <a href="#" className="btn secondary-btn sm">Read More</a>
                            </div>
                        </div>
                        <div className="mix prt-card inter">
                            <div className="prt-image">
                                <img src="./assets/img/port5.png" alt="" />
                                <div className="prt-overlay">
                                    <span className="prt-icon zoom-icon">
                                    {/* <span className="prt-icon zoom-icon" style="--i: 0s"> */}
                                        <i className="uil uil-search-plus"></i>
                                    </span>
                                    <a href="#" className="prt-icon">
                                    {/* <a href="#" className="prt-icon" style="--i: 0.15s"> */}
                                        <i className="uil uil-link-h"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="prt-desc">
                                <h3>"Name" Interaction</h3>
                                <a href="#" className="btn secondary-btn sm">Read More</a>
                            </div>
                        </div>
                        <div className="mix prt-card web">
                            <div className="prt-image">
                                <img src="./assets/img/port6.jpg" alt="" />
                                <div className="prt-overlay">
                                    <span className="prt-icon zoom-icon">
                                    {/* <span className="prt-icon zoom-icon" style="--i: 0s"> */}
                                        <i className="uil uil-search-plus"></i>
                                    </span>
                                    <a href="#" className="prt-icon">
                                    {/* <a href="#" className="prt-icon" style="--i: 0.15s"> */}
                                        <i className="uil uil-link-h"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="prt-desc">
                                <h3>"Port6" web design</h3>
                                <a href="#" className="btn secondary-btn sm">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;