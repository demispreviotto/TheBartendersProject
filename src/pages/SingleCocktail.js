import React from 'react'
import { useEffect, useState } from 'react'
import './SingleCocktail.css'
import Loading from '../components/Loading'
import CocktailsSlider from '../components/CocktailsSlider'
import { useParams } from 'react-router-dom'
import { cartItems } from '../data';
import CardProduct from '../components/CardProduct'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  // const { getCocktail } = useGlobalContext()

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        const { drinks } = data;
        // console.log(data)
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
              id: 1,
              a: strIngredient1,
              b: strMeasure1
            },
            {
              id: 2,
              a: strIngredient2,
              b: strMeasure2
            },
            {
              id: 3,
              a: strIngredient3,
              b: strMeasure3
            },
            {
              id: 4,
              a: strIngredient4,
              b: strMeasure4
            },
            {
              id: 5,
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
    <section className='section'>
      {/* <div className="container"> */}
      <div className="drink">
        <figure className="drink-figure">
          <img className='drink-img' src={image} alt={name} />
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
            {measures.map((item) => item.a && <li key={item.id}>{item.a} - {item.b}</li>)}
          </ul>
          {/* {ingredients.map((item, index) => {
            return item ? <span key={index}>{item}</span> : null;
          })}         */}
        </div>
      </div>
      <div>
        <h3>Do you have this?</h3>
        <div className="cart-items">
          {measures.map((measure) => {
            // console.log(measure.a)
            let newCartItem = [];
            cartItems.map((cartItem) => {
              if (measure.a === cartItem.title) {
                // console.log(cartItem.title)
                return newCartItem = cartItem
              }
              return newCartItem;
            })
            if (newCartItem.title) {
              const { image, title, price, amount, id } = newCartItem;
              return <CardProduct key={id} image={image} title={title} price={price} amount={amount} id={id} />
              // return <Product key={id} img={img} title={title} price={price} amount={amount} id={id} />
            }
          }
          )}
        </div>
      </div>
      <div>
        <h3>More Recipes...</h3>
        <CocktailsSlider />
      </div>
      {/* <Link to='/' className='btn primary-btn'>back home</Link> */}
      {/* </div> */}
    </section>
  )
}

export default SingleCocktail
