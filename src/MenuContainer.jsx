const MenuContainer = ({ link, icon, isActive, handleClick }) => (
  <li className={isActive ? 'active' : ''} onClick={handleClick}>
    <a href={link}>
      <span className="icon">{icon}</span>
    </a>
  </li>
);

export default MenuContainer;
