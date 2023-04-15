import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import "../CSS/style.css";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";

export class Footer extends Component {
    render(){
        return(
            <div className="div--vertical-centered">
        <NavLink to="/lookbook">
            <button className="btn--grey-italic btn--lookbook">Lookbook</button>
        </NavLink>
        <div className="div--social-media div--flex-space-bet">
            <a href="https://www.instagram.com/gallilio.art/" target="_blank"><img src={instagram}
                    alt="Instagram account link" className="img--social-media img--social-media-footer"/></a>
            <a href="https://twitter.com/home" target="_blank"><img src={twitter}
                    alt="Twitter account link" className="img--social-media img--social-media-footer"/></a>
        </div>
        <div className="text--centered p--grey-bg div--slogan-margin">
            <p>Galileo Art, where your feelings are colorful.</p>
        </div>
    </div>
            )
        }
    }