import React from 'react';
import Card from './Card';
import { useGlobalContext } from '../context';
import ButtonFavorite from './ButtonFavorite'

const CardProduct = ({ image, title, price, id, amount }) => {

    const { toggleAmount } = useGlobalContext(id) // increase, decrease

    const button = (
        amount > 0 ? (
            // <div className="product-amount">
            <>
                <div className="product-toggle">
                    <button className="btn product-toggle-btn" onClick={() => toggleAmount(id, 'dec')}>-</button>
                    <p>{amount}</p>
                    <button className="btn product-toggle-btn" onClick={() => toggleAmount(id, 'inc')}>+</button>
                </div>
                <ButtonFavorite type='favoriteProducts' id={id} />
            </>
            // </div>
        ) : (
            <>
                <button className="btn primary-btn" onClick={() => toggleAmount(id, 'inc')}>Buy</button>
                <ButtonFavorite type='favoriteProducts' id={id} />
            </>
        )
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
