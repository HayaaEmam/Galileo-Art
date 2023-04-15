import React, {Component} from 'react';
import "../CSS/style.css";
import ceo from "../images/ceo.jpg";

export class Contact extends Component {
    render(){
        return(
            <div>
            <div class="div--flex-space-bet div--two-items">
        <div class="div--child-item">
            <h1>Contact us.</h1>
            <br/>
            <br/>
            <p>At Galilio Art, we are dedicated to finding your perfect, fitting art piece for your personality,
                feelings, and mood.</p>
                <br/>
            <p>Feel free to contact us for a digital or printed custom painting at almost the same charge.</p>
            <br/>
            <p>Hope you have fun!</p>
            <br/>
            <p>Art Courtesy of The CEO.</p>
            <img src={ceo} alt="CEO's Piicture" class="img--ceo"/>
            <p>Email: hello.galileo.art@gmail.com </p>
            <p>Phone: +1 (216) 123-4567</p>
        </div>

        <div class="div--child-item">
            <form method="post">
                <label>Name *</label> <br/>
                <div class="div--flex-space-bet div--full-width ">
                <input type="text" name="f-name" placeholder="First Name" class="input--light-bg input--half-width"/>
                <input type="text" name="l-name" placeholder="Last Name" class="input--light-bg input--half-width"/>
                </div>
                <label>Email *</label> <br/>
                <input type="email" name="email" class="input--light-bg"/><br/>
                <label>Subject * </label><br/>
                <input type="text" name="subject" class="input--light-bg"/><br/>
                <label>Message *</label> <br/>
                <textarea name="message" class="input--light-bg"></textarea><br/>
                <input type="submit" class="btn--grey-italic btn--lookbook"/>
            </form>
        </div>
    </div>
    </div>
        )
    }
}