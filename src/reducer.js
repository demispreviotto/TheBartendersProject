const reducer = (state, action) => {
    if (action.type === 'LOADING') {
        return { ...state, loading: true }
    }
    if (action.type === 'LOADING_ERROR') {
        return { ...state, loading: false }
    }
    if (action.type === 'SEARCH_TERM') {
        return { ...state, searchTerm: action.payload, loading: false }
    }
    if (action.type === 'COCKTAILS') {
        return { ...state, cocktails: action.payload, loading: false }
    }
    // if (action.type === 'COCKTAIL') {
    //     return { ...state, cocktail: action.payload, loading: false }
    // }
    if (action.type === 'CLEAR_CART') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.amount !== 0) {
                return { ...cartItem, amount: 0 }
            }
            return cartItem
        })
        return { ...state, cart: tempCart }
    }
    if (action.type === 'REMOVE') {
        return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload) }
    }
    if (action.type === 'TOGGLE_AMOUNT') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
                if (action.payload.type === 'inc') {
                    return { ...cartItem, amount: cartItem.amount + 1 }
                }
                if (action.payload.type === 'dec') {
                    return { ...cartItem, amount: cartItem.amount > 0 && cartItem.amount - 1 }
                }
            }
            return cartItem
        })
        // .filter((cartItem) => cartItem.amount !== 0)
        return { ...state, cart: tempCart }
    }
    if (action.type === "GET_TOTAL") {
        let { total, amount } = state.cart.reduce(
            (cartTotal, cartItem) => {
                const { price, amount } = cartItem;
                const itemTotal = price * amount;

                cartTotal.total += itemTotal;
                cartTotal.amount += amount;
                return cartTotal;
            }, {
            total: 0,
            amount: 0,
        })
        total = parseFloat(total.toFixed(2))
        return { ...state, total, amount }
    }
    throw new Error('no matching action type')
}
export default reducer;