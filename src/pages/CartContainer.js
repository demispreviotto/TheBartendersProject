// import React, { useState, useEffect } from "react";
import './CartContainer.css'
// import Product from "./Product";
// import CartItem from '../components/CartItem'
import Product from '../components/Product'
import { useGlobalContext } from '../context'

const CartContainer = () => {
    const { cart, total, clearCart } = useGlobalContext()
    let cartList = cart.filter((item)=>item.amount>0);

    if (cartList.length === 0) {
        return (
            <section className='cart'>
                {/* cart header */}
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }
    return (
        <section className='cart'>
            {/* cart header */}
            <header>
                <h2>your bag</h2>
            </header>
            {/* cart items */}
            <div>
                {cartList.map((item) => {
                    // console.log(item)
                    // return <CartItem key={item.id} {...item} />
                    const { img, title, price, amount, id,} = item;
                    return <Product key={item.id} img={img} title={title} price={price} amount={amount} id={id} modifier='horizontal'/>
                })}
            </div>
            {/* cart footer */}
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <button
                    className='btn clear-btn'
                    onClick={clearCart}
                >
                    clear cart
                </button>
            </footer>
        </section>
    )
}
export default CartContainer;