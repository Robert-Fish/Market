import React, { Component } from "react";
import axios from "axios";
import qs from "query-string";
export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      itemsData: [],
      min_price: 0,
      max_price: 10000,
      sort: "Newest",
      select_view: "Gallery View"
    };
  }
  componentWillMount() {
    const { match, history } = this.props;
    const self = this;
    const queryParams = qs.parse(this.props.location.search);
    const { min_price, max_price, sort, select_view } = queryParams;
    if (queryParams.min_price != undefined) {
      axios
        .get(
          `/api/${match.params.city}/${
            match.params.category
          }?min_price=${min_price}&max_price=${max_price}&sort=${sort}&select_view=${select_view}`
        )
        .then(function(response) {
          self.setState(
            {
              itemsData: response.data
            },
            () => {
              console.log(self.itemsData);
            }
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      axios
        .get(`/api/${match.params.city}/${match.params.category}`)
        .then(function(response) {
          self.setState(
            {
              itemsData: response.data
            },
            () => {
              console.log(self.itemsData);
            }
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
  loopItems = () => {
    return this.state.itemsData.map((item, i) => {
      return (
        <div className="item" key={i}>
          <div
            className="image"
            style={{
              backgroundImage: `url('${item.images[0]}')`
            }}
          >
            <div className="price">{item.price}</div>
          </div>
          <div className="details">
            <h5>
              {item.title} <i className="far fa-star" />
            </h5>
            <h6>Brisbane City, QLD</h6>
          </div>
        </div>
      );
    });
  };

  showMakeModelDropDown = () => {
    const { match, location, history } = this.props;

    if (match.params.listings == "cars-and-trucks") {
      return (
        <div className="make-model-comp">
          <div className="form-group make">
            <label>Make</label>
            <select name="make" className="make" onChange={this.handleChange}>
              <option value="alfa-romeo">Alfa Romeo</option>
              <option value="alpina">Alpina</option>
              <option value="aston-martin">Aston Martin</option>
              <option value="audi">Audi</option>
              <option value="bentley">Bentley</option>
              <option value="bmw">BMW</option>
              <option value="citreon">Citroen</option>
              <option value="dacia">Dacia</option>
              <option value="ds">DS</option>
              <option value="ferrari">Ferrari</option>
              <option value="fiat">Fiat</option>
              <option value="ford">Ford</option>
              <option value="holden">Holden</option>
              <option value="honda">Honda</option>
              <option value="hyundai">Hyundai</option>
              <option value="infiniti">Infiniti</option>
              <option value="jaguar">Jaguar</option>
              <option value="jeep">Jeep</option>
              <option value="kia">Kia</option>
              <option value="lamborghini">Lamborghini</option>
              <option value="land-rover">Land Rover</option>
              <option value="lexus">Lexus</option>
              <option value="lotus">Lotus</option>
              <option value="maserati">Maserati</option>
              <option value="mazda">Mazda</option>
              <option value="mclaren">McLaren</option>
              <option value="mercedes">Mercedes</option>
              <option value="mg">MG</option>
              <option value="mini">Mini</option>
              <option value="mitsubishi">Mitsubishi</option>
              <option value="nissan">Nissan</option>
              <option value="peugeot">Peugeot</option>
              <option value="porsche">Porsche</option>
              <option value="renault">Renault</option>
              <option value="rolls-royce">Rolls-Royce</option>
              <option value="seat">Seat</option>
              <option value="skoda">Skoda</option>
              <option value="smart">Smart</option>
              <option value="ssangyong">SsangYong</option>
              <option value="subaru">Subaru</option>
              <option value="suzuki">Suzuki</option>
              <option value="tesla">Tesla</option>
              <option value="toyota">Toyota</option>
              <option value="vauxhall">Vauxhall</option>
              <option value="volkswagen">Volkswagen</option>
              <option value="volvo">Volvo</option>
            </select>
          </div>

          <div className="form-group model">
            <label>Model</label>
            <select name="model" className="model" onChange={this.handleChange}>
              <option value="2018">2018</option>
              <option value="2007">2017</option>
              <option value="2007">2016</option>
              <option value="2007">2015</option>
              <option value="2007">2014</option>
              <option value="2007">2013</option>
              <option value="2007">2012</option>
              <option value="2007">2011</option>
              <option value="2007">2010</option>
              <option value="2007">2009</option>
              <option value="2007">2008</option>
              <option value="2007">2007</option>
              <option value="2007">2006</option>
              <option value="2007">2005</option>
              <option value="2007">2004</option>
              <option value="2007">2003</option>
              <option value="2007">2002</option>
              <option value="2007">2001</option>
              <option value="2007">2000</option>
            </select>
          </div>
        </div>
      );
    }
  };

  handleChange = event => {
    const name = event.target.name;
    const value =
      event.target.type == "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value
      },
      () => {}
    );
  };

  submitFilters = () => {
    const self = this;
    const { match, location, history } = this.props;
    const { min_price, max_price, sort, select_view } = this.state;
    history.push(
      `/${match.params.city}/${
        match.params.category
      }?min_price=${min_price}&max_price=${max_price}&sort=${sort}&select_view=${select_view}`
    );

    document.location.href = `/${match.params.city}/${
      match.params.category
    }?min_price=${min_price}&max_price=${max_price}&sort=${sort}&select_view=${select_view}`;
    const queryParams = qs.parse(this.props.location.search);
  };
  render() {
    const { match, location, history } = this.props;
    return (
      <div className="listings-page">
        <div className="container">
          <section id="filter">
            <div className="form-group price">
              <label>Price</label>
              <div className="min_max">
                <select
                  name="min_price"
                  className="min"
                  onChange={this.handleChange}
                  value={this.state.min_price}
                >
                  <option value="0">0</option>
                  <option value="5000">5000</option>
                  <option value="10000">10000</option>
                  <option value="20000">20000</option>
                  <option value="30000">30000</option>
                  <option value="45000">45000</option>
                </select>
                <select
                  name="max_price"
                  className="max"
                  onChange={this.handleChange}
                  value={this.state.max_price}
                >
                  <option value="10000">10000</option>
                  <option value="20000">20000</option>
                  <option value="45000">45000</option>
                </select>
              </div>
            </div>

            {this.showMakeModelDropDown()}
            <div className="form-group button">
              <div className="primary-btn" onClick={this.submitFilters}>
                Update
              </div>
              <div className="reset-btn">Reset</div>
            </div>
          </section>
        </div>
        <section id="list-view">
          <div className="container">
            <div className="white-box">
              <section className="change-view">
                <div className="form-group view-dropdown">
                  <select
                    name="select_view"
                    className="select-view"
                    onChange={this.handleChange}
                    value={this.state.select_view}
                  >
                    <option value="gallery">Gallery View</option>
                    <option value="list">List View</option>
                    <option value="list">Thumb View</option>
                  </select>
                </div>

                <div className="form-group sort-dropdown">
                  <select
                    name="sort-dropdown"
                    className="sort"
                    onChange={this.handleChange}
                    value={this.state.sort}
                  >
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
