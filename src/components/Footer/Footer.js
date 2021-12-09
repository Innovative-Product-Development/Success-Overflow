import React from 'react';
import {FaQuora, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMediumM} from 'react-icons/fa'
import "./Footer.css"

const Footer = () => {
    return (
        <footer class="footer">
				
        {/* <!-- Footer Top --> */}
        <div class="footer-top">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                    
                        {/* <!-- Footer Widget --> */}
                        <div class="footer-widget footer-about">
                            <div class="footer-logo">
                                <h4>SuccessOverFLOW</h4>
                            </div>
                            <div class="footer-about-content">
                                <p>Our solution can address on your on-the job challenges at various phases of projects including Design, Reviews, debugging , troubleshooting , hot fixes and quick project needs. </p>
                                <div class="social-icon">
                                    <ul>
                                   
                                    {/* <span className = "socials"> <a href = 'https://www.facebook.com/ekode.crux/'><AiFillFacebook/></a>
        <a href = 'https://www.instagram.com/ekodecrux/'><AiFillInstagram/> </a>
        <a href = 'https://twitter.com/ekodecrux/'><AiFillTwitterSquare/></a> 
        <a href = 'https://www.linkedin.com/in/ekode-crux-a59694208/'><AiFillLinkedin/></a> 
        <a href = 'https://www.quora.com/profile/Ekode-Crux'><FaQuora/></a> 
        <a href = 'https://medium.com/@ekodecrux'><AiFillMediumSquare/></a></span> */}
                                        <li>
                                        <a href = 'https://www.facebook.com/ekode.crux/'><FaFacebookF/></a>
                                        </li>
                                        <li>
                                        <a href = 'https://twitter.com/ekodecrux/'><FaTwitter/></a>
                                        </li>
                                        <li>
                                        <a href = 'https://www.linkedin.com/in/ekode-crux-a59694208/'><FaLinkedinIn/></a> 
                                        </li>
                                        <li>
                                        <a href = 'https://www.instagram.com/ekodecrux/'><FaInstagram/> </a>
                                        </li>
                                        <li>
                                        <a href = 'https://www.quora.com/profile/Ekode-Crux'><FaQuora/></a> 
                                        </li>
                                        <li>
                                        <a href = 'https://medium.com/@ekodecrux'><FaMediumM/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Footer Widget --> */}
                        
                    </div>
                    
                    <div class="col-lg-3 col-md-6">
                    
                        {/* <!-- Footer Widget --> */}
                        <div class="footer-widget footer-menu">
                            <h2 class="footer-title">For Mentee</h2>
                            <ul>
                                <li><a href="/">Search Mentors</a></li>
                                <li><a href="/login">Login</a></li>
                                {/* <li><a onClick={this.handleSignup} href="#">Register</a></li> */}
                                <li><a href="/">Booking</a></li>
                                <li><a href="/">Mentee Dashboard</a></li>
                            </ul>
                        </div>
                        {/* <!-- /Footer Widget --> */}
                        
                    </div>
                    
                    <div class="col-lg-3 col-md-6">
                    
                        {/* <!-- Footer Widget --> */}
                        <div class="footer-widget footer-menu">
                            <h2 class="footer-title">For Mentors</h2>
                            <ul>
                                <li><a href="/">Appointments</a></li>
                                <li><a href="/">Chat</a></li>
                                <li><a href="/">Login</a></li>
                                <li><a href="/">Register</a></li>
                                <li><a href="/">Mentor Dashboard</a></li>
                            </ul>
                        </div>
                        {/* <!-- /Footer Widget --> */}
                        
                    </div>
                    
                    <div class="col-lg-3 col-md-6">
                    
                        {/* <!-- Footer Widget --> */}
                        <div class="footer-widget footer-contact">
                            <h2 class="footer-title">Contact Us</h2>
                            <div class="footer-contact-info">
                                <div class="footer-address">
                                    <span><i class="fas fa-map-marker-alt"></i></span>
                                    <p> Expert aid technologies private limited Plot-44, Beeramguda, Hyderabad -502032 </p>
                                </div>
                                <p>
                                    <i class="fas fa-phone-alt"></i>
                                    +1 95730 17223
                                </p>
                                <p class="mb-0">
                                    <i class="fas fa-envelope"></i>
                                    support@SuccessOverFLOW.com
                                </p>
                            </div>
                        </div>
                        {/* <!-- /Footer Widget --> */}
                        
                    </div>
                    
                </div>
            </div>
        </div>
        {/* <!-- /Footer Top --> */}
        
        {/* <!-- Footer Bottom --> */}
        <div class="footer-bottom">
            <div class="container-fluid">
            
                {/* <!-- Copyright --> */}
                <div class="copyright">
                    <div class="row">
                        <div class="col-12 text-center">
                            <div class="copyright-text">
                                <p class="mb-0">&copy; 2021 SuccessOverFLOW. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /Copyright --> */}
                
            </div>
        </div>
        {/* <!-- /Footer Bottom --> */}
        
    </footer>
    );
};

export default Footer;