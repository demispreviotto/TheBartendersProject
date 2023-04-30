import React, { useState, useEffect } from 'react';
import CardProduct from './CardProduct';
import CardDrink from './CardDrink';

const Favorites = () => {
    const [favoriteDrinks, setFavoriteDrinks] = useState([]);
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    useEffect(() => {
        const drinks = JSON.parse(localStorage.getItem('favoritesDrinks')) || [];
        const products = JSON.parse(localStorage.getItem('favoritesProducts')) || [];
        setFavoriteDrinks(drinks);
        setFavoriteProducts(products);
    }, []);

    const renderFavoriteItem = (itemType, itemId) => {
        if (itemType === 'favoriteDrinks') {
            // Find the drink object based on the id from an API or data source
            const drink = {}; // replace with the actual drink object
            return <CardDrink {...drink} key={itemId} />;
            // } else if (itemType === 'favoriteProducts') {
        } else {
            // Find the product object based on the id from an API or data source
            const product = {}; // replace with the actual product object
            return <CardProduct {...product} key={itemId} />;
        }
    };

    return (
        <div>
            <h2>Favorites Drinks:</h2>
            <ul>
                {favoriteDrinks.map((drinkId) => (
                    <li key={drinkId}>
                        {renderFavoriteItem('favoriteDrinks', drinkId)}
                    </li>
                ))}
            </ul>
            <h2>Favorites Products:</h2>
            <ul>
                {favoriteProducts.map((productId) => (
                    <li key={productId}>
                        {renderFavoriteItem('favoriteProducts', productId)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Favorites;
