import React, { Component } from "react";
import axios from "axios";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      categoriesData: ""
    };
  }
  componentWillMount() {
    const self = this;
    axios
      .get("/api/categories")
      .then(function(response) {
        self.setState(
          {
            categoriesData: response.data
          },
          () => {
            console.log(self.state);
          }
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  loopCategories = () => {
    if (this.state.categoriesData != "") {
      return this.state.categoriesData.map((category, i) => {
        const loopListings = () => {
          return category.listings.map((listing, index) => {
            return (
              <a
                href={`${category.title}/${listing.slug}`}
                className="link"
                key={index}
              >
                {listing.name}
              </a>
            );
          });
        };
        return (
          <div className="categories" key={i}>
            <div className="title">{category.title}</div>
            <div
              className={`group-links ${
                category.title == "Jobs" ||
                category.title == "Personal" ||
                category.title == "Housing"
                  ? "single-col"
                  : ""
              }`}
            >
              {loopListings()}
            </div>
          </div>
        );
      });
    } else {
      return "Loading";
    }
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
