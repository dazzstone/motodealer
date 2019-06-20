import React from 'react';
import { connect } from 'react-redux';
import "./home.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";


function Home() {
  return (
    <>
      <div>
        <Breadcrumb listClassName="crumbs">
          <BreadcrumbItem tag="a" active>Honda MotorCycles</BreadcrumbItem>
        </Breadcrumb>
      </div>
    <div className="motos-container">
      <Link to="/category/sport" className="motocategory">
      <div>
        <img src="https://images.vexels.com/media/users/3/152654/isolated/preview/e5694fb12916c00661195c0a833d1ba9-sports-bike-icon-by-vexels.png" className="iconimg"></img>
        <p className="categorytitle">Sport</p>
      </div>
      </Link>
      <Link to="/category/classic" className="motocategory">
        <div>
          <img src="https://images.vexels.com/media/users/3/152376/isolated/preview/c5f4390c69b1c5113cec24502b46cc8e-classic-motorcycle-icon-by-vexels.png" className="iconimg"></img>
          <p className="categorytitle">Classic</p>
      </div>
      </Link>
      <Link to="/category/lowcubature" className="motocategory">
      <div>
        <img src="https://www.shareicon.net/download/2016/08/18/809623_transportation_512x512.png" className="iconimg"></img>
          <p className="categorytitle">Low-Cubature</p>
      </div>
      </Link>
    </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    motos: state.items
  }
}
export default connect(mapStateToProps, null)(Home);