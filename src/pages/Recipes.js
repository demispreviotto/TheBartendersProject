import React from 'react'
import CocktailsList from '../components/CocktailsList'
import SearchForm from '../components/SearchForm'

const Recipes = () => {
    return (
        <section className='section'>
            {/* <div className="container"> */}
                <SearchForm />
                <CocktailsList />
            {/* </div> */}
        </section>
    )
}

export default Recipes