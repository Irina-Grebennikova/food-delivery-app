import DebitCard from './DebitCard';
import { useStateValue } from '../StateProvider';
import Cart from './Cart';

const Sidebar = () => {
  const [{ isSidebarOpen }] = useStateValue();

  return (
    <div className={`rightMenu ${isSidebarOpen ? 'active' : ''}`}>
      <div className="debitCardContainer">
        <div className="debitCard">
          <DebitCard />
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Sidebar;
