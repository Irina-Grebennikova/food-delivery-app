import StarRounded from '@mui/icons-material/StarRounded';
import Favorite from '@mui/icons-material/Favorite';
import AddRounded from '@mui/icons-material/AddRounded';
import { useState } from 'react';
import { Items } from '../data';
import { useStateValue } from '../StateProvider';
import { actionType } from '../reducer';

const ItemCard = ({ imgSrc, name, ratings, price, itemId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));
  const [{ cart }, dispatch] = useStateValue();

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const addToCart = () => {
    const isInCart = cart.find((item) => item.id === itemId);
    if (isInCart) {
      return;
    }
    const newCartItem = Items.find((n) => n.id === itemId);
    newCartItem.count = 1;
    dispatch({
      type: actionType.SET_CART,
      cart: cart.concat(newCartItem),
    });
  };

  return (
    <div className="itemCard" id={itemId}>
      <div
        className={`isFavorite ${isFavorite ? 'active' : ''}`}
        onClick={() => setIsFavorite(!isFavorite)}
      >
        <Favorite />
      </div>

      <div className="imgBox">
        <img src={imgSrc} alt="" className="itemImg" />
      </div>
      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((_, i) => (
              <i
                key={i}
                className={`rating ${currentValue > i ? 'orange' : 'gray'}`}
                onClick={() => handleClick(i + 1)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              <span>$ </span>
              {price}
            </h3>
          </div>
          <i className="addToCart" onClick={addToCart}>
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
