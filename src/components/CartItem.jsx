import { useEffect, useState } from 'react';
import AddRounded from '@mui/icons-material/AddRounded';
import RemoveRounded from '@mui/icons-material/RemoveRounded';
import { useStateValue } from '../StateProvider';
import { actionType } from '../reducer';

function CartItem({ price, imgSrc, name, itemId }) {
  const [qty, setQty] = useState(1);
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [qty, price]);

  const updateQuantity = (action, id) => {
    if (action === 'add') {
      setQty(qty + 1);
      return;
    }
    if (qty === 1) {
      dispatch({
        type: actionType.SET_CART,
        cart: cart.filter((item) => item.id !== id),
      });
      return;
    }
    setQty(qty - 1);
  };

  return (
    <div className="cartItem">
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>

      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              onClick={() => updateQuantity('remove', itemId)}
            />
            <AddRounded
              className="itemAdd"
              onClick={() => updateQuantity('add', itemId)}
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
}

export default CartItem;
