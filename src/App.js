import './App.css';
import { useEffect } from 'react';
import MenuContainer from './MenuContainer';
import Header from './components/Header';
import HomeRounded from '@mui/icons-material/HomeRounded';
import Chat from '@mui/icons-material/Chat';
import AccountBalanceWalletRounded from '@mui/icons-material/AccountBalanceWalletRounded';
import Favorite from '@mui/icons-material/Favorite';
import Settings from '@mui/icons-material/Settings';
import SummarizeRounded from '@mui/icons-material/SummarizeRounded';
import BannerName from './components/BannerName';

function App() {
  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li');

    function setMenuActive() {
      menuLi.forEach((li) => li.classList.remove('active'));
      this.classList.add('active');
    }

    menuLi.forEach((li) => {
      li.addEventListener('click', setMenuActive);
    });
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName name={'John'} discount={'20'} link={'#'} />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-abca3.appspot.com/o/delivery.png?alt=media&token=d11b6f37-c367-442c-8b64-e586da0ed40d"
              alt=""
              className="deliveryPic"
            />
          </div>

          <div className="dishContainer"></div>
        </div>
        <div className="rightMenu"></div>
      </main>

      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={'#'} icon={<HomeRounded />} isHome />
          <MenuContainer link={'#'} icon={<Chat />} />
          <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded />} />
          <MenuContainer link={'#'} icon={<Favorite />} />
          <MenuContainer link={'#'} icon={<SummarizeRounded />} />
          <MenuContainer link={'#'} icon={<Settings />} />

          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
