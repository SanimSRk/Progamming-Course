import { useState } from 'react';
import './App.css';
import AddData from './compment/AddData/AddData';
import CartdAreya from './compment/CartdAreya/CartdAreya';

function App() {
  const [shoping, setShoping] = useState([]);
  const [time, setTime] = useState(0);
  const [prices, setPrice] = useState(0);
  const [reming, setReming] = useState(15);
  const handileClick = (credit, price, shop) => {
    const newShop = [...shoping, shop];
    setShoping(newShop);
    const newTime = time + credit;
    setTime(newTime);
    const newPrice = prices + price;
    setPrice(newPrice);

    const remingTime = reming - newTime;
    setReming(remingTime);
  };

  return (
    <>
      <div className="lg:w-[90%] mx-auto">
        <h1 className="text-center text-3xl font-bold my-8">
          Course Registration
        </h1>
        <div className="lg:flex gap-5">
          <div className="lg:w-[75%] mx-auto">
            <CartdAreya handileClick={handileClick}></CartdAreya>
          </div>
          <div className="lg:w-3/12 mx-auto">
            <AddData
              shoping={shoping}
              time={time}
              prices={prices}
              reming={reming}
            ></AddData>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
