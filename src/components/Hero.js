import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Hero.css'
import heroData from './heroData'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'


const Hero = () => {

    const [heroes, setheroes] = useState(heroData)
    const [index, setIndex] = useState(0)
    const { title, color, image, quote, link, legend } = heroes[index];

    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1
            if (index > heroes.length - 1) {
                index = 0
            }
            return index
        })
    }
    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1
            if (index < 0) {
                index = heroes.length - 1
            }
            return index
        })
    }

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                let index = oldIndex + 1
                if (index > heroes.length - 1) {
                    index = 0
                }
                // console.log(title)
                return index
            })
        }, 5000)
        return () => {
            clearInterval(slider)
        }
    }, [index])


    return (
        <>
            <section className={`hero ${color}`} style={{ backgroundImage: `url(${image})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <article className="hero-info" >
                    <h1>{title}</h1>
                    <h3 className={color}>{quote}</h3>
                    <Link to={{ link }} className="btn primary-btn">{legend}</Link>
                </article>
                <div className="arrows">
                    <button className='prev' onClick={prevSlide}>
                        <FiChevronLeft />
                    </button>
                    <button className='next' onClick={nextSlide}>
                        <FiChevronRight />
                    </button>
                </div>
            </section>
        </>
    )
}
export default Hero;