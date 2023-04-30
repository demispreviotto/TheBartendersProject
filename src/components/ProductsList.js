import React from 'react';
import './ProductsList.css';
import Loading from './Loading';
import { useGlobalContext } from '../context';
import CardProduct from './CardProduct';

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
                return (
                    <CardProduct key={item.id} {...item} />
                )
            })}
        </div>
    )
}

export default ProductslList;