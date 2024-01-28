import { useEffect, useState } from 'react';
import { useStateValue } from '../StateProvider';
import SubMenuContainer from './SubMenuContainer';
import CartItem from './CartItem';
import { actionType } from '../reducer';

const Cart = () => {
  const [{ cart }, dispatch] = useStateValue();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sum = cart.reduce(
      (total, { count, price }) => count * price + total,
      0
    );

    setTotal(sum);
  }, [cart]);

  if (!cart.length) {
    return <div></div>;
  }

  const events = {
    increment: (item) => {
      item.count += 1;

      dispatch({
        type: actionType.SET_CART,
        cart: [...cart],
      });
    },
    decrement: (item) => {
      const nextCart =
        item.count === 1
          ? cart.filter((cartItem) => cartItem !== item)
          : [...cart];

      if (item.count !== 1) {
        item.count -= 1;
      }

      dispatch({
        type: actionType.SET_CART,
        cart: nextCart,
      });
    },
  };

  return (
    <div className="cartCheckOutContainer">
      <SubMenuContainer name={'Cart Items'} />
      <div className="cartContainer">
        <div className="cartItems">
          {cart.map((data) => (
            <CartItem key={data.id} events={events} item={data} />
          ))}
        </div>
      </div>

      <div className="totalSection">
        <h3>Total</h3>
        <p>
          <span>$ </span>
          {total}
        </p>
      </div>

      <button className="checkOut">Check Out</button>
    </div>
  );
};

export default Cart;
