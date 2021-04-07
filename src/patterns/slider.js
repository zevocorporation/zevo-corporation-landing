import React from 'react'

import Slider from 'react-slick';

//Importing slider css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//Importing styles
import '../styles/patterns/slider.css'

//Importing media assets
import slider1 from '../assets/cards/slider1.svg'

const SliderCard = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className="slider-container">
            <Slider {...settings}>
            <div>
                <div className="block">
                    <p className="secondary-text">
                       Lorem ipsum dolor sit amet, consectetur adipiscing 
                       elit. Condimentum vitae elit blandit massa, habitasse 
                       ornare. Penatibus eget volutpat facilisi cursus nunc, 
                       feugiat id at. Pelle
                    </p>
                    <div className="block-image">
                        <img src={slider1} alt="person" />
                    </div>
                </div>
                <p className="card-title">William Cole</p>
                <p>CEO, Infosys</p>
            </div>
            <div>
                <div className="block">
                    <p className="secondary-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                       elit. Condimentum vitae elit blandit massa, habitasse 
                       ornare. Penatibus eget volutpat facilisi cursus nunc, 
                       feugiat id at. Pelle
                    </p>
                    <div className="block-image">
                        <img src={slider1} alt="person" />
                    </div>
                </div>
                <p className="card-title">William Cole</p>
                <p>CEO, Infosys</p>
            </div>
            <div>
                <div className="block">
                    <p className="secondary-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                       elit. Condimentum vitae elit blandit massa, habitasse 
                       ornare. Penatibus eget volutpat facilisi cursus nunc, 
                       feugiat id at. Pelle
                    </p>
                    <div className="block-image">
                        <img src={slider1} alt="person" />
                    </div>
                </div>
                <p className="card-title">William Cole</p>
                <p>CEO, Infosys</p>
            </div>
            <div>
                <div className="block">
                    <p className="secondary-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                       elit. Condimentum vitae elit blandit massa, habitasse 
                       ornare. Penatibus eget volutpat facilisi cursus nunc, 
                       feugiat id at. Pelle
                    </p>
                    <div className="block-image">
                        <img src={slider1} alt="person" />
                    </div>
                </div>
                <p className="card-title">William Cole</p>
                <p>CEO, Infosys</p>
            </div>
            <div>
                <div className="block">
                    <p className="secondary-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                       elit. Condimentum vitae elit blandit massa, habitasse 
                       ornare. Penatibus eget volutpat facilisi cursus nunc, 
                       feugiat id at. Pelle
                    </p>
                    <div className="block-image">
                        <img src={slider1} alt="person" />
                    </div>
                </div>
                <p className="card-title">William Cole</p>
                <p>CEO, Infosys</p>
            </div>
            <div>
                <div className="block">
                    <p className="secondary-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                       elit. Condimentum vitae elit blandit massa, habitasse 
                       ornare. Penatibus eget volutpat facilisi cursus nunc, 
                       feugiat id at. Pelle
                    </p>
                    <div className="block-image">
                        <img src={slider1} alt="person" />
                    </div>
                </div>
                <p className="card-title">William Cole</p>
                <p>CEO, Infosys</p>
            </div>
            </Slider>
      </div>
    )
}

export default SliderCard
