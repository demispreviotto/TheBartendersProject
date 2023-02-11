import React from 'react'
import './Product.css'
// import { useGlobalContext } from '../context'
// import Loading from './Loading'
// import { useParams, Link } from 'react-router-dom'
// const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'

const Products = ({ img, title, price, amount  }) => {
    // const { toggleAmount } = useGlobalContext();
    return (
        // <section className='section'>
        <article className="product-card">
            <div className="product-img">
                <img src={img} alt={title} />
            </div>
            <div className="product-info">
                <h3>{title}</h3>
                <h4>${price}</h4>
            </div>
            {/* <div>
                <div>
                    increase amount
                    <button className='amount-btn' onClick={() => toggleAmount(id, 'inc')}>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
                        </svg>
                    </button>
                    amount
                    <p className='amount'>{amount}</p>
                    decrease amount
                    <button className='amount-btn' onClick={() => toggleAmount(id, 'dec')}>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                        </svg>
                    </button>
                </div>
            </div> */}
        </article>
        // </section>
    )
}

export default Products;
