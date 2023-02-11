import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('a');
    const [cocktails, setCocktails] = useState([]);
    const [products, setProducts] = useState([]);
    
    const fetchDrinks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            const { drinks } = data;
            if (drinks) {
                const newCocktails = drinks.map((item) => {
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass,
                        // strInstructions, 
                    } = item;
                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                        // intructions: strInstructions, 
                    }
                })
                setCocktails(newCocktails)
            } else {
                setCocktails([])
            }
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }, [searchTerm])

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            let newProducts = [];
            const { drinks } = data;
            // console.log(drinks)
            if (drinks) {
                let uId = 0;
                for (let i = 0; i < drinks.length; i++) {
                    let drink = drinks[i];
                    let productProperties = ['strIngredient1', 'strIngredient2', 'strIngredient3', 'strIngredient4', 'strIngredient5'];

                    for (let j = 0; j < productProperties.length; j++) {
                        let product = drink[productProperties[j]];
                        if (product) {
                            const existingProduct = newProducts.find(p => p.title === product);
                            if (!existingProduct) {
                                uId++;
                                newProducts.push({
                                    id: uId,
                                    title: product,
                                    price: 9.99,
                                    img: `www.thecocktaildb.com/images/ingredients/${product.toLowerCase()}.png`,
                                    amount: 0,
                                });
                            }
                        }
                    }
                }
                // console.log(newProducts);
                setProducts(newProducts)
            } else {
                setProducts(null)
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [])

    useEffect(() => {
        fetchDrinks();
        fetchProducts();
    }, [searchTerm, fetchDrinks, fetchProducts])

    return <AppContext.Provider value={{
        loading,
        cocktails,
        products,
        setSearchTerm,
    }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
