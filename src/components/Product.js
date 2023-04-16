import React from 'react'
import './Product.css'
import { useGlobalContext } from '../context'

const Product = ({ img, title, price, amount, id, modifier }) => {
    const { toggleAmount } = useGlobalContext(id);
    const articleClass = `product-card ${modifier ? modifier : ''}`;

    return (
        <article className={articleClass}>
            <figure className="product-img">
                <img src={img} alt={title} />
            </figure>
            <div className="product-info">
                <h3>{title}</h3>
                <h4>${price}</h4>
                <div className='product-amount'>
                    <div className='product-toggle'>
                        {/* increase amount */}
                        <button className='btn product-amount-btn' 
                        onClick={() => toggleAmount(id, 'dec')}
                        >-</button>
                        {/* amount */}
                        <p className=''>{amount}</p>
                        {/* decrease amount */}
                        <button className='btn product-amount-btn' 
                        onClick={() => toggleAmount(id, 'inc')}
                        >+</button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Product;
