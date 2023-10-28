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
        dispatch({ type: "SEARCH_TERM", payload: searchValue.target.value })
        console.log(searchValue)
    }

    useEffect(() => {
        fetchDrinks();
    }, [state.searchTerm, fetchDrinks])
    useEffect(() => {
        dispatch({ type: 'GET_TOTAL' });
    }, [state.cart])

    return <AppContext.Provider value={{
        ...state,
        clearCart,
        remove,
        toggleAmount,
        searchCocktail,
    }}>{children}</AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
