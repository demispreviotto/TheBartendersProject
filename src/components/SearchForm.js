import React, { useRef } from 'react';
import './SearchForm.css'
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { searchCocktail } = useGlobalContext();
  const searchValue = useRef('');
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className='search'>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form-control">
          <input
            className='form-input'
            type="text"
            id='name'
            placeholder='search your favorite cocktail'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
