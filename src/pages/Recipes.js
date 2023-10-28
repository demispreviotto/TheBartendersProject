import React from 'react'
import CocktailsList from '../components/CocktailsList'
import SearchForm from '../components/SearchForm'

const Recipes = () => {
    return (
        <section className='section'>
            <SearchForm />
            <CocktailsList />
        </section>
    )
}

export default Recipes