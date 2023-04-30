import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './Card.css';
import FavoriteButton from './FavoriteButton';

const Card = ({ image, ratio, title, subtitle, description, button, id, type }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        const favorites = JSON.parse(localStorage.getItem(type)) || [];
        // const index = favorites.indexOf(id);
        if (isFavorite) {
            const index = favorites.indexOf(id);
            favorites.splice(index, 1);
        } else {
            favorites.push(id);
        }
        localStorage.setItem(type, JSON.stringify(favorites));
    };

    return (
        <article className="card">
            <figure className="card-figure">
                <img
                    className="card-img"
                    src={image}
                    alt={title} />
                <FavoriteButton
                    active={isFavorite}
                    type={type}
                    id={id}
                    onClick={toggleFavorite}
                />
            </figure>
            <div className="card-info">
                <h3 className="card-title">{title}</h3>
                {subtitle && <h4 className="card-subtitle">{subtitle}</h4>}
                {description && <p className="card-description">{description}</p>}
                {button && <div className="card-button">{button}</div>}
            </div>
        </article>
    );
};

// Card.propTypes = {
//     img: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     amount: PropTypes.number.isRequired,
//     id: PropTypes.number.isRequired,
//     orientation: PropTypes.string,
//     type: PropTypes.oneOf(['drink', 'product']).isRequired,
// };

export default Card;
