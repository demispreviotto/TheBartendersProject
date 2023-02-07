import React from 'react';
import './SearchForm.css'
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className='search'>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form-control">
          {/* <label htmlFor="name">search your favorite cocktail</label> */}
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
