import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../Courses/Courses.css';
import {NavLink} from 'react-router-dom'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

export default class CustomArrows extends Component {
    web_dev = () => {
        window.location.href="/courses/web_dev"
      }


    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
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
                                    <div onClick={()=>this.web_dev()} class="card card123" style={{ width: "20rem" }}>
                                        <img className="image1" src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Web Development</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img className="image1" src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Web Development</div>
                                        </div>
                                    </div>
                                </div> <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img className="image1" src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Web Development</div>
                                        </div>
                                    </div>
                                </div> <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img className="image1" src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Web Development</div>
                                        </div>
                                    </div>
                                </div> <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img className="image1" src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Web Development</div>
                                        </div>
                                    </div>
                                </div> <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img className="image1" src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Web Development</div>
                                        </div>
                                    </div>
                                </div> <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img className="image1" src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Web Development</div>
                                        </div>
                                    </div>
                                </div> <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img className="image1" src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Web Development</div>
                                        </div>
                                    </div>
                                </div> <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img className="image1" src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Web Development</div>
                                        </div>
                                    </div>
                                </div> <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img className="image1" src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Web Development</div>
                                        </div>
                                    </div>
                                </div> <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img className="image1" src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Web Development</div>
                                        </div>
                                    </div>
                                </div> <div className="col-3 mb-5">
                                    <div class="card card123" style={{ width: "20rem" }}>
                                        <img className="image1" src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                        <div class="overlay12">
                                            <div class="text123">Web Development</div>
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
