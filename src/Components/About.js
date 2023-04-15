import React, {Component} from 'react';
import "../CSS/style.css";
import img1 from "../images/img1.jpg";
export class About extends Component {
    render(){
        return(
            <div>
            <div className="div--flex-space-bet div--two-items">
        <span className="div--child-item">
            <img src={img1} alt="Colorful drawing on an ipad" className="img--fitted"/>
            <p className="p--caption">Handmade with passion on Procreate.</p>
        </span>
        <span className="div--child-item">
            <p>
                We are breaking the language and emotional barrier. Through the years, paintings have proven to be the
                most potent form of description. Our paintings are none like others, and we feel the emotions of our
                subjects and deeply immerse ourselves in them for a richer, more accurate picture, delivering the entire
                experience through one commonly understood form of communication. Inspired worldwide, our store offers
                unique access to genuine pieces created from real-life experiences.
            </p>
            <br/>
            <p>
                Holding such a piece allows you to obtain a touch of someone else’s life experience and share the joy
                with strangers in a world that breaks all social barriers and connects us with the simplest form of
                communication… color.
            </p>
        </span>
    </div>

    <div>
        <p className="p--big text--centered p--grey-bg">
            At Galileo, we aim to build an emotional connection with our customers. Your painting is not just a splash of
            color or hours of digital art. Your painting accurately represents your feelings and how your mood and spirits
            are at your point in life. Our main focus is your mental health and how we can help tweak your day into a better
            one. We want to make a warm fuzzy mark on your life and would love to let that be your memory of us. Here you
            can feel safe, loved, and supported. A spot where you can open up and be yourself. 😊
        </p>
    </div>
    <div>
        <h1>
            BECOME AN ARTIST?
        </h1>
        <br/>
        <p>Interested in join our artists team?</p>
        <p>Email us at hello.galilieo.art@gmail.com . 😎</p>
        <p>Please make sure to attach include your name, phone number and a portfolio for your work and we will get back
            to you shortly.</p>
    </div>
    </div>
        )
    }
}