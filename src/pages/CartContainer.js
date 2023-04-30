import React from "react";
import './CartContainer.css'
import CardProduct from '../components/CardProduct'
import { useGlobalContext } from '../context'

const CartContainer = () => {
    const { cart, total, clearCart } = useGlobalContext()
    let cartList = cart.filter((item) => item.amount > 0);

    if (cartList.length === 0) {
        return (
            <section className='cart'>
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }
    return (
        <section className='cart'>
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartList.map((item) => {
                    const { image, title, price, amount, id, } = item;
                    return <CardProduct key={item.id} image={image} title={title} price={price} amount={amount} id={id} orientation='horizontal' />
                })}
            </div>
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