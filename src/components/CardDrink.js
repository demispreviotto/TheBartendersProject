import React from 'react';
import Card from './Card';
import ButtonFavorite from './ButtonFavorite';
import { Link } from 'react-router-dom';

const CardDrink = ({ image, name, id, glassType, info }) => {
    const button = (
        <>
            <Link to={`/cocktail/${id}`} className="btn primary-btn">
                Detail
            </Link>
            <ButtonFavorite type='favoriteProducts' id={id} />
        </>

    );

    return (
        <Card
            image={image}
            ratio="3:4"
            title={name}
            subtitle={glassType}
            description={info}
            button={button}
            id={id}
            type="favoriteDrinks"
        />
    );
};

export default CardDrink;

