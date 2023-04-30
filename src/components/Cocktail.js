import React from 'react';
import './Cocktail.css'
import { Link } from 'react-router-dom'

const Cocktail = ({ image, name, id, info, glass, orientation }) => {

  const containerClass = `cocktail ${orientation ? orientation : ''}`;

  return (
    // <article className='cocktail'>
    <article className={containerClass}>
      <figure className="cocktail-img">
        <img src={image} alt={name} />
      </figure>
      <div className='cocktail-footer'>
        <div className="cocktail-info">
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p>{info}</p>
        </div>
        <Link to={`/cocktail/${id}`} className='btn primary-btn'>detail</Link>
      </div>
    </article>
  )
}

export default Cocktail
