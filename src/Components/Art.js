import React, { Component } from 'react';
import yourFeelingsMatter from "../images/your-feelings-matter.jpg";
import hand from "../images/hand.jpg";
import "../CSS/style.css";
import { NavLink } from 'react-router-dom';


function Products() {
    const images = [];
    
    for (let i = 1; i <= 20; i++) {
      images.push(<img src={hand} className='div--product-item'/>);
    }
  
    return (
      <div>
        {images}
      </div>
    );
  }

export class Art extends Component {
    render() {
        return (
            
            <div>
                

                {/*  CAROSSEL START drag slides with mouse function  */}

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h1 className="text--centered">I love the stars too much to be afraid of the night.</h1>
                        <h4 className="text--centered">Galileo Galilei</h4>
                    </div>


                </div>
                {/*  CAROSSEL END  */}

                <br />
                <br />
                <p className="text--centered"><NavLink to="/"> All / </NavLink></p>


                {/*  PRODUCT LIST START missing backend code */}
                <div class="div--product-list">
                    <div class="div--product-item"></div>
                    <div class="div--product-item"></div>
                    <div class="div--product-item"></div>
                    <div class="div--product-item"></div>
                    <div class="div--product-item"></div>
                    <div class="div--product-item"></div>
                    <div class="div--product-item"></div>
                    <div class="div--product-item"></div>
                    <div class="div--product-item"></div>
                    <div class="div--product-item"></div>
                    <div class="div--product-item"></div>
                    <div class="div--product-item"></div>
                    <div class="div--product-item"></div>
                    <div class="div--product-item"></div>
                    <div class="div--product-item"></div>
                    <div class="div--product-item"></div>
                </div>
                {/*  PRODUCT LIST END  */}


                {/*  ORDER CUSTOM START  */}
                <div className="div--vertical-centered">
                    <NavLink to="/custom">
                        <button className="btn--grey-italic"> ORDER<br />CUSTOM</button>
                    </NavLink>
                    <h1 className="h1--coming-soon">COMING SOON! 🥰</h1>
                    <p className="p--grey-undline">Have your painting whether stock or custom printed and shipped.</p>
                </div>

                <hr className="hr--seperator" />

                <div className="div--vertical-centered">
                    <img src={yourFeelingsMatter} alt="Your feeling Matter!" className="img--your-feelings-matter" />
                    <p className="p--big text--centered">
                        We are dedicated to finding your perfect fit painting. Our custom-painted digital art will be personally
                        hand-crafted at your request based on your mood, feelings, and day. Take this as a chance to be your true
                        self without masks or hiding. Here, it is just you, a screen, and a keyboard. Open up, be yourself and get a
                        painting that reflects your true self. Something that says," Hey, that's me!". Something that when strangers
                        see, they say, "Oh, that's a nice painting." But deep down, you'll think, "Huh, they have no idea what that
                        is.."
                    </p>
                    <div className="p--big div--your-feelings-matter">
                        “Sometimes your best feelings are found in the words you type and never send.”
                    </div>
                    <NavLink to="/custom">
                        <button className="btn--grey-italic">
                            EXPLORE<br />CUSTOM<br />PAINTINGS
                        </button>
                    </NavLink>
                </div>
                {/*  ORDER CUSTOM END  */}


                <hr className="hr--seperator" />
            </div>
        )
    }
}