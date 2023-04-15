import React, {Component} from 'react';
import yourFeelingsMatter from "../images/your-feelings-matter.jpg";
import custombg from "../images/custom-bg.jpg";
export class Custom extends Component {
    render(){
        return(
        <div>
            <div class="div--vertical-centered">
                <img src={yourFeelingsMatter} alt="Your feeling Matter!" class="img--your-feelings-matter"/>
                <p class="p--big text--centered">
                    We are dedicated to finding your perfect fit painting. Our custom-painted digital art will be personally
                    hand-crafted at your request based on your mood, feelings, and day. Take this as a chance to be your true
                    self without masks or hiding. Here, it is just you, a screen, and a keyboard. Open up, be yourself and get a
                    painting that reflects your true self. Something that says," Hey, that's me!". Something that when strangers
                    see, they say, "Oh, that's a nice painting." But deep down, you'll think, "Huh, they have no idea what that
                    is.."
                </p>
                <div class="p--big div--your-feelings-matter">
                    “Sometimes your best feelings are found in the words you type and never send.”
                </div>
            </div>

            <div class="div--custom-form" >
                <h1 class="text--centered">Order your Custom Painting</h1>
                <form action="" >
                    <label>How are you feeling right this second? Be honest. *</label><br/>
                    <input type="text" name="feel" class="input--light-bg"/><br/>
                    <label>Describe how do you want your painting to feel like?*</label><br/>
                    <textarea name="message" class="input--light-bg"></textarea><br/>
                    <label>Printing Format *</label><br/>
                    <select name="format" class="input--light-bg">
                        <option id="digital">Digital</option>
                        <option value="Printed and shipped"> Printed and shipped</option>
                    </select><br/>
                    <input type="submit" value="Request"  class="btn--grey-italic btn--lookbook"/>
                </form>
            </div>

        </div>
        )
    }
}