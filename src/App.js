import React, {component, Fragment} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default/Default';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
        <Fragment>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={ProductList}/>
            <Route path="/details" component={Details}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/default" component={Default}/>
            <Route path="/about" component={About}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
       </Fragment>
    </BrowserRouter>

  );
}

export default App;
