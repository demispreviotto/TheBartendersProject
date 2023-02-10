import React from 'react'
import './ProductsList.css'
import Product from './Product'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const ProductslList = () => {
    const { products, loading } = useGlobalContext();

    if (loading) {
        return <Loading />
    }
    if (products.length < 1) {
        return <h2 className='section-title'>
            no cocktail matched your search criteria</h2>
    }

    return (
        <div className="product-list">
            {products.map((item) => {
                return <Product key={item.id} {...item} />
            })}
        </div>
    )
}

export default ProductslList