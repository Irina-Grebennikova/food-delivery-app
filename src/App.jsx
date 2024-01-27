import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { useStateValue } from './StateProvider';
import BannerName from './components/BannerName';
import { Items } from './data';
import ItemCard from './components/ItemCard';
import CategoriesMenu from './components/CategoriesMenu';
import BottomMenu from './components/BottomMenu';
import Sidebar from './components/Sidebar';

function App() {
  const [products, setProducts] = useState([]);
  const [{ categoryId, searchQuery, user }] = useStateValue();

  useEffect(() => {
    setProducts(
      Items.filter(
        (item) =>
          item.categoryId === categoryId &&
          item.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
      )
    );
  }, [categoryId, searchQuery]);

  return (
    <div className="App">
      <Header />

      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName name={user.name} discount={'20'} link={'#'} />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-abca3.appspot.com/o/delivery.png?alt=media&token=d11b6f37-c367-442c-8b64-e586da0ed40d"
              alt=""
              className="deliveryPic"
            />
          </div>

          <div className="dishContainer">
            <CategoriesMenu />

            <div className="dishItemContainer">
              {products &&
                products.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
        </div>
        <Sidebar />
      </main>

      <BottomMenu />
    </div>
  );
}

export default App;
