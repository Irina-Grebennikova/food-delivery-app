import { useState } from 'react';
import HomeRounded from '@mui/icons-material/HomeRounded';
import Chat from '@mui/icons-material/Chat';
import AccountBalanceWalletRounded from '@mui/icons-material/AccountBalanceWalletRounded';
import Favorite from '@mui/icons-material/Favorite';
import Settings from '@mui/icons-material/Settings';
import SummarizeRounded from '@mui/icons-material/SummarizeRounded';
import MenuContainer from '../MenuContainer';

const menuItems = [
  {
    name: 'home',
    path: '#',
    icon: <HomeRounded />,
  },
  {
    name: 'chat',
    path: '#',
    icon: <Chat />,
  },
  {
    name: 'wallet',
    path: '#',
    icon: <AccountBalanceWalletRounded />,
  },
  {
    name: 'favorite',
    path: '#',
    icon: <Favorite />,
  },
  {
    name: 'history',
    path: '#',
    icon: <SummarizeRounded />,
  },
  {
    name: 'settings',
    path: '#',
    icon: <Settings />,
  },
];

const BottomMenu = () => {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <div className="bottomMenu">
      <ul id="menu">
        {menuItems.map((item) => (
          <MenuContainer
            key={item.name}
            link={item.path}
            icon={item.icon}
            isActive={activeLink === item.name}
            handleClick={() => setActiveLink(item.name)}
          />
        ))}
        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default BottomMenu;
