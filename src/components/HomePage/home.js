import React from 'react';
import { connect } from 'react-redux'
import MotoListItem from '../MotoListItem/motolistitem'


function Home({ motos }) {
  return (
    <div className="motos-container">
      {motos.map((moto, index) => (
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
const mapStateToProps = (state) => {
  return {
    motos: state.items
  }
}
export default connect(mapStateToProps, null)(Home)