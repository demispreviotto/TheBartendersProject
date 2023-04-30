import React from 'react';
import './CocktailsSlider.css'
import Loading from './Loading'
import { useGlobalContext } from '../context';
import CardDrink from './CardDrink';
// import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'


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

    // const nextSlide = () => {
    //     setIndex((oldIndex) => {
    //         let index = oldIndex + 1
    //         if (index > heroes.length - 1) {
    //             index = 0
    //         }
    //         return index
    //     })
    // }
    // const prevSlide = () => {
    //     setIndex((oldIndex) => {
    //         let index = oldIndex - 1
    //         if (index < 0) {
    //             index = heroes.length - 1
    //         }
    //         return index
    //     })
    // }

    return (
        // <section className='section'>
        <div className="slider">
            {randomObjects.map(({ image, name, id, info, glass }) => {
                return (
                    // <Cocktail image={image} name={name} glass={glass} info={info} id={id} orientation='horizontal' key={id} />
                    <CardDrink image={image} name={name} glass={glass} info={info} id={id} key={id} />
                )
            })}
            {/* <button className='prev' onClick={prevSlide}>
                    <FiChevronLeft />
                </button>
                <button className='next' onClick={nextSlide}>
                    <FiChevronRight />
                </button> */}
        </div>
        // </section>
    )
}

export default CocktailsSlider;