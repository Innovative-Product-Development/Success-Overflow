import React, { useState, useEffect } from 'react'
// import { useHistory, useParams } from 'react-router-dom';
import './SingleCourse.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import "../../../../node_modules/video-react/dist/video-react.css";
import ReactPlayer from 'react-player'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
// import { Player } from 'video-react';
// import poster from '../../../../src/assets/images/avatar.png';

//https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=40&playlistId=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB&key=AIzaSyBwGVGXLo-toCzGy930cRDWKBcYoIcMeZo

const SingleCourse = (props) => {

    const [singleCourse,setSingleCourse] = useState([]);
    const [vid,setVid] = useState("");
    // const [title,setTitle] = useState("");
    const [counter,setCounter] = useState(0)

    const watched = (vid) =>{
        if(localStorage.getItem("video_id")){
            if(JSON.parse(localStorage.getItem("video_id")).includes(vid)){
                return true
            }
        }
        return false
    }
    
    useEffect(()=>{
        fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=40&playlistId=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB&key=AIzaSyBwGVGXLo-toCzGy930cRDWKBcYoIcMeZo')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const result = data.items.map(item=>{
               return {title:item.snippet.title,vid:item.contentDetails.videoId}

            })
            setSingleCourse(result);
            setVid(result.vid);
            // setTitle(result.title)
        })

    },[])

    const renderVideo= () =>{
        return(
            <div className="video-container">
                {/* <iframe width="1050" title="myFrame" height="450" src={"//www.youtube.com/embed/"+vid+"?rel=0"}  frameBorder="0" allowFullScreen></iframe> */}
                <ReactPlayer
                    className='react-player'
                    url={`https://www.youtube.com/watch?v=${vid}`}
                    width='1050px'
                    height='450px'
                    controls = {true}
                    playing={true}
                    onEnded={()=>{
                        if(localStorage.getItem("video_id")){
                            let data = JSON.parse(localStorage.getItem("video_id"))
                            localStorage.setItem("video_id",JSON.stringify([...data,vid]))
                        }else{
                            localStorage.setItem("video_id",JSON.stringify([vid]))
                        }
                    }}
        />
            </div>
        )
    }


    return (
        <>
        
        <div style={{display:'grid',gridTemplateColumns:'3fr 1fr'}}>
            <div className="main-screen">
            {renderVideo()}
            </div>
            <div className="video-sidebar">
                <ul className="sidebar-ul" style={{listStyle:'none'}}>
                {
                    singleCourse.map((item,index)=>{
                        return <li key={item.vid} className={counter===index? "video-collection myItem" : "video-collection"} onClick={()=>{
                            setVid(item.vid);
                            // setTitle(item.title);
                            setCounter(index);
                        }}>
                        
                        {
                            watched(item.vid) && <i className="fa fa-check checked" ></i>
                        }
                        {item.title}
                        
                        
                        </li>
                    })
                }
                </ul>
            </div>
        </div>

        <div className="nav-section">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#instructors">Instructors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#review">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#faq">FAQs</a>
                        </li>


                    </ul>
                </div>

                <div className="about-section" id="about">
                    <div className="about-content">
                        <h2 className="about-title">About This Course</h2>
                        <p className="about-para">This course will appeal to a wide variety of people, but specifically those who would like a step-by-step description of the basics. There are no prerequisites for this course and it is assumed that students have no prior programming skills or IT experience. The course will culminate in a small final project that will require the completion of a very simple page with links and images. The focus of this course is on the basics, not appearance. You can see a sample final page at <a href="http://intro-webdesign.com/html5-plain.html">http://intro-webdesign.com/html5-plain.html</a>.<br /><br /> This is the first course in the Web Design For Everybody specialization. Subsequent courses focus on the marketable skills of styling the page with CSS3, adding interactivity with JavaScript and enhancing the styling with responsive design. You can see a sample site for the capstone course at <a href="http://intro-webdesign.com/">http://intro-webdesign.com/</a></p>
                        <div className="skillset">
                            <h5>Skills You Will Gain</h5>
                            <div style={{ paddingTop: '1rem', paddingLeft: '1rem' }}>
                                <span className="badge rounded-pill bg-light text-dark">Web Design</span>
                                <span className="badge rounded-pill bg-light text-dark">Web Accessibilty</span>
                                <span className="badge rounded-pill bg-light text-dark">HTML</span>
                                <span className="badge rounded-pill bg-light text-dark">HTML5</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-right">
                        <div className="about-right-content">
                            <div className="course-perks">
                                <img alt="thumbnail" src="https://cdn.iconscout.com/icon/free/png-64/certificate-548-861750.png"></img>
                                <div className="perk">
                                    <h5>Shareable Certificate</h5>
                                    <p>Earn a Certificate upon completion</p>
                                </div>
                            </div>
                            <div className="course-perks">
                                <img alt="thumbnail" src="https://cdn.iconscout.com/icon/free/png-64/deadline-paper-3570296-3006226.png"></img>
                                <div className="perk">
                                    <h5>Flexible Deadlines</h5>
                                    <p>Reset deadlines in accordance to your schedule.</p>
                                </div>
                            </div>
                            <div className="course-perks">
                                <img alt="thumbnail" src="https://cdn.iconscout.com/icon/free/png-64/globe-globel-world-international-logistic-transport-travel-3-20457.png"></img>
                                <div className="perk">
                                    <h5>100% Online</h5>
                                    <p>Start instantly and learn at your own schedule.</p>
                                </div>
                            </div>
                            <div className="course-perks">
                                <img alt="thumbnail" src="https://cdn.iconscout.com/icon/free/png-64/notepad-2646573-2201003.png"></img>
                                <div className="perk">
                                    <h5>English</h5>
                                    <p>Subtitles: Arabic, French, German, Russian, English, Spanish</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="instructor-section" id="instructors">
                    <div className="instructor-part">
                        <div className="instructor-content">
                            <h4>Instructors</h4>
                            <p>Instructor rating <img alt="thumbnail" src="https://cdn.iconscout.com/icon/free/png-64/teacher-1812069-1537600.png"></img>&nbsp;4.8/5 (5200 ratings)</p>
                        </div>
                        <div className="instructor-info">
                            <img alt="thumbnail" src="https://yt3.ggpht.com/ytc/AKedOLT3EnMXtIOvDT4CL7obl0-acSZCBhMuapXBQFksVQ=s176-c-k-c0x00ffffff-no-rj-mo"></img>
                            <div style={{ paddingLeft: '3rem' }}>
                                <h4>Harry Bhai</h4>
                                <p>Lecturer | YouTuber</p>
                                <div className="more-info">
                                    <div className="side-info">
                                        <img alt="thumbnail" src="https://cdn.iconscout.com/icon/free/png-64/users-144-457814.png"></img>
                                        <p><b>46,578</b> learners</p>
                                    </div>
                                    <div className="side-info">
                                        <img alt="thumbnail" src="https://cdn.iconscout.com/icon/free/png-64/book-1169-433812.png"></img>
                                        <p><b>8</b> courses</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="review-section" id="review">
                    <div className="review-part">
                        <div className="review-content">
                            <h3>Reviews</h3>
                            <div className="review-part1">
                                <h1>4.8</h1>
                                <div className="review-part1-content">
                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <i className="fas fa-star"><AiOutlineStar /></i>
                                    <p>4220 reviews</p>
                                </div>

                            </div>

                            <div className="review-progress">
                                <div className="progress-content">
                                    <p>5 stars</p>
                                    <div className="progress">
                                        <div className="inner-progress"></div>
                                    </div>
                                    <p>83.8%</p>
                                </div>
                                <div className="progress-content">
                                    <p>4 stars</p>
                                    <div className="progress">
                                        <div className="inner-progress-1"></div>
                                    </div>
                                    <p>13.4%</p>
                                </div>
                                <div className="progress-content">
                                    <p>3 stars</p>
                                    <div className="progress">
                                        <div className="inner-progress-2"></div>
                                    </div>
                                    <p>02.1%</p>
                                </div>
                                <div className="progress-content">
                                    <p>2 stars</p>
                                    <div className="progress">
                                        <div className="inner-progress-3"></div>
                                    </div>
                                    <p>0.05%</p>
                                </div>
                                <div className="progress-content">
                                    <p>1 star</p>
                                    <div className="progress" style={{ marginLeft: '1.8rem' }}>
                                        <div className="inner-progress-4"></div>
                                    </div>
                                    <p>0.02%</p>
                                </div>

                            </div>
                        </div>

                        <div className="review-right-part">
                            <div className="review-right-content">
                                <h6>Top reviews from other learners</h6>
                                <div className="review-1">
                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <p>by Sam Walt &nbsp; 12 sep,2019</p>
                                    <p>I really enjoyed everything about this course. I thought the exercises/quizzes were fair and the instructor showed me many things that will serve me well going forward. Great course, great instructor!</p>
                                </div>
                                <div className="review-1">
                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <p>by Tom Hanks &nbsp; 25 Nov,2020</p>
                                    <p>Superb teaching and very easy to learn. I thought the exercises/quizzes were fair and the instructor showed me many things that will serve me well going forward.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
        
        </>
    )
}

export default SingleCourse
