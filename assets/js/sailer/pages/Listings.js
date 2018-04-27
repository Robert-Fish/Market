import React, { Component } from "react";

export default class Listings extends Component {
  loopItems = () => {
    let testarray = [1, 2, 3, 4, 5, 6, 7];
    return testarray.map((item, i) => {
      return (
        <div className="item">
          <div className="image">
            <div className="price">$258,000</div>
            image
          </div>
          <div className="details">
            <h5>
              Mercedes Benz AMG GT <i className="far fa-star" />
            </h5>
            <h6>Brisbane City, QLD</h6>
          </div>
        </div>
      );
    });
  };
  render() {
    const { match, location, history } = this.props;
    return (
      <div className="listings-page">
        <div className="container">
          <section id="filter">
            <div className="form-group price">
              <label>Price</label>
              <div className="min-max">
                <select name="min-price" className="min">
                  <option value="0">0</option>
                </select>
                <select name="max-price" className="max">
                  <option value="10000">10,000</option>
                </select>
              </div>
            </div>

            <div className="form-group make">
              <label>Make</label>
              <select name="make" className="make">
                <option value="bmw">bmw</option>
              </select>
            </div>

            <div className="form-group model">
              <label>Model</label>
              <select name="model" className="model">
                <option value="2008">2008</option>
              </select>
            </div>

            <div className="form-group button">
              <div className="primary-btn">Update</div>
              <div className="reset-btn">Reset</div>
            </div>
          </section>
        </div>
        <section id="list-view">
          <div className="container">
            <div className="white-box">
              <section className="change-view">
                <div className="form-group view-dropdown">
                  <select name="select-view" className="select-view">
                    <option value="gallery">Gallery View</option>
                    <option value="list">List View</option>
                    <option value="list">Thumb View</option>
                  </select>
                </div>

                <div className="form-group sort-dropdown">
                  <select name="sort-dropdown" className="sort-dropdown">
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>
              </section>
              <section className="all-items">{this.loopItems()}</section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
