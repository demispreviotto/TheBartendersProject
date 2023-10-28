import React from 'react';
import './CocktailsSlider.css'
import Loading from './Loading'
import { useGlobalContext } from '../context';
import CardDrink from './CardDrink';

const CocktailsSlider = () => {
    const { cocktails, loading } = useGlobalContext();

    if (loading) {
        return <Loading />
    }
    if (cocktails.length < 1) {
        return <h2 className='section-title'>
            no cocktail matched your search criteria</h2>
    }

    const getRandomObjects = (array, num) => {
        let result = [];
        let randomIndex;
        let counter = 0;
        let usedIndexes = [];

        while (counter < num) {
            randomIndex = Math.floor(Math.random() * array.length);
            if (!usedIndexes.includes(randomIndex)) {
                result.push(array[randomIndex]);
                usedIndexes.push(randomIndex);
                counter++;
            }
        }
        return result;
    }

    let randomObjects = getRandomObjects(cocktails, 5);
    return (
        <div className="slider">
            {randomObjects.map(({ image, name, id, info, glass }) => {
                return (
                    <CardDrink image={image} name={name} glass={glass} info={info} id={id} key={id} />
                )
            })}
        </div>
    )
}

export default CocktailsSlider;