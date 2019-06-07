import React from 'react';
import MotoListItem from '../MotoListItem'
import motocycles from '.../../../src/staticDataSources/motostore/defaults';


function Home() {
  return (
    <div className="motos-container">
      {motocycles.map((moto, index) => (
        <MotoListItem
          key={index}
          title={moto.title}
          image={moto.imageUrl}
          desc={moto.description}
          price={moto.price}
          slug={moto.slug}
        />
      ))}
    </div>
  )
}
export default Home;