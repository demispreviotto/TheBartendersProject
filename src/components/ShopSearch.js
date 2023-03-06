import React, {useEffect, useRef} from 'react';
import './ShopSearch.css'
import { useGlobalContext } from '../context';

const ShopSearch = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchProduct = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <div className="search-form-control">
          <input
            className='form-input'
            type="text"
            id='name'
            placeholder='search your favorite cocktail'
            ref={searchValue}
            onChange={searchProduct}
          />
        </div>
      </form>
    </>
  )
}

export default ShopSearch;
