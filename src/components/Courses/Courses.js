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
                            <img src="https://github.com/PN110301/CodeologyBootstrap/blob/main/3.jpg?raw=true" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Welcome Coders</h3>
                                <p>Innovations,Technology and Learning.</p>
                                <button className="btn btn-primary">Technology</button>
                                <button className="btn btn-danger">Innovation</button>
                                <button className="btn btn-success">Learning</button>
                            </div>
                        </div>
                        <div className="carousel-item">
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
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


                <div className="course-section">
                    <div className="slider-1">
                        <h2 className="course-heading">Web Development</h2>
                        <Slider {...settings}>
                            <div>
                                <div class="card" style={{ width: "28rem" }}>
                                    <img src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Complete A-Z Web Development</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        {/* <NavLink to="#" className="btn btn-primary">Go To Course</NavLink> */}
                                        <div className='course-details'>
                                            <p className='course-duration'>Duration 8 weeks</p>
                                            <NavLink to="#" className='course-link'>Go To Course</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: "28rem" }}>
                                    <img src="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507__340.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Artificial Intelligence</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        {/* <NavLink to="#" className="btn btn-primary">Go To Course</NavLink> */}
                                        <div className='course-details'>
                                            <p className='course-duration'>Duration 8 weeks</p>
                                            <NavLink to="#" className='course-link'>Go To Course</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="card" style={{ width: "28rem" }}>
                                    <img src="https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737__340.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Ultimate FrontEnd Development</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        {/* <NavLink to="#" className="btn btn-primary">Go To Course</NavLink> */}
                                        <div className='course-details'>
                                            <p className='course-duration'>Duration 8 weeks</p>
                                            <NavLink to="#" className='course-link'>Go To Course</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: "28rem" }}>
                                    <img src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        {/* <NavLink to="#" className="btn btn-primary">Go To Course</NavLink> */}
                                        <div className='course-details'>
                                            <p className='course-duration'>Duration 8 weeks</p>
                                            <NavLink to="#" className='course-link'>Go To Course</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: "28rem" }}>
                                    <img src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        {/* <NavLink to="#" className="btn btn-primary">Go To Course</NavLink> */}
                                        <div className='course-details'>
                                            <p className='course-duration'>Duration 8 weeks</p>
                                            <NavLink to="#" className='course-link'>Go To Course</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: "28rem" }}>
                                    <img src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        {/* <NavLink to="#" className="btn btn-primary">Go To Course</NavLink> */}
                                        <div className='course-details'>
                                            <p className='course-duration'>Duration 8 weeks</p>
                                            <NavLink to="#" className='course-link'>Go To Course</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>


                    <div className="slider-2">
                        <h2 className="course-heading">Business & Management</h2>
                        <Slider {...settings}>
                            <div>
                                <div class="card" style={{ width: "28rem" }}>
                                    <img src="https://cdn.pixabay.com/photo/2017/05/14/03/45/gui-2311261__340.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Advanced Excel</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        {/* <NavLink to="#" className="btn btn-primary">Go To Course</NavLink> */}
                                        <div className='course-details'>
                                            <p className='course-duration'>Duration 8 weeks</p>
                                            <NavLink to="#" className='course-link'>Go To Course</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: "28rem" }}>
                                    <img src="https://cdn.pixabay.com/photo/2019/04/07/23/11/search-engine-optimization-4111000__340.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Digital Marketing</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        {/* <NavLink to="#" className="btn btn-primary">Go To Course</NavLink> */}
                                        <div className='course-details'>
                                            <p className='course-duration'>Duration 8 weeks</p>
                                            <NavLink to="#" className='course-link'>Go To Course</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="card" style={{ width: "28rem" }}>
                                    <img src="https://cdn.pixabay.com/photo/2015/09/05/22/46/business-925900__340.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Financial Modelling & Valuation</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        {/* <NavLink to="#" className="btn btn-primary">Go To Course</NavLink> */}
                                        <div className='course-details'>
                                            <p className='course-duration'>Duration 8 weeks</p>
                                            <NavLink to="#" className='course-link'>Go To Course</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: "28rem" }}>
                                    <img src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        {/* <NavLink to="#" className="btn btn-primary">Go To Course</NavLink> */}
                                        <div className='course-details'>
                                            <p className='course-duration'>Duration 8 weeks</p>
                                            <NavLink to="#" className='course-link'>Go To Course</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: "28rem" }}>
                                    <img src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        {/* <NavLink to="#" className="btn btn-primary">Go To Course</NavLink> */}
                                        <div className='course-details'>
                                            <p className='course-duration'>Duration 8 weeks</p>
                                            <NavLink to="#" className='course-link'>Go To Course</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: "28rem" }}>
                                    <img src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        {/* <NavLink to="#" className="btn btn-primary">Go To Course</NavLink> */}
                                        <div className='course-details'>
                                            <p className='course-duration'>Duration 8 weeks</p>
                                            <NavLink to="#" className='course-link'>Go To Course</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>



                    <div className="slider-3">
                        <h2 className="course-heading">Creative Arts</h2>
                        <Slider {...settings}>
                            <div>
                                <div class="card" style={{ width: "28rem" }}>
                                    <img src="https://cdn.pixabay.com/photo/2018/04/07/08/28/coffee-3297995__340.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Creative Writing</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        {/* <NavLink to="#" className="btn btn-primary">Go To Course</NavLink> */}
                                        <div className='course-details'>
                                            <p className='course-duration'>Duration 8 weeks</p>
                                            <NavLink to="#" className='course-link'>Go To Course</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: "28rem" }}>
                                    <img src="https://cdn.pixabay.com/photo/2020/05/01/14/15/music-sheet-5117328__340.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Music</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        {/* <NavLink to="#" className="btn btn-primary">Go To Course</NavLink> */}
                                        <div className='course-details'>
                                            <p className='course-duration'>Duration 6 weeks</p>
                                            <NavLink to="#" className='course-link'>Go To Course</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="card" style={{ width: "28rem" }}>
                                    <img src="https://cdn.pixabay.com/photo/2014/12/27/15/31/camera-581126__340.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Photography</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        {/* <NavLink to="#" className="btn btn-primary">Go To Course</NavLink> */}
                                        <div className='course-details'>
                                            <p className='course-duration'>Duration 4 weeks</p>
                                            <NavLink to="#" className='course-link'>Go To Course</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: "28rem" }}>
                                    <img src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        {/* <NavLink to="#" className="btn btn-primary">Go To Course</NavLink> */}
                                        <div className='course-details'>
                                            <p className='course-duration'>Duration 8 weeks</p>
                                            <NavLink to="#" className='course-link'>Go To Course</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: "28rem" }}>
                                    <img src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        {/* <NavLink to="#" className="btn btn-primary">Go To Course</NavLink> */}
                                        <div className='course-details'>
                                            <p className='course-duration'>Duration 8 weeks</p>
                                            <NavLink to="#" className='course-link'>Go To Course</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: "28rem" }}>
                                    <img src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        {/* <NavLink to="#" className="btn btn-primary">Go To Course</NavLink> */}
                                        <div className='course-details'>
                                            <p className='course-duration'>Duration 8 weeks</p>
                                            <NavLink to="#" className='course-link'>Go To Course</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </>
        );
    }
}
