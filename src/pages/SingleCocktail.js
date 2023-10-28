import React from 'react'
import { useEffect, useState } from 'react'
import './SingleCocktail.css'
import Loading from '../components/Loading'
import CocktailsSlider from '../components/CocktailsSlider'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context';
import CardProduct from '../components/CardProduct'
import ButtonFavorite from '../components/ButtonFavorite'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  const { cart } = useGlobalContext();


  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
          } = drinks[0];
          const measures = [
            {
              measureId: 1,
              a: strIngredient1,
              b: strMeasure1
            },
            {
              measureId: 2,
              a: strIngredient2,
              b: strMeasure2
            },
            {
              measureId: 3,
              a: strIngredient3,
              b: strMeasure3
            },
            {
              measureId: 4,
              a: strIngredient4,
              b: strMeasure4
            },
            {
              measureId: 5,
              a: strIngredient5,
              b: strMeasure5
            },
          ];
          const newCocktail = {
            name,
            image,
            category,
            info,
            glass,
            instructions,
            measures,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null)
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail()
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  }

  const { name, image, category, info, glass, instructions, measures } = cocktail;

  return (
    <>
      <section className='section'>
        <div className="drink">
          <figure className="drink-figure">
            <img className='drink-img' src={image} alt={name} />
            <ButtonFavorite type='favoriteDrinks' id={id} />
          </figure>
          <div className="drink-info">
            <h2 className='section-title'>{name}</h2>
            <h4 className='drink-data'>category:</h4>
            <p>{category}</p>
            <h4 className='drink-data'>info:</h4>
            <p>{info}</p>
            <h4 className='drink-data'>glass:</h4>
            <p>{glass}</p>
            <h4 className='drink-data'>instructions:</h4>
            <p>{instructions}</p>
            <h4 className='drink-data'>ingredients:</h4>
            <ul>
              {measures.map((item) => item.a && <li key={item.measureId}>{item.a} - {item.b}</li>)}
            </ul>
          </div>
        </div>
        <div className='sigle-cocktail-section'>
          <h3>Do you have this?</h3>
          <div className="cart-items">
            {measures.map((measure) => {
              let newCartItem = [];
              cart.map((cartItem) => {
                if (measure.a === cartItem.title) {
                  return newCartItem = cartItem
                }
                return newCartItem;
              })
              if (newCartItem.title) {
                return <CardProduct key={newCartItem.id} {...newCartItem} />
              }
            }
            )}
          </div>
        </div>
        <div className='sigle-cocktail-section'>
          <h3>More Recipes...</h3>
          <CocktailsSlider />
        </div>
      </section>
    </>
  )
}

export default SingleCocktail
