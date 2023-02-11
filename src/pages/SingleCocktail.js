import React from 'react'
import './SingleCocktail.css'
import Loading from '../components/Loading'
import CocktailsSlider from '../components/CocktailsSlider'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        // console.log(data)
        if (data.drinks) {
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
          } = data.drinks[0];
          // const ingredients = [
          //   strIngredient1,
          //   strIngredient2,
          //   strIngredient3,
          //   strIngredient4,
          //   strIngredient5,
          // ];
          // const measures = [
          //   strMeasure1,
          //   strMeasure2,
          //   strMeasure3,
          //   strMeasure4,
          //   strMeasure5,
          // ];
          const measures = [
            {
              a: strIngredient1,
              b: strMeasure1
            },
            {
              a: strIngredient2,
              b: strMeasure2
            },
            {
              a: strIngredient3,
              b: strMeasure3
            },
            {
              a: strIngredient4,
              b: strMeasure4
            },
            {
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
            // ingredients,
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
        <img src={image} alt={name} />
        <div className="drink-info">
          <h2 className='section-title'>{name}</h2>
          <p>
            <span className='drink-data'>category:</span>{category}
          </p>
          <p>
            <span className='drink-data'>info:</span>{info}
          </p>
          <p>
            <span className='drink-data'>glass:</span>{glass}
          </p>
          <p>
            <span className='drink-data'>instructions:</span>{instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients:</span>
            <ul>
              {measures.map((item, index) => {
                return item.a ? <li><span key={index}>
                  {item.a} - {item.b}</span></li> : null;
              })}
            </ul>
            {/* {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}         */}
          </p>
        </div>
          <Link to='/' className='btn primary-btn'>back home</Link>
      </div>
      <CocktailsSlider/>
      {/* </div> */}
    </section>
  )
}

export default SingleCocktail
