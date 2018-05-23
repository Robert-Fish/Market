import React, { Component } from "react";

export default class Listings extends Component {
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
