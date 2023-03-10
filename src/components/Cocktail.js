import React from 'react';
import './Cocktail.css'
import { Link } from 'react-router-dom'

const Cocktail = ({ image, name, id, info, glass, modifier }) => {
  
  const containerClass = `cocktail ${modifier ? modifier : ''}`;

  return (
    <article className={containerClass}>
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <div className="cocktail-footer">
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p>{info}</p>
          <Link to={`/cocktail/${id}`} className='btn primary-btn'>detail</Link>
        </div>
    </article>
  )
}

export default Cocktail
