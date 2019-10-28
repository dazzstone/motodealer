import React from 'react';
import './App.css';
import Home from './components/HomePage/home';
import Moto from './components/Motos/motos';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cart from './components/Cart/cart';
import CartItem from './components/HomePage/CartItem/cartitem';
import Receipt from './components/Cart/Receipt/receipt';
import Categories from './components/Categories/categories';

function App() {
  return (
    <>
    <Router>
        <div className="fixblock">
          <Link to="/">
            <img src="https://images.ua.prom.st/111794951_w640_h640_mopedy-honda.jpg" className="fixedImg" alt="error"></img>
          </Link>
          <Link to="/cart">
            <img src="https://image.flaticon.com/icons/png/512/4/4295.png" className="cartimg" alt="error"></img>
              <CartItem />
          </Link>
        </div>
      <Route exact path="/" component={Home} />
      <Route path="/category/:categoryName" component={Categories} />
      <Route path='/moto/:categoryName/:slug' component={Moto} />
      <Route path='/cart' component={Cart} />
      <Route path="/receipt" component={Receipt} />
    </Router>
    </>
  );
}

export default App;