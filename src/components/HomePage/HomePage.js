import React from 'react';
import "./HomePage.css"
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import {FaMapMarkerAlt} from 'react-icons/fa';
import dm from "../../assets/img/path-img1.jpg"
import ui from "../../assets/img/path-img2.jpg"
import it from "../../assets/img/path-img3.jpg"
import fd from "../../assets/img/path-img4.jpg"

import wd  from "../../assets/img/path-img5.jpg"
import ad  from "../../assets/img/path-img6.jpg"
import pm  from "../../assets/img/path-img7.jpg"
import pd  from "../../assets/img/path-img8.jpg"
import LOGO from "../../assets/img/logo.png"
import u0 from "../../assets/img/user/user.jpg"
import u1 from "../../assets/img/user/user1.jpg"
import u2 from "../../assets/img/user/user2.jpg"
import u3 from "../../assets/img/user/user3.jpg"
import u4 from "../../assets/img/user/user4.jpg"
// import u5 from "../../assets/img/user/user5.jpg"
import u6 from "../../assets/img/user/user6.jpg"
import u7 from "../../assets/img/user/user7.jpg"
import u8 from "../../assets/img/user/user8.jpg"
import u9 from "../../assets/img/user/user9.jpg"
import u10 from "../../assets/img/user/user10.jpg"
import u11 from "../../assets/img/user/user11.jpg"
import u12 from "../../assets/img/user/user12.jpg"
import u13 from "../../assets/img/user/user13.jpg"
import u14 from "../../assets/img/user/user14.jpg"
import u15 from "../../assets/img/user/user15.jpg"


const HomePage = () => {
    return (
        <div>
           
           <section  class="section section-search">
				<div class="container" style={{maxWidth:"95%", width:"100%",boxShadow:"none",background:"transparent"}}>
					<div class="banner-wrapper m-auto text-center">
						<div class="banner-header">
							
							<h1>The Portal <br/>of the <span>students</span>, by the <span>students</span> <br/>for the <span>students</span></h1>
							<p style={{marginTop:"30px", color:"#f4eaff"}}>SuccessOverFLOW aims at holistic development of student community</p>
						</div>
                         
						{/* <div class="view-all text-center"><a style={{color:"white"}} class="btn btn-primary">Get Access Now !!!</a></div> */}
					
						
					</div>
				</div>
			</section>


            {/* ------------------------------------------------------------------------  */}

            <section class="section popular-courses">
				<div class="container" style={{maxWidth:"95%", width:"100%",boxShadow:"none",background:"transparent"}}>
					<div class="section-header text-center w-100">
						<span>SuccessOverFLOW Goals</span>
						<h2 style={{color:"rgb(88 8 192)",marginTop:"4px"}}>Popular Mentors</h2>
						<p class="sub-title">Do you want to move on next step? Choose your most popular leaning mentors, it will help you to achieve your professional goals.</p>
					</div>
                </div>
               
       <div class='container' style={{width:"100%",maxWidth:"1200px",background:"transparent",boxShadow:"none",marginTop:"0px",paddingTop:"20px"}} >            
        <OwlCarousel items={4}  
          className="owl-theme"  
          loop  
          nav 
          margin={8} >  

				
                <div class="course-box">
                    <div class="product">
                        <div class="product-img">
                            <a href="profile.html">
                                <img class="img-fluid" alt="" src={u1} width="600" height="300" />
                            </a>
                        </div>
                        <div class="product-content">
                            <h3 class="title"><a href="profile.html">Sudheer Vamaraju</a></h3>
                            <div class="author-info">
                                <div class="author-name">
                                    Digital Marketer
                                </div>
                            </div>
                            <div class="rating" >
                               
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star"><AiOutlineStar /></i>
                                <span class="d-inline-block average-rating">4.4</span>
                            </div>
                            <div class="author-country">
                                <p class="mb-0"><i class="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Hyderabad, India.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="course-box">
                    <div class="product">
                        <div class="product-img">
                            <a href="profile.html">
                                <img class="img-fluid" alt="" src={u2} width="600" height="300" />
                            </a>
                        </div>
                        <div class="product-content">
                            <h3 class="title"><a href="profile.html">Rahul Joshi</a></h3>
                            <div class="author-info">
                                <div class="author-name">
                                    Business Development Expert
                                </div>
                            </div>
                            <div class="rating">						
                            <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star"><AiOutlineStar /></i>
                                <span class="d-inline-block average-rating">4.4</span>
                            </div>
                            <div class="author-country">
                                <p class="mb-0"><i class="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Mumbai, India.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="course-box">
                    <div class="product">
                        <div class="product-img">
                            <a href="profile.html">
                                <img class="img-fluid" alt="" src={u3} width="600" height="300" />
                            </a>
                        </div>
                        <div class="product-content">
                            <h3 class="title"><a href="profile.html">Krishna Teja</a></h3>
                            <div class="author-info">
                                <div class="author-name">
                                    ASP.NET,Computer Gaming
                                </div>
                            </div>
                            <div class="rating">						
                            <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star"><AiOutlineStar /></i>
                                <span class="d-inline-block average-rating">4.4</span>
                            </div>
                            <div class="author-country">
                                <p class="mb-0"><i class="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Bangalore, India.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="course-box">
                    <div class="product">
                        <div class="product-img">
                            <a href="profile.html">
                                <img class="img-fluid" alt="" src={u4} width="600" height="300" />
                            </a>
                        </div>
                        <div class="product-content">
                            <h3 class="title"><a href="profile.html">Hemanth kumar</a></h3>
                            <div class="author-info">
                                <div class="author-name">
                                    Computer Programming
                                </div>
                            </div>
                            <div class="rating">						
                            <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star"><AiOutlineStar /></i>
                                <span class="d-inline-block average-rating">4.4</span>
                            </div>
                            <div class="author-country">
                                <p class="mb-0"><i class="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Pune, India.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="course-box">
                    <div class="product">
                        <div class="product-img">
                            <a href="profile.html">
                                <img class="img-fluid" alt="" src={u0} width="600" height="300" />
                            </a>
                        </div>
                        <div class="product-content">
                            <h3 class="title"><a href="profile.html">Kiran Kumar</a></h3>
                            <div class="author-info">
                                <div class="author-name">
                                    Digital Marketer
                                </div>
                            </div>
                            <div class="rating">							
                            <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star"><AiOutlineStar /></i>
                                <span class="d-inline-block average-rating">4.4</span>
                            </div>
                            <div class="author-country">
                                <p class="mb-0"><i class="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Mangalore, India.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="course-box">
                    <div class="product">
                        <div class="product-img">
                            <a href="profile.html">
                                <img class="img-fluid" alt="" src={u6} width="600" height="300" />
                            </a>
                        </div>
                        <div class="product-content">
                            <h3 class="title"><a href="profile.html">Aditya Nukala</a></h3>
                            <div class="author-info">
                                <div class="author-name">
                                    UNIX,Calculus,Trigonometry
                                </div>
                            </div>
                            <div class="rating">						
                            <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star"><AiOutlineStar /></i>
                                <span class="d-inline-block average-rating">4.4</span>
                            </div>
                            <div class="author-country">
                                <p class="mb-0"><i class="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Chennai, India.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="course-box">
                    <div class="product">
                        <div class="product-img">
                            <a href="profile.html">
                                <img class="img-fluid" alt="" src={u7} width="600" height="300" />
                            </a>
                        </div>
                        <div class="product-content">
                            <h3 class="title"><a href="profile.html">Mohan Brahmi</a></h3>
                            <div class="author-info">
                                <div class="author-name">
                                    ASP.NET,Computer Gaming
                                </div>
                            </div>
                            <div class="rating">						
                            <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star"><AiOutlineStar /></i>
                                <span class="d-inline-block average-rating">4.4</span>
                            </div>
                            <div class="author-country">
                                <p class="mb-0"><i class="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Kochi, Hyderabad.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="course-box">
                    <div class="product">
                        <div class="product-img">
                            <a href="profile.html">
                                <img class="img-fluid" alt="" src={u15} width="600" height="300" />
                            </a>
                        </div>
                        <div class="product-content">
                            <h3 class="title"><a href="profile.html">Misty Lundy</a></h3>
                            <div class="author-info">
                                <div class="author-name">
                                    Computer Programming
                                </div>
                            </div>
                            <div class="rating">
                            <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star"><AiOutlineStar /></i>
                                <span class="d-inline-block average-rating">4.4</span>
                            </div>
                            <div class="author-country">
                                <p class="mb-0"><i class="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Paris, France</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="course-box">
                    <div class="product">
                        <div class="product-img">
                            <a href="profile.html">
                                <img class="img-fluid" alt="" src={u9} width="600" height="300" />
                            </a>
                        </div>
                        <div class="product-content">
                            <h3 class="title"><a href="profile.html">Vern Campbell</a></h3>
                            <div class="author-info">
                                <div class="author-name">
                                    Digital Marketer
                                </div>
                            </div>
                            <div class="rating">
                            <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star"><AiOutlineStar /></i>
                                <span class="d-inline-block average-rating">4.4</span>
                            </div>
                            <div class="author-country">
                                <p class="mb-0"><i class="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Paris, France</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="course-box">
                    <div class="product">
                        <div class="product-img">
                            <a href="profile.html">
                                <img class="img-fluid" alt="" src={u13} width="600" height="300" />
                            </a>
                        </div>
                        <div class="product-content">
                            <h3 class="title"><a href="profile.html">Jessica Fogarty</a></h3>
                            <div class="author-info">
                                <div class="author-name">
                                    UNIX,Calculus,Trigonometry
                                </div>
                            </div>
                            <div class="rating">
                            <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star"><AiOutlineStar /></i>
                                <span class="d-inline-block average-rating">4.4</span>
                            </div>
                            <div class="author-country">
                                <p class="mb-0"><i class="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Paris, France</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="course-box">
                    <div class="product">
                        <div class="product-img">
                            <a href="profile.html">
                                <img class="img-fluid" alt="" src={u11} width="600" height="300"/>
                            </a>
                        </div>
                        <div class="product-content">
                            <h3 class="title"><a href="profile.html">Evelyn Stafford</a></h3>
                            <div class="author-info">
                                <div class="author-name">
                                    ASP.NET,Computer Gaming
                                </div>
                            </div>
                            <div class="rating">
                            <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star"><AiOutlineStar /></i>
                                <span class="d-inline-block average-rating">4.4</span>
                            </div>
                            <div class="author-country">
                                <p class="mb-0"><i class="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Paris, France</p>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="course-box">
                    <div class="product">
                        <div class="product-img">
                            <a href="profile.html">
                                <img class="img-fluid" alt="" src={u12} width="600" height="300"/>
                            </a>
                        </div>
                        <div class="product-content">
                            <h3 class="title"><a href="profile.html">Christopher Carroll</a></h3>
                            <div class="author-info">
                                <div class="author-name">
                                    Computer Programming
                                </div>
                            </div>
                            <div class="rating">
                            <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star filled"><AiFillStar/></i>
                                <i class="fas fa-star"><AiOutlineStar /></i>
                                <span class="d-inline-block average-rating">4.4</span>
                            </div>
                            <div class="author-country">
                                <p class="mb-0"><i class="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Paris, France</p>
                            </div>
                        </div>
                    </div>
                </div> 
                </OwlCarousel>
                </div>
          
            </section>
        </div>
    )
}

export default HomePage
