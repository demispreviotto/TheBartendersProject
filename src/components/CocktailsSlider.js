import React from 'react';
import './CocktailsSlider.css'
import Loading from './Loading'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context';

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
                        <div className="slide-card" key={id}>
                            <div className="img-container">
                                <img src={image} alt={name} />
                            </div>
                            <div className="cocktail-footer">
                                <h3>{name}</h3>
                                <h4>{glass}</h4>
                                <p>{info}</p>
                                <Link to={`/cocktail/${id}`} className='btn primary-btn'>detail</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CocktailsSlider;