import React, { useState, useEffect } from 'react';
import CardProduct from './CardProduct';
import CardDrink from './CardDrink';
import { cartItems } from '../data.js';
import './Favorites.css'

const Favorites = () => {
    const [favoriteDrinks, setFavoriteDrinks] = useState([]);
    const [favoriteProducts, setFavoriteProducts] = useState([]);
    const urlById = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

    const fetchFavoriteDrinks = async () => {
        const drinkIds = JSON.parse(localStorage.getItem('favoriteDrinks')) || [];
        const favoriteDrinkObjects = await Promise.all(
            drinkIds.map(async (drinkId) => {
                const response = await fetch(`${urlById}${drinkId}`);
                const data = await response.json();
                const drink = data.drinks[0];
                return {
                    id: drink.idDrink,
                    name: drink.strDrink,
                    image: drink.strDrinkThumb,
                    info: drink.strAlcoholic,
                };
            })
        );
        setFavoriteDrinks(favoriteDrinkObjects);
    };

    const fetchFavoriteProducts = async () => {
        const productIds = JSON.parse(localStorage.getItem('favoriteProducts')) || [];
        const favoriteProductObjects = productIds.map((productId) => {
            const product = cartItems.find((item) => item.id === productId);
            return product;
        });
        setFavoriteProducts(favoriteProductObjects);
    };

    useEffect(() => {
        fetchFavoriteDrinks();
        fetchFavoriteProducts();
    }, []);

    return (
        <section className='favorites-section'>
            <div>
                <h3>Favorites Drinks:</h3>
                {
                    favoriteDrinks.length > 0 ? (
                        <div className='favorites'>
                            {favoriteDrinks.map((drink) => (
                                <CardDrink key={drink.id} {...drink} />
                            ))}
                        </div>)
                        :
                        (
                            <p>no favorites yet</p>
                        )
                }
            </div>
            <div>
                <h3>Favorites Products:</h3>
                {favoriteProducts.length > 0 ? (
                    <div className='favorites'>
                        {favoriteProducts.map((product) => (
                            <CardProduct key={product.id} {...product} />
                        ))}
                    </div>
                ) : (
                    <p>no favorites yet</p>

                )}
            </div>
        </section>
    );
};

export default Favorites;