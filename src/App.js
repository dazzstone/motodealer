import React from 'react';
import './App.css';
import Home from './components/HomePage/home';
import Moto from './components/Motos/motos';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cart from './components/Cart/cart';
import CartItem from './components/HomePage/CartItem/cartitem';
import Receipt from './components/Cart/Receipt/receipt';

function App() {
  return (
    <>
    <Router>
        <Link to="/">
          <img src="https://images.ua.prom.st/111794951_w640_h640_mopedy-honda.jpg" className="fixedImg"></img>
        </Link>
      <CartItem />
      <Route exact path="/" component={Home} />
      <Route path='/moto/:slug' component={Moto} />
      <Route path='/cart' component={Cart} />
      <Route path="/receipt" component={Receipt} />
    </Router>
    </>
  );
}

export default App;