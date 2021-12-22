import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/normalise.css';

import Home from './components/Home.js';
import Products from './components/Products.js';
import About from './components/About.js';
import NavBar from './components/NavBar.js';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/react-webpage-03/" component={Home} />
                <Route exact path="/react-webpage-03/products" component={Products} />
                <Route exact path="/react-webpage-03/about" component={About} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
