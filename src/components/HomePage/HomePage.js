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
           
           <section  className="section section-search" style={{backgroundImage:`url("https://images.unsplash.com/photo-1462536943532-57a629f6cc60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80") !important;`}}>
				<div className="container" style={{maxWidth:"95%", width:"100%",boxShadow:"none",background:"transparent"}}>
					<div className="banner-wrapper m-auto text-center">
						<div className="banner-header">
							
							<h1>The Portal <br/>of the <span>students</span>, by the <span>students</span> <br/>for the <span>students</span></h1>
							<p style={{marginTop:"30px", color:"#f4eaff"}}>SuccessOverFLOW aims at holistic development of student community</p>
						</div>
                         
						{/* <div className="view-all text-center"><a style={{color:"white"}} className="btn btn-primary">Get Access Now !!!</a></div> */}
					
						
					</div>
				</div>
			</section>


            {/* ------------------------------------------------------------------------  */}

            <section className="section popular-courses">
				<div className="container" style={{maxWidth:"95%", width:"100%",boxShadow:"none",background:"transparent"}}>
					<div className="section-header text-center w-100">
						<span>SuccessOverFLOW Goals</span>
						<h2 style={{color:"rgb(88 8 192)",marginTop:"4px"}}>Popular Mentors</h2>
						<p className="sub-title">Do you want to move on next step? Choose your most popular leaning mentors, it will help you to achieve your professional goals.</p>
					</div>
                </div>
               
       <div className='container' style={{width:"100%",maxWidth:"1200px",background:"transparent",boxShadow:"none",marginTop:"0px",paddingTop:"20px"}} >            
        <OwlCarousel items={4}  
          className="owl-theme"  
          loop  
          nav 
          margin={8} >  

				
                <div className="course-box">
                    <div className="product">
                        <div className="product-img">
                            <a href="profile.html">
                                <img className="img-fluid" alt="" src={u1} width="600" height="300" />
                            </a>
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href="profile.html">Sudheer Vamaraju</a></h3>
                            <div className="author-info">
                                <div className="author-name">
                                    Digital Marketer
                                </div>
                            </div>
                            <div className="rating" >
                               
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star"><AiOutlineStar /></i>
                                <span className="d-inline-block average-rating">4.4</span>
                            </div>
                            <div className="author-country">
                                <p className="mb-0"><i className="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Hyderabad, India.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="course-box">
                    <div className="product">
                        <div className="product-img">
                            <a href="profile.html">
                                <img className="img-fluid" alt="" src={u2} width="600" height="300" />
                            </a>
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href="profile.html">Rahul Joshi</a></h3>
                            <div className="author-info">
                                <div className="author-name">
                                    Business Development Expert
                                </div>
                            </div>
                            <div className="rating">						
                            <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star"><AiOutlineStar /></i>
                                <span className="d-inline-block average-rating">4.4</span>
                            </div>
                            <div className="author-country">
                                <p className="mb-0"><i className="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Mumbai, India.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="course-box">
                    <div className="product">
                        <div className="product-img">
                            <a href="profile.html">
                                <img className="img-fluid" alt="" src={u3} width="600" height="300" />
                            </a>
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href="profile.html">Krishna Teja</a></h3>
                            <div className="author-info">
                                <div className="author-name">
                                    ASP.NET,Computer Gaming
                                </div>
                            </div>
                            <div className="rating">						
                            <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star"><AiOutlineStar /></i>
                                <span className="d-inline-block average-rating">4.4</span>
                            </div>
                            <div className="author-country">
                                <p className="mb-0"><i className="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Bangalore, India.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="course-box">
                    <div className="product">
                        <div className="product-img">
                            <a href="profile.html">
                                <img className="img-fluid" alt="" src={u4} width="600" height="300" />
                            </a>
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href="profile.html">Hemanth kumar</a></h3>
                            <div className="author-info">
                                <div className="author-name">
                                    Computer Programming
                                </div>
                            </div>
                            <div className="rating">						
                            <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star"><AiOutlineStar /></i>
                                <span className="d-inline-block average-rating">4.4</span>
                            </div>
                            <div className="author-country">
                                <p className="mb-0"><i className="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Pune, India.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="course-box">
                    <div className="product">
                        <div className="product-img">
                            <a href="profile.html">
                                <img className="img-fluid" alt="" src={u0} width="600" height="300" />
                            </a>
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href="profile.html">Kiran Kumar</a></h3>
                            <div className="author-info">
                                <div className="author-name">
                                    Digital Marketer
                                </div>
                            </div>
                            <div className="rating">							
                            <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star"><AiOutlineStar /></i>
                                <span className="d-inline-block average-rating">4.4</span>
                            </div>
                            <div className="author-country">
                                <p className="mb-0"><i className="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Mangalore, India.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="course-box">
                    <div className="product">
                        <div className="product-img">
                            <a href="profile.html">
                                <img className="img-fluid" alt="" src={u6} width="600" height="300" />
                            </a>
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href="profile.html">Aditya Nukala</a></h3>
                            <div className="author-info">
                                <div className="author-name">
                                    UNIX,Calculus,Trigonometry
                                </div>
                            </div>
                            <div className="rating">						
                            <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star"><AiOutlineStar /></i>
                                <span className="d-inline-block average-rating">4.4</span>
                            </div>
                            <div className="author-country">
                                <p className="mb-0"><i className="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Chennai, India.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="course-box">
                    <div className="product">
                        <div className="product-img">
                            <a href="profile.html">
                                <img className="img-fluid" alt="" src={u7} width="600" height="300" />
                            </a>
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href="profile.html">Mohan Brahmi</a></h3>
                            <div className="author-info">
                                <div className="author-name">
                                    ASP.NET,Computer Gaming
                                </div>
                            </div>
                            <div className="rating">						
                            <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star"><AiOutlineStar /></i>
                                <span className="d-inline-block average-rating">4.4</span>
                            </div>
                            <div className="author-country">
                                <p className="mb-0"><i className="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Kochi, Hyderabad.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="course-box">
                    <div className="product">
                        <div className="product-img">
                            <a href="profile.html">
                                <img className="img-fluid" alt="" src={u15} width="600" height="300" />
                            </a>
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href="profile.html">Misty Lundy</a></h3>
                            <div className="author-info">
                                <div className="author-name">
                                    Computer Programming
                                </div>
                            </div>
                            <div className="rating">
                            <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star"><AiOutlineStar /></i>
                                <span className="d-inline-block average-rating">4.4</span>
                            </div>
                            <div className="author-country">
                                <p className="mb-0"><i className="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Paris, France</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="course-box">
                    <div className="product">
                        <div className="product-img">
                            <a href="profile.html">
                                <img className="img-fluid" alt="" src={u9} width="600" height="300" />
                            </a>
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href="profile.html">Vern Campbell</a></h3>
                            <div className="author-info">
                                <div className="author-name">
                                    Digital Marketer
                                </div>
                            </div>
                            <div className="rating">
                            <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star"><AiOutlineStar /></i>
                                <span className="d-inline-block average-rating">4.4</span>
                            </div>
                            <div className="author-country">
                                <p className="mb-0"><i className="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Paris, France</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="course-box">
                    <div className="product">
                        <div className="product-img">
                            <a href="profile.html">
                                <img className="img-fluid" alt="" src={u13} width="600" height="300" />
                            </a>
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href="profile.html">Jessica Fogarty</a></h3>
                            <div className="author-info">
                                <div className="author-name">
                                    UNIX,Calculus,Trigonometry
                                </div>
                            </div>
                            <div className="rating">
                            <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star"><AiOutlineStar /></i>
                                <span className="d-inline-block average-rating">4.4</span>
                            </div>
                            <div className="author-country">
                                <p className="mb-0"><i className="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Paris, France</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="course-box">
                    <div className="product">
                        <div className="product-img">
                            <a href="profile.html">
                                <img className="img-fluid" alt="" src={u11} width="600" height="300"/>
                            </a>
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href="profile.html">Evelyn Stafford</a></h3>
                            <div className="author-info">
                                <div className="author-name">
                                    ASP.NET,Computer Gaming
                                </div>
                            </div>
                            <div className="rating">
                            <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star"><AiOutlineStar /></i>
                                <span className="d-inline-block average-rating">4.4</span>
                            </div>
                            <div className="author-country">
                                <p className="mb-0"><i className="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Paris, France</p>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="course-box">
                    <div className="product">
                        <div className="product-img">
                            <a href="profile.html">
                                <img className="img-fluid" alt="" src={u12} width="600" height="300"/>
                            </a>
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href="profile.html">Christopher Carroll</a></h3>
                            <div className="author-info">
                                <div className="author-name">
                                    Computer Programming
                                </div>
                            </div>
                            <div className="rating">
                            <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star filled"><AiFillStar/></i>
                                <i className="fas fa-star"><AiOutlineStar /></i>
                                <span className="d-inline-block average-rating">4.4</span>
                            </div>
                            <div className="author-country">
                                <p className="mb-0"><i className="fas fa-map-marker-alt"><FaMapMarkerAlt/></i> Paris, France</p>
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
