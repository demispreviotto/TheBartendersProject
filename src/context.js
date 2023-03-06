import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './reducer';
import { useCallback } from 'react';
import { cartItems } from './data';


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext()

const initialState = {
    loading: false,
    searchTerm: '',
    cocktails: [],
    // id: cocktail.id,
    cart: cartItems,
    total: 0,
    amount: 0,
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchDrinks = useCallback(async () => {
        dispatch({ type: 'LOADING' })
        try {
            const response = await fetch(`${url}${state.searchTerm}`)
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
                    } = item;
                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                    }
                })
                dispatch({ type: 'COCKTAILS', payload: newCocktails })
            } else {
                dispatch({ type: 'COCKTAILS', payload: [] })
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: 'LOADING_ERROR' })
        }
    }, [state.searchTerm])

    // const fetchProducts = useCallback(async () => {
    //     setLoading(true);
    //     // dispatch({type:'LOADING'})
    //     try {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         let newProducts = [];
    //         const { drinks } = data;
    //         // console.log(drinks)
    //         if (drinks) {
    //             let uId = 0;
    //             for (let i = 0; i < drinks.length; i++) {
    //                 let drink = drinks[i];
    //                 let productProperties = ['strIngredient1', 'strIngredient2', 'strIngredient3', 'strIngredient4', 'strIngredient5'];

    //                 for (let j = 0; j < productProperties.length; j++) {
    //                     let product = drink[productProperties[j]];
    //                     if (product) {
    //                         const existingProduct = newProducts.find(p => p.name.toLowerCase() === product.toLowerCase());
    //                         if (!existingProduct) {
    //                             uId++;
    //                             newProducts.push({
    //                                 id: uId,
    //                                 name: product,
    //                                 price: 9.99,
    //                                 img: `https://thecocktaildb.com/images/ingredients/${product.toLowerCase()}.png`,
    //                                 amount: 0,
    //                             });
    //                         }
    //                     }
    //                 }
    //             }
    //             // console.log(newProducts)
    //             setProducts(newProducts)
    //             // dispatch({type:'PRODUCTS', payload: newProducts})
    //         } else {
    //             setProducts(null)
    //             // dispatch({type:'PRODUCTS', payload: null})
    //         }
    //         setLoading(false)
    //         // dispatch({type:'LOADING_ERROR'})
    //     } catch (error) {
    //         console.log(error);
    //         setLoading(false);
    //         // dispatch({type:'LOADING_ERROR'})
    //     }
    // }, [])

    // const fetchProducts = useCallback(async () => {
    //     setLoading(true);
    //     // dispatch({ type: 'LOADING'})
    //     try {
    //         const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${searchTerm}`)
    //         // const response = await fetch(`${url}${state.searchTerm}`)
    //         const data = await response.json()
    //         const { ingredients } = data;
    //         if (ingredients) {
    //             const newProducts = ingredients.map((item) => {
    //                 const {
    //                     idIngredient,
    //                     strIngredient,
    //                     strDescription,
    //                     strType,
    //                     strAlcohol,
    //                     strABV,
    //                 } = item;
    //                 return {
    //                     id: idIngredient,
    //                     name: strIngredient,
    //                     img: `https://thecocktaildb.com/images/ingredients/${strIngredient.toLowerCase()}.png`,
    //                     alcohol: strAlcohol,
    //                     info: strDescription,
    //                     type: strType,
    //                     abv: strABV,
    //                     price: 9.99,
    //                 }
    //             })
    //             console.log(newProducts)
    //             setProducts(newProducts)
    //             // dispatch({type:'PRODUCTS', payload: newCocktails})
    //         } else {
    //             setProducts([])
    //             // dispatch({type:'PRODUCTS', payload: []})
    //         }
    //         setLoading(false);
    //     } catch (error) {
    //         console.log(error)
    //         setLoading(false);
    //         // dispatch({type:'LOADING_ERROR'})
    //     }
    // }, [searchTerm]);
    // // }, [state.searchTerm]);

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }
    const remove = (id) => {
        dispatch({ type: 'REMOVE', payload: id })
    }
    const toggleAmount = (id, type) => {
        dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } })
    }

    const searchCocktail = (searchValue) => {
        // setSearchTerm(searchValue.current.value);
        dispatch({ type: "SEARCH_TERM", payload: searchValue.target.value })
        console.log(searchValue)
    }
    // const getCocktail = useCallback(async (id) => {
    //     // async function getCocktail() {
    //     dispatch({ type: 'LOADING' })
    //     try {
    //         const response = await fetch(`${url}${id}`);
    //         const data = await response.json();
    //         const { drinks } = data;
    //         // console.log(data)
    //         if (drinks) {
    //             const {
    //                 strDrink: name,
    //                 strDrinkThumb: image,
    //                 strAlcoholic: info,
    //                 strCategory: category,
    //                 strGlass: glass,
    //                 strInstructions: instructions,
    //                 strIngredient1,
    //                 strIngredient2,
    //                 strIngredient3,
    //                 strIngredient4,
    //                 strIngredient5,
    //                 strMeasure1,
    //                 strMeasure2,
    //                 strMeasure3,
    //                 strMeasure4,
    //                 strMeasure5,
    //             } = drinks[0];
    //             const measures = [
    //                 {
    //                     id: 1,
    //                     a: strIngredient1,
    //                     b: strMeasure1
    //                 },
    //                 {
    //                     id: 2,
    //                     a: strIngredient2,
    //                     b: strMeasure2
    //                 },
    //                 {
    //                     id: 3,
    //                     a: strIngredient3,
    //                     b: strMeasure3
    //                 },
    //                 {
    //                     id: 4,
    //                     a: strIngredient4,
    //                     b: strMeasure4
    //                 },
    //                 {
    //                     id: 5,
    //                     a: strIngredient5,
    //                     b: strMeasure5
    //                 },
    //             ];
    //             const newCocktail = {
    //                 name,
    //                 image,
    //                 category,
    //                 info,
    //                 glass,
    //                 instructions,
    //                 measures,
    //             };
    //             dispatch({ type: 'COCKTAIL', payload: newCocktail })
    //             // setCocktail(newCocktail);
    //         } else {
    //             // setCocktail(null)
    //             dispatch({ type: 'COCKTAIL', payload: null })
    //         }
    //         // setLoading(false);
    //         dispatch({ type: 'LOADING_ERROR' })
    //     } catch (error) {
    //         console.log(error);
    //         // setLoading(false);
    //         dispatch({ type: 'LOADING_ERROR' })
    //     }
    // }, [])
    // getCocktail()



    useEffect(() => {
        fetchDrinks();
        // fetchProducts();
        // }, [searchTerm, fetchDrinks])
        // }, [searchTerm, fetchDrinks, fetchProducts])
    }, [state.searchTerm, fetchDrinks])
    useEffect(() => {
        dispatch({ type: 'GET_TOTAL' });
    }, [state.cart])

    return <AppContext.Provider value={{
        ...state,
        // loading,
        // cocktails,
        // products,
        // setSearchTerm,
        // searchform,
        clearCart,
        remove,
        toggleAmount,
        searchCocktail,
        // getCocktail,
    }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
