import React from 'react';
import './App.css';
import MotoListItem from './components/MotoListItem'
import motocycles from './staticDataSources/motostore/defaults';

function MotoList() {
  return (
    <>
      <div className="fixblock">
        <img src="https://images.ua.prom.st/111794951_w640_h640_mopedy-honda.jpg" className="fixedImg"></img>
    </div>
    <div className="motos-container">
      {motocycles.map((moto, index) => (
        <MotoListItem 
          key={index}
          title={moto.title}
          image={moto.imageUrl}
          desc={moto.description}
          price={moto.price}
        />
      ))}
    </div>
    </>
  );
}

export default MotoList;