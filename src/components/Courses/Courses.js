import React, { Component } from "react";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../Courses/Courses.css';
import {Link} from 'react-router-dom';



// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block" }}
//             onClick={onClick}
//         />
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block" }}
//             onClick={onClick}
//         />
//     );
// }

export default class CustomArrows extends Component {
    web_dev = () => {
        window.location.href="/courses/web_dev"
      }


    render() {
        // const settings = {
        //     dots: true,
        //     infinite: true,
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //     nextArrow: <SampleNextArrow />,
        //     prevArrow: <SamplePrevArrow />
        // };
        return (
            <>
                <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img style={{opacity:"1.5"}} src="https://github.com/PN110301/CodeologyBootstrap/blob/main/3.jpg?raw=true" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h3 style={{color:"#a662ff",fontWeight:"700",fontSize:"40px"}}>Welcome Learners</h3>
                                <p>Select the domain which you want to explore....</p>
                                <button className="btn btn-primary">Technology</button>
                                <button className="btn btn-danger">Innovation</button>
                                <button className="btn btn-success">Learning</button>
                            </div>
                        </div>
                        {/* <div className="carousel-item">
                            <img src="https://github.com/PN110301/CodeologyBootstrap/blob/main/2.jpg?raw=true" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Welcome Learners</h2>
                                <p>Development,Technology and Learning.</p>
                                <button className="btn btn-primary">Development</button>
                                <button className="btn btn-danger">Technology</button>
                                <button className="btn btn-success">Learning</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2018/04/21/15/21/meditation-3338691__340.jpg"  height='432px' className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Welcome Fitness Freaks</h2>
                                <p>Eat Sleep Mediate Repeat.</p>
                                <button className="btn btn-primary">Health</button>
                                <button className="btn btn-danger">Yoga</button>
                                <button className="btn btn-success">Meditate</button>
                            </div>
                        </div> */}
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
                </div>


                <div className="course-section">
                    <div className="slider-1">
                        
                        
                        {/* <Slider {...settings}> */}
                           <div className="container-fluid">
                               <div className="row">
                               <div className="col-3 mb-5">
                               <Link to="/courses/web_dev">
                                    <div  class="card card123" style={{ width: "20rem" }}>
                                        <img src="https://www.syncfusion.com/blogs/wp-content/uploads/2020/07/Top-6-Front-End-Web-Development-Tools-to-Increase-Your-Productivity-in-2020-1.jpg" className="image1 card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Web Development</div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                
                                <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img  src="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507__480.jpg" className=" image1 card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Artificial Intelligence</div>
                                        </div>
                                    </div>
                                </div> <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img  src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924__480.jpg" className="image1 card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Business Management</div>
                                        </div>
                                    </div>
                                </div> <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img  src="https://images.unsplash.com/photo-1635222654435-788144127d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29yZSUyMGVuZ2luZWVyaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="image1 card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Core Engineering</div>
                                        </div>
                                    </div>
                                </div> <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img  src="https://cdn.pixabay.com/photo/2014/08/22/15/27/facebook-424521__340.jpg" className=" image1 card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Social Media Marketing</div>
                                        </div>
                                    </div>
                                </div> <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img  src="https://rss.org.uk/RSS/media/News-and-publications/News/2021/journalism-composition900.jpg?ext=.jpg" className="image1 card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Jounalism</div>
                                        </div>
                                    </div>
                                </div> <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img  src="https://cdn.pixabay.com/photo/2020/04/24/10/56/music-5086395__340.png" className="image1 card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Music</div>
                                        </div>
                                    </div>
                                </div> <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img  src="https://cdn.pixabay.com/photo/2016/08/03/14/52/dance-1566852__340.jpg" className="image1 card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Dance</div>
                                        </div>
                                    </div>
                                </div> <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img  src="https://cdn.pixabay.com/photo/2016/11/23/00/37/art-1851483__340.jpg" className="image1 card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Creative Arts</div>
                                        </div>
                                    </div>
                                </div> <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img  src="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002__340.jpg" className="image1 card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Design</div>
                                        </div>
                                    </div>
                                </div> <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img  src="https://cdn.pixabay.com/photo/2018/03/14/12/41/paper-3225109__340.jpg" className="image1 card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Architecture</div>
                                        </div>
                                    </div>
                                </div> <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img  src="https://cdn.pixabay.com/photo/2017/07/10/23/49/club-2492011__340.jpg" className="image1 card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Law</div>
                                        </div>
                                    </div>
                                </div>
                               </div>
                           </div>
                        {/* </Slider> */}
                        
                    </div>
                    


                  
                </div>
            </>
        );
    }
}
