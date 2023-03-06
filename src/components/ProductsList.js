import React from 'react';
import './ProductsList.css';
import Product from './Product';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const ProductslList = () => {
    const { cart, loading } = useGlobalContext();

    if (loading) {
        return <Loading />
    }
    if (cart.length < 1) {
        return <h2 className='section-title'>
            no product matched your search criteria</h2>
    }

    return (
        <div className="product-list">
            {cart.map((item) => {
                return <Product key={item.id} {...item} />
            })}
        </div>
    )
}

export default ProductslList;