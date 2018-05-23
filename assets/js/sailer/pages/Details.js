import React, { Component } from "react";
import Gallery from "./components/Gallery";
export default class Details extends Component {
  render() {
    const { match, location, history } = this.props;
    return (
      <div className="details-page">
        <div className="container">
          <div className="white-box">
            <section className="submenu">
              <div className="direction">
                <a href="#" className="prev">
                  prev
                </a>
                <a href="#" className="next">
                  next
                </a>
              </div>

              <nav className="sub-links">
                <a href="#">More Ads by this user</a>
                <a href="#">Print</a>
                <a href="#">Share</a>
                <a href="#">Contact Seller</a>
              </nav>
            </section>

            <section className="content-area">
              <div className="media-column">
                <Gallery />
              </div>
              <div className="details-column">
                <div className="date">Posted: Feb 28th</div>
                <h3 className="title">
                  2017 Audi A3 8V MY17 1.4 Tfsi S Tronic COD White 7 Speed Auto
                  S-Tronic Cabriolet
                </h3>
                <h4 className="price">$45,000</h4>
                <div className="more-details">
                  <div className="info">
                    <label>Vin</label>
                    <h5>93023210382103</h5>
                  </div>
                  <div className="info">
                    <label>Mileage</label>
                    <h5>85,000 Km</h5>
                  </div>
                  <div className="info">
                    <label>Transmission</label>
                    <h5>Manual</h5>
                  </div>
                  <div className="info">
                    <label>Drive</label>
                    <h5>FWD</h5>
                  </div>
                  <div className="info">
                    <label>Condition</label>
                    <h5>New</h5>
                  </div>
                </div>
                <div className="description">
                  <label>Description</label>
                  <p>
                    Delivery Kilometres Only. Unwanted Prize. Save Thousands off
                    the new car price. This stunning 2017 Audi A3 1.4 TFSI
                    Automatic Cabriolet features GPS Satellite Navigation,
                    Cruise Control, Reverse Camera, Leather Seats and much more.
                    Be quick as this will not last long!, Delivery Kilometres
                    Only. Unwanted Prize. Save Thousands off the new car price.
                    This stunning 2017 Audi A3 1.4 TFSI Automatic Cabriolet
                    features GPS Satellite Navigation, Cruise Control, Reverse
                    Camera, Leather Seats and much more. Be quick as this will
                    not last long! LOOKING TO FINANCE YOUR NEXT CAR? We can
                    Help! Our lending panel comprises many of the major lenders
                    in Automotive Finance. Fast Approvals allow you to drive
                    away the same day in your new car. Need more info? Ask to
                    talk with one of our friendly On-Site Business Managers, who
                    can run you through repayment options, help you work out the
                    best structure, and tailor a package together for you!
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
