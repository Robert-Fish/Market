import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      cityDropdown: false,
      selectedCity: "Brisbane",
      citiesData: [],
      lover: "Post Ad"
    };
  }

  componentWillMount() {
    const self = this;
    axios
      .get(`/api/cities`)
      .then(function(response) {
        const { match, history } = self.props;
        let city = response.data.filter(item => {
          return item.slug == match.params.city;
        });
        self.setState(
          {
            citiesData: response.data,
            selectedCity: city[0].title
          },
          () => {}
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  selectCity = city => {
    this.setState(
      {
        selectedCity: city
      },
      () => {
        let city = this.state.citiesData.filter(item => {
          return item.title == this.state.selectedCity;
        });
        const { match, history } = this.props;
        history.push(`/${city[0].slug}`);
      }
    );
  };
  loopCities = () => {
    const self = this;
    return this.state.citiesData.map((item, i) => {
      return (
        <li key={i} onClick={this.selectCity.bind(null, item.title)}>
          {item.title}
        </li>
      );
    });
  };

  clickedCityDropwdown = () => {
    this.setState({
      cityDropdown: !this.state.cityDropdown
    });
  };

  onHoverBtn = () => {
    this.setState({
    lover: 'I love Taite'
    })
  }

  onHoverBtnTwo = () => {
    this.setState({
    lover: 'Post Ad'
    })
  }
  render() {
    const { match, history } = this.props;
    return (
      <div className="container">
        <header>
          <div className="left-menu">
            <Link to={`/${match.params.city}`} className="logo">
              Market
            </Link>
            <div className="city-dropdown" onClick={this.clickedCityDropwdown}>
              {this.state.selectedCity}{" "}
              <i
                className={`fas fa-chevron-down ${
                  this.state.cityDropdown ? "fa-chevron-up" : ""
                }`}
              />
              <div
                className={`scroll-area ${
                  this.state.cityDropdown ? "active" : ""
                }`}
              >
                <ul>{this.loopCities()}</ul>
              </div>
            </div>
          </div>

          <div className="right-menu">
            <div className="user-img">
              <i className="fas fa-user-circle" />
            </div>
            <div className="user-dropdown">
              My Account <i className="fas fa-angle-down" />
            </div>
            <div className="post-btn" onMouseEnter={this.onHoverBtn} onMouseLeave={this.onHoverBtnTwo}>{this.state.lover}</div>
            <div className="post-btn">Post Ad</div>
          </div>
        </header>
      </div>
    );
  }
}
