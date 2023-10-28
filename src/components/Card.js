import React from 'react';
import './Card.css';

const Card = ({ image, ratio, title, subtitle, description, button, id, type }) => {
    return (
        <article className="card">
            <figure className="card-figure">
                <img
                    className="card-img"
                    src={image}
                    alt={title} />
            </figure>
            <div className="card-info">
                <h3 className="card-title">{title}</h3>
                {subtitle && <h4 className="card-subtitle">{subtitle}</h4>}
                {description && <p className="card-description">{description}</p>}
            </div>
            {button && <div className="card-button">{button}</div>}
        </article>
    );
};


export default Card;
