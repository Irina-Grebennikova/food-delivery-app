import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from '@mui/icons-material';
import { useEffect } from 'react';

function Header() {
  useEffect(() => {
    const toggleMenu = document.querySelector('.toggleMenu');

    const toggleActive = () =>
      document.querySelector('.rightMenu').classList.toggle('active');

    toggleMenu.addEventListener('click', toggleActive);
    return () => toggleMenu.removeEventListener('click', toggleActive);
  }, []);

  return (
    <header>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-abca3.appspot.com/o/logo.png?alt=media&token=c7f01065-f32a-43fb-9580-bd6273afc10f"
        alt=""
        className="logo"
      />

      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
          <p>2 </p>
        </div>
      </div>

      <div className="profileContainer">
        <div className="imgBox">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/food-delivery-abca3.appspot.com/o/profile.jpg?alt=media&token=0f2f13c4-c7c1-42a0-907c-0c8fb05e5b01"
            alt="profile"
            className="profilePic"
          />
        </div>

        <h2 className="userName">John Doe</h2>
      </div>

      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div>
    </header>
  );
}

export default Header;
