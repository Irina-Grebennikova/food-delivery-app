import { useCallback, useEffect, useState } from 'react';
import AddRounded from '@mui/icons-material/AddRounded';
import RemoveRounded from '@mui/icons-material/RemoveRounded';

const CartItem = ({ events, item }) => {
  const { count, price, imgSrc, name } = item;

  const calculateItemPrice = useCallback(
    () => parseInt(count) * parseFloat(price),
    [count, price]
  );

  const [itemPrice, setItemPrice] = useState(calculateItemPrice());

  useEffect(() => {
    setItemPrice(calculateItemPrice());
  }, [count, price, calculateItemPrice]);

  return (
    <div className="cartItem">
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>

      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {count}</span>
          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              onClick={() => events.decrement(item)}
            />
            <AddRounded
              className="itemAdd"
              onClick={() => events.increment(item)}
            />
          </div>
        </div>
      </div>

      <p className="itemPrice">
        <span className="dolorSign">$ </span>
        <span className="itemPriceValue">{itemPrice}</span>
      </p>
    </div>
  );
};

export default CartItem;
