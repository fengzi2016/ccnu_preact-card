import React from 'react';
import { Router, Route, Link } from 'react-router'
import Header from '../components/header/header'
import Product from '../components/products/products'
const routerConfig = () =>{
    <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
}



export default getRouter;