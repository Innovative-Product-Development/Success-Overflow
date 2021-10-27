import React, { useEffect } from 'react';

import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import '../Login/Login.css'





const Login = () => {
    
  
        
    
    return (
        <>
       
            <div className="container" style={{marginBottom:"140px"}}>
                <input type="checkbox" id="flip" />
                <div className="cover">
                    <div className="front">
                      <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
                        <div className="text">
                            <span className="text-1" style={{fontSize:"20px"}}>The best way to predict your future is to  <br /> create it </span>
                            <span className="text-2" style={{fontSize:"25px"}}>Let's get started</span>
                        </div>
                    </div>
                    <div className="back">
                        <img className="backImg" src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1373&q=80" alt=""/>
                        
                        <div className="text">
                            <span className="text-1" style={{fontSize:"30px", color:"white"}}>The place where<br/> talent<br/> meets<br /> opportunity</span>
                            {/* <span className="text-2" style={{fontSize:"25px", color:"#fff"}}>Let's get started</span> */}
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
                                    <div className="text"><a href="/">Forgot password?</a></div>
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



