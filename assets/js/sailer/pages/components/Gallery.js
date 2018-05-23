import React, { Component } from "react";

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      currentImg: "",
      allImgs: "",
      currentIndex: 0
    };
  }

  componentWillMount() {
    const allImgs = [
      "https://i.ebayimg.com/00/s/NDgwWDYzOQ==/z/3QoAAOSw~YRaeA2i/$_20.JPG",
      "https://i.ebayimg.com/00/s/NDgwWDYzOQ==/z/A6QAAOSwXoxaeA2g/$_20.JPG",
      "https://i.ebayimg.com/00/s/NDgwWDYzOQ==/z/0vEAAOSw-RFaeA2j/$_20.JPG",
      "https://i.ebayimg.com/00/s/NDgwWDYzOQ==/z/L~wAAOSwp7FaeA2e/$_20.JPG"
    ];
    this.setState({
      allImgs,
      currentImg: allImgs[this.state.currentIndex]
    });
  }

  loopCars = () => {
    return this.state.allImgs.map((item, index) => {
      return (
        <div
          key={index}
          className="thumb-img"
          onClick={this.clickedThumb.bind(null, index)}
          style={{
            backgroundImage: `url('${item}')`
          }}
        />
      );
    });
  };

  nextBtn = () => {
    if (this.state.currentIndex != this.state.allImgs.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    }
  };

  prevBtn = () => {
    if (this.state.currentIndex != 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    }
  };

  clickedThumb = index => {
    this.setState({
      currentIndex: index
    });
  };
  render() {
    const { match, location, history } = this.props;
    return (
      <div className="gallery">
        <div className="slider">
          <div className="main-image">
            <div className="arrows left-arrow" onClick={this.prevBtn}>
              <i className="fas fa-chevron-left" />
            </div>
            <div className="arrows right-arrow" onClick={this.nextBtn}>
              <i className="fas fa-chevron-right" />
            </div>
            <div
              className="image-1"
              style={{
                backgroundImage: `url('${
                  this.state.allImgs[this.state.currentIndex]
                }')`
              }}
            />
          </div>
        </div>
        <div className="thumbnails">{this.loopCars()}</div>
      </div>
    );
  }
}
