import React from 'react';
import Card from './Card';
import { useGlobalContext } from '../context';

const CardProduct = ({ image, title, price, id, amount }) => {

    const { toggleAmount } = useGlobalContext(id) // increase, decrease

    const button = (
        <div className="product-amount">
            <div className="product-toggle">
                <button className="btn product-amount-btn" onClick={() => toggleAmount(id, 'dec')}>-</button>
                <p className="product-amount">{amount}</p>
                <button className="btn product-amount-btn" onClick={() => toggleAmount(id, 'inc')}>+</button>
            </div>
        </div>
    );

    CardProduct.defaultProps = {
        amount: 0,
    };

    return (
        <Card
            image={image}
            id={id}
            key={id}
            ratio="1:1"
            title={title}
            description={`$${price}`}
            button={button}
            type='favoriteProducts'
        />
    );
};

export default CardProduct;
