import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const CardDrink = ({ image, name, id, glassType, info }) => {
    const button = (
        <Link to={`/cocktail/${id}`} className="btn primary-btn">
            Detail
        </Link>
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

