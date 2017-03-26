import React, {Component} from 'react';
import Slider from 'react-slick';
import {browserHistory} from 'react-router';

class Intro extends Component {
    render() {

        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false
        };

        return (
            <Slider {...settings}>
                <div><img src="./images/intro1.jpg" alt="" onClick={this.onClick}/></div>
                <div><img src="./images/intro2.jpg" alt="" onClick={this.onClick}/></div>
                <div><img src="./images/intro3.jpg" alt="" onClick={this.onClick}/></div>
                <div><img src="./images/intro4.jpg" alt="" onClick={this.onClick}/></div>
                <div><img src="./images/intro5.jpg" alt="" onClick={this.onClick}/></div>
                <div><img src="./images/intro6.jpg" alt="" onClick={this.onClick}/></div>
            </Slider>
        )
    }

    onClick() {
        browserHistory.push('/home');
    }
}

export default Intro;

