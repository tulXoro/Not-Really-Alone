import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Header from "./Header";
  import Forum from "./Forum";
  import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Single Scroll</h1>
          <ul className="header">
            <li><NavLink exact to="/">Header</NavLink></li>
            <li><NavLink to="/stuff">Forum</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Header}/>
            <Route path="/forum" component={Forum}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;