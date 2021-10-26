import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import '../Login/Login.css'
import logo1 from '../Images/login.svg'
import Header from '../Header/Header';




const Login = () => {
    return (
        <>
        <Header/>
            <div className="container">
                <input type="checkbox" id="flip" />
                <div className="cover">
                    <div className="front">
                      <img src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" alt=""/>
                        <div className="text">
                            <span className="text-1">Every new friend is a <br /> new adventure</span>
                            <span className="text-2">Let's get connected</span>
                        </div>
                    </div>
                    <div className="back">
                        <img className="backImg" src="https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537__340.jpg" alt=""/>
                        <div className="text">
                            <span className="text-1">Complete miles of journey <br /> with one step</span>
                            <span className="text-2">Let's get started</span>
                        </div>
                    </div>
                </div>
                <div className="forms">
                    <div className="form-content">
                        <div className="login-form">
                            <div className="title">Login</div>
                            <form action="#">
                                <div className="input-boxes">
                                    <div className="input-box">
                                        <i className="fa fa-envelope"></i>
                                        <input type="text" placeholder="Enter your email" required />
                                    </div>
                                    <div className="input-box">
                                        <i className="fa fa-lock"></i>
                                        <input type="password" placeholder="Enter your password" required />
                                    </div>
                                    <div className="text"><a href="#">Forgot password?</a></div>
                                    <div className="button input-box">
                                        <input type="submit" value="Submit" />
                                    </div>
                                    <div className="text sign-up-text">Don't have an account? <label for="flip">Sigup now</label></div>
                                </div>
                            </form>
                        </div>
                        <div className="signup-form">
                            <div className="title">Signup</div>
                            <form action="#">
                                <div className="input-boxes">
                                    <div className="input-box">
                                        <i className="fa fa-user"></i>
                                        <input type="text" placeholder="Enter your name" required />
                                    </div>
                                    <div className="input-box">
                                        <i className="fa fa-envelope"></i>
                                        <input type="text" placeholder="Enter your email" required />
                                    </div>
                                    <div className="input-box">
                                        <i className="fa fa-lock"></i>
                                        <input type="password" placeholder="Enter your password" required />
                                    </div>
                                    <div className="button input-box">
                                        <input type="submit" value="Submit" />
                                    </div>
                                    <div className="text sign-up-text">Already have an account? <label for="flip">Login now</label></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login



