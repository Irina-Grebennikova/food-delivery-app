import { useStateValue } from '../StateProvider';
import { MenuItems } from '../data';
import { actionType } from '../reducer';
import MenuCard from './MenuCard';
import SubMenuContainer from './SubMenuContainer';

const CategoriesMenu = () => {
  const [{ categoryId }, dispatch] = useStateValue();

  const changeCategory = (id) => {
    dispatch({
      type: actionType.SET_CATEGORY,
      categoryId: id,
    });
  };

  return (
    <>
      <div className="menuCard">
        <SubMenuContainer name={'Menu Category'} />
      </div>
      <div className="rowContainer">
        {MenuItems &&
          MenuItems.map((data) => (
            <div key={data.id} onClick={() => changeCategory(data.categoryId)}>
              <MenuCard
                imgSrc={data.imgSrc}
                name={data.name}
                isActive={data.categoryId === categoryId}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default CategoriesMenu;
