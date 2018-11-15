import React, { Component} from 'react';
import listingsData from './data/serverResponse.json';

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: listingsData.geoName
    }
  }
  render () {
    return (
      <header>
        <h1 className="logo">{this.state.name}</h1>
        {/*<nav>
          <a href="#">Create Ads</a>
          <a href="#">About Us</a>
          <a href="#">Login</a>
          <a href="#" className="register-btn">Register</a>
        </nav>
        */}
      </header>
    )
  }
}
