import React, {Component} from 'react';
import hand from "../images/hand.jpg";
export class Careers extends Component {
    render(){
        return(
            <div class="div--flex-space-bet div--two-items">
        <div class="div--child-item">
            <img src={hand} alt="Hand Image" class="img--careers-hand"/>
        </div>
        <div class="div--child-item">
            <h1>
                JOIN THE TEAM
            </h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p>
                Painting is more than a theme and colors. Its encasing a life experience on a canvas. Join our team to
                and allow your art to touch the heart and minds of others.
            </p>
            <br/>
            <br/>
            <p>
                Email us at hello.galileo.art@gmail.com with the following information:
            </p>
            <br/>
            <ol>
                <li>Full Name</li>
                <li>Birthday</li>
                <li>Phone Number</li>
                <li>Preferred Email Address</li>
                <li>An Artwork Portfolio</li>
            </ol>
            <br/>
            <p>
                Good Luck and we’re looking forward to hearing from you soon!
            </p>
        </div>
    </div>
        )
    }
}