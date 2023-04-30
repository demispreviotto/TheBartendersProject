import React from 'react';
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5'
// import PropTypes from 'prop-types';

const FavoriteButton = ({ type, id, active, onClick }) => {
    // const [isFavorite, setIsFavorite] = useState(false);
    // const activeColor = type === 'drink' ? '#FF6B6B' : '#69B4FF';

    // const handleFavorite = () => {
    //     setIsFavorite(!isFavorite);
    //     const favorites = JSON.parse(localStorage.getItem(type)) || [];
    //     const index = favorites.indexOf(id);
    //     if (isFavorite && index !== -1) {
    //         favorites.splice(index, 1);
    //     } else if (!isFavorite && index === -1) {
    //         favorites.push(id);
    //     }
    //     localStorage.setItem(type, JSON.stringify(favorites));
    // };

    return (
        <button
            // className={`favorite-btn card-mark ${isFavorite ? 'active' : ''}`}
            // color={active ? 'var(--clr-grey-3)' : 'var(--clr-grey-8)'}
            // onClick={handleFavorite}
            className='card-mark'
            onClick={onClick}
        >
            {/* {isFavorite ? <IoBookmark className='card-mark' /> : <IoBookmarkOutline className='card-mark' />} */}
            {/* <IoBookmark
                // className={`card-mark ${isFavorite ? 'active' : ''}`}
            // {type === 'product' ? 'Favorite Product' : 'Favorite Drink'}
            /> */}
            {active ? <IoBookmark /> : <IoBookmarkOutline />}
        </button>
    );
};

// FavoriteButton.propTypes = {
//     active: PropTypes.bool.isRequired,
//     // type: PropTypes.oneOf(['drink', 'product']).isRequired,
//     // type: PropTypes.oneOf(['drink', 'product']).isRequired,
//     id: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
// };

export default FavoriteButton;
