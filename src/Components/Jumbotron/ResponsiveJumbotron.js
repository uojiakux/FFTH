import React, { Component } from 'react';
import firstimage from '../../images/opener-picture.jpg';
import secondimage from '../../images/second-picture.jpg';
import thirdimage from '../../images/third-picture.jpg';

class ResponsiveJumbotron extends Component {

    render() {
      return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={firstimage} class="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
            <img src={secondimage} class="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
            <img src={thirdimage} className="d-block w-100" alt="..." />
            </div>
        </div>
        </div>
      )
    }
  }
  
  
  export default ResponsiveJumbotron;