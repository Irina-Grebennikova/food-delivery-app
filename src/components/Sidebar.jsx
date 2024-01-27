import DebitCard from './DebitCard';
import CartItem from './CartItem';
import SubMenuContainer from './SubMenuContainer';
import { useStateValue } from '../StateProvider';

const Sidebar = () => {
  const [{ cart, isSidebarOpen }] = useStateValue();

  return (
    <div className={`rightMenu ${isSidebarOpen ? 'active' : ''}`}>
      <div className="debitCardContainer">
        <div className="debitCard">
          <DebitCard />
        </div>
      </div>

      {!cart.length ? (
        <div></div>
      ) : (
        <div className="cartCheckOutContainer">
          <SubMenuContainer name={'Cart Items'} />
          <div className="cartContainer">
            <div className="cartItems">
              {cart.map((data) => (
                <CartItem
                  key={data.id}
                  itemId={data.id}
                  name={data.name}
                  imgSrc={data.imgSrc}
                  price={data.price}
                />
              ))}
            </div>
          </div>

          <div className="totalSection">
            <h3>Total</h3>
            <p>
              <span>$ </span>45.0
            </p>
          </div>

          <button className="checkOut">Check Out</button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
