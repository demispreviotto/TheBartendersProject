import React, { useState, useEffect } from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs'
import './ButtonFavorite.css';

const ButtonFavorite = ({ type, id }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favoritesDrinks = JSON.parse(localStorage.getItem('favoriteDrinks')) || [];
        const favoritesProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];
        setIsFavorite(favoritesDrinks.includes(id) || favoritesProducts.includes(id));
    }, [type, id]);

    const toggleFavorite = () => {
        const favoritesDrinks = JSON.parse(localStorage.getItem('favoriteDrinks')) || [];
        const favoritesProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];
        if (isFavorite) {
            const drinkIndex = favoritesDrinks.indexOf(id);
            if (drinkIndex !== -1) {
                favoritesDrinks.splice(drinkIndex, 1);
            }
            const productIndex = favoritesProducts.indexOf(id);
            if (productIndex !== -1) {
                favoritesProducts.splice(productIndex, 1);
            }
        } else {
            if (type === 'favoriteDrinks') {
                favoritesDrinks.push(id);
            } else if (type === 'favoriteProducts') {
                favoritesProducts.push(id);
            }
        }
        localStorage.setItem('favoriteDrinks', JSON.stringify(favoritesDrinks));
        localStorage.setItem('favoriteProducts', JSON.stringify(favoritesProducts));
        setIsFavorite(!isFavorite);
    };

    return (
        <button
            className='card-mark'
            type={type}
            id={id}
            onClick={toggleFavorite}
        >
            {isFavorite ? <BsHeartFill /> : <BsHeart />}
        </button>
    );
};

export default ButtonFavorite;
