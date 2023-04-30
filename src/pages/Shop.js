import React from "react";
import './Shop.css'
import ShopSearch from '../components/ShopSearch'
import ProductslList from "../components/ProductsList";

const Shop = () => {

    return (
        <section className="shop section" id="shop">
            {/* <div> */}
            <div className="container">
                <div className="shop-header">
                    <h1 className="">Bodega</h1>
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
                <ProductslList />
            </div>
            {/* </div> */}
        </section>
    )
}

export default Shop;