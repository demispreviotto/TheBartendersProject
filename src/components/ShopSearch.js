import React from 'react';
import './ShopSearch.css'
import { useGlobalContext } from '../context';

const ShopSearch = () => {
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
    <>
      <form className="" onSubmit={handleSubmit}>
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
    </>
  )
}

export default ShopSearch;
