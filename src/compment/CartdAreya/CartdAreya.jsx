import { useState } from 'react';
import Cartd from './Cartd';
import { useEffect } from 'react';

const CartdAreya = ({ handileClick }) => {
  const [shop, setShop] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(datas => setShop(datas));
  }, []);

  return (
    <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {shop.map(shop => (
        <Cartd handileClick={handileClick} key={shop.id} shop={shop}>
          {' '}
        </Cartd>
      ))}
    </div>
  );
};

export default CartdAreya;
