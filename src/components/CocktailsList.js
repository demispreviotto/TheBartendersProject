import React from 'react';
import './CocktailsList.css';
import CardDrink from './CardDrink';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailsList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return <h2 className='section-title'>
      no cocktail matched your search criteria</h2>
  }

  return (
    <>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <CardDrink key={item.id} {...item} />
        })}
      </div>
    </>
  )
}

export default CocktailsList;
