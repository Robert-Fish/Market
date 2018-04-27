import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <div className="left-menu">
            <div className="logo">Market</div>
            <div className="city">
              Brisbane <i className="fas fa-chevron-down" />
            </div>
          </div>

          <div className="right-menu">
            <div className="user-img">
              <i className="fas fa-user" />
            </div>
            <div className="user-dropdown">
              My Account <i className="fas fa-angle-down" />
            </div>
            <div className="post-btn">Post Ad</div>
          </div>
        </header>
      </div>
    );
  }
}
