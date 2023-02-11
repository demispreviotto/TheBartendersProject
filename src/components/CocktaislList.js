import React from 'react'
import './CocktailsList.css'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktaislList = () => {
  const { cocktails, loading } = useGlobalContext();
  // console.log(cocktails);

  if (loading) {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return <h2 className='section-title'>
      no cocktail matched your search criteria</h2>
  }

  return (
      <>
        {/* <h2 className='section-title'>cocktails</h2> */}
        <div className="cocktails-center">
          {cocktails.map((item) => {
            return <Cocktail key={item.id} {...item} />
          })}
        </div>
      </>
  )
}

export default CocktaislList
