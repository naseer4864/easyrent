import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchBar from "../searchbar/searchbar";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoPlaySpeed:2000
    };
    return (
      <div className="slider-container">
        <Slider {...settings} className="slider">
          <div>
            <img src="https://i.ibb.co/qxbPs4M/pexels-pixabay-280221.jpg" alt="" className="slider-img"/>
          </div>
          <div>
            <img src="https://i.ibb.co/FbfkCwv/pexels-daniel-frank-688835.jpg" alt="" className="slider-img" />
          </div>
          <div>
            <img src="https://i.ibb.co/GHF3jwC/pexels-curtis-adams-3935333.jpg" alt="" className="slider-img" />
          </div>
          <div>
            <img src="https://i.ibb.co/syt6sYM/pexels-david-mcbee-1486785.jpg" alt="" className="slider-img" />
          </div>
        </Slider>
         <div className="slide-search">
        <SearchBar/>
        </div>
      </div>
    );
  }
}
