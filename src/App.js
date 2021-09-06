import React from 'react';
import Navbar from './components/Frame/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/pages/Jersey';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import PartDetail from './components/pages/JerseyDetail';
import About from './components/pages/About';
import CartSec from './components/pages/CartSection';
import Admin from './components/pages/Admin';
import product from './components/pages/product';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/register' component={SignUp} />
          <Route path='/login' component={SignIn} />
          <Route path='/cart' component={CartSec} />
          <Route path='/productDetails/:pid' component={PartDetail} />
          <Route path='/about' component={About} />
          <Route path='/product' component={product} />
          <Route path='/admin' component={Admin} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
