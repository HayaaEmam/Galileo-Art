import React, { Component } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import "../CSS/style.css";
import logo from "../images/logo.jpg";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import cart from "../images/cart.png";

function login() {
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    document.getElementById('login').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
    document.getElementById('FP').style.display = 'none';
  
  }
  
  function FP() {
    document.getElementById('FP').style.display = 'block';
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'none';
  }
  
  function signup() {
    document.getElementById('signup').style.display = 'block';
    document.getElementById('FP').style.display = 'none';
    document.getElementById('login').style.display = 'none';
  }
  
  function closeWhiteBox() {
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('FP').style.display = 'none';
    document.getElementById('signup').style.display = 'none';
  }


export class Header extends Component {
    render() {
        return (
            <div className="heading div--flex-space-bet">

                {/*  NAV BAR START  */}
                <nav>
                    <ul>
                            <li><NavLink to="/" id="art">
                                Art
                            </NavLink></li>
                            <li><NavLink to="/lookbook" id="lookbook">
                                Lookbook
                            </NavLink></li>
                            <li><NavLink to="/about" id="about">
                                About
                            </NavLink></li>
                            <li><NavLink to="/contact" id="contact">
                                Contact
                            </NavLink></li>
                            <li><NavLink to="/custom" id="custom">
                                Custom
                            </NavLink></li>
                            <li><NavLink to="/careers" id="careers">
                                Careers
                            </NavLink></li>
                    </ul>
                </nav>
                {/*  NAV BAR END  */}


                {/*  CENTRAL LOGO START */}
                <div className="div--heading-genral">
                    <NavLink to="/">
                        <img src={logo} alt="Galileo Art Logo" className="img--fitted" />
                    </NavLink>
                </div>
                {/*  CENTRAL LOGO END  */}


                {/*  LOGIN, CART AND SOCIAL MEDIA START  */}
                <div className="div--heading-genral div--lcsm">
                    <a href="javascript:void(0)" onClick={login} className="login">Login</a>

                    <div id="light" className="white_content">
                    {/*  LOGIN  */}
                        <div id="login" className="element--invisible">
                            <h1 className="text--centered" id="loginTitle">Welcome to Galilieo</h1>
                            <form action="" method="post">
                                <input type="email" name="email" placeholder="Email" className="input--login" />
                                <input type="password" name="password" placeholder="Password" className="input--login" id="loginPassword" />
                                <input type="submit" value="Sign In" className="input--login submit--form text--centered" id="loginButton" />
                            </form>
                            <a href="javascript:void(0)" onClick={FP} className="login">Forgot password?</a>
                            <a href="javascript:void(0)" onClick={signup} className="login">Create Account</a>
                        </div>

                        {/*  FORGOT PASSWORD  */}
                        <div id="FP" className="element--invisible">
                            <h1 className="text--centered" id="FPTitle">Reset Password</h1>
                            <form action="" method="post">
                                <input type="email" name="email" placeholder="Email" className="input--login" />
                                <input type="submit" value="Send Reset Link" className="input--login submit--form text--centered" id="FPButton" />
                            </form>
                            <a href="javascript:void(0)" onClick={login} className="login">Already have an Account?</a>
                            <a href="javascript:void(0)" onClick={signup} className="login">Create Account</a>
                        </div>

                        {/*  SIGNUP  */}
                        <div id="signup" className="element--invisible">
                            <h1 className="text--centered" id="signupTitle">Create Account</h1>
                            <form action="" method="post" id="signupForm">
                                <input type="text" name="firstName" placeholder="First Name" className="input--login input--half-width" />
                                <input type="text" name="lastName" placeholder="Last Name" className="input--login input--half-width" />
                                <input type="email" name="email" placeholder="Email" className="input--login" />
                                <input type="password" name="password" placeholder="Password" className="input--login" id="loginPassword" />
                                <input type="submit" value="Sign Up" className="input--login submit--form text--centered" id="loginButton" />
                            </form>
                            <a href="javascript:void(0)" onClick={login} className="login">Already have an Account?</a>
                        </div>
                    </div>


                    <a href="javascript:void(0)" onClick={closeWhiteBox}>
                        <div id="fade" className="black_overlay"></div>
                    </a>


                    <div className="div--social-media div--flex-space-bet">
                        <a href="https://www.instagram.com/gallilio.art/" target="_blank">
                            <img src={instagram} alt="Instagram account link" className="img--social-media" />
                        </a>
                        <a href="https://twitter.com/home" target="_blank">
                            <img src={twitter} alt="Twitter account link" className="img--social-media" />
                        </a>
                    </div>

                    <a href="cart.html">
                        <img src={cart} alt="Cart" className="img--cart" />
                    </a>
                </div>
                {/*  LOGIN, CART AND SOCIAL MEDIA END  */}
            </div>
        )
    }
}