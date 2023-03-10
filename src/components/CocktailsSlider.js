import React from 'react';
import './CocktailsSlider.css'
import Loading from './Loading'
// import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context';
import Cocktail from './Cocktail';

const CocktailsSlider = () => {
    const { cocktails, loading } = useGlobalContext();
    // console.log(cocktails);

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
    // console.log(randomObjects);

    return (
        <>
            <div className="slider">
                {randomObjects.map((item) => {
                    const { image, name, id, info, glass } = item;
                    return (
                        <Cocktail image={image} name={name} glass={glass} info={info} key={id} id={id} modifier='horizontal'/>
                    )
                })}
            </div>
        </>
    )
}

export default CocktailsSlider;