import React, { Component } from "react";

export default class Home extends Component {
  loopCategories = () => {
    let testarray = [1, 2, 3, 4, 5, 6, 7];
    return testarray.map((item, i) => {
      return (
        <div className="categories" key={i}>
          <div className="title">Community</div>
          <div className="group-links">
            <a href="#" className="link">
              Community
            </a>
            <a href="#" className="link">
              Activities
            </a>
            <a href="#" className="link">
              Artists
            </a>
            <a href="#" className="link">
              Childcare
            </a>
            <a href="#" className="link">
              Classes
            </a>
            <a href="#" className="link">
              Events
            </a>
            <a href="#" className="link">
              General
            </a>
            <a href="#" className="link">
              Groups
            </a>
            <a href="#" className="link">
              Local News
            </a>
            <a href="#" className="link">
              Lost + Found
            </a>
            <a href="#" className="link">
              Musicians
            </a>
            <a href="#" className="link">
              Pets
            </a>
          </div>
        </div>
      );
    });
  };

  loopTags = () => {
    let testTags = ["a", "s", "d", "f", "g", "q"];
    return testTags.map((item, i) => {
      return (
        <div className="tag" key={i}>
          Apple macbook
        </div>
      );
    });
  };
  render() {
    return (
      <div className="home">
        <div className="container">
          <h1>
            Where buyers meet sellers <br />{" "}
            <i className="fas fa-shopping-bag" />
          </h1>

          <section className="links">{this.loopCategories()}</section>
          <section className="trending">
            <input
              type="text"
              name="search"
              className="search"
              placeholder="Search ..."
            />
            <div className="title">
              Trending now <i className="far fa-clock" />
            </div>
            <div className="trending-tags">{this.loopTags()} </div>
          </section>
        </div>
      </div>
    );
  }
}
