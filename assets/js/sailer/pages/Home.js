import React, { Component } from "react";
import axios from "axios";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      categoriesData: ""
    };
  }
  componentWillMount() {}

  componentDidMount() {
    const { match, history } = this.props;
    if (match.params.city == undefined) {
      history.push("/brisbane");
    }

    const self = this;
    axios
      .get(`/api/${match.params.city}`)
      .then(function(response) {
        self.setState(
          {
            categoriesData: response.data
          },
          () => {}
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  loopCategories = () => {
    const { match, history } = this.props;
    if (this.state.categoriesData != "") {
      return this.state.categoriesData.map((category, i) => {
        const loopListings = () => {
          return category.listings.map((listing, index) => {
            return (
              <a
                href={`/${match.params.city}/${category.title}/${listing.slug}`}
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
            <a
              href={`/${match.params.city}/${category.title}`}
              className="title"
            >
              {category.title}
            </a>
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
              placeholder="Search..."
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
