import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import './CourseEnroll.css';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import logo2 from '../../Images/HTML_Flatline.svg'



const CourseEnroll = () => {

    // const {course_name} = useParams();

const date = new Date();
var month = date.getMonth().toString +1;
var day = date.getDate();
var newdate = month + day;

    return (
        <>
            <div className="singleCourse">
                <div className="upper-banner">
                    <div className="inner-banner">
                        <div className="inner-content">
                            <div className="content-left">
                                <p className="content-left-para">This course is a part of Front-End Developement</p>
                                <div className="content-left-title">
                                    <h1>HTML Tutorial For Beginners In Hindi </h1>
                                </div>
                                <div className="content-left-rating" >

                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <i className="fas fa-star"><AiOutlineStar /></i>
                                    <span className="d-inline-block average-rating" style={{ paddingLeft: '0.5rem', color: 'white' }}>4.4 &nbsp;60k ratings | <i className="fa fa-thumbs-up"></i>&nbsp;96%</span>
                                </div>
                                <div className="teacher-img">
                                    <div style={{display:'flex',alignItems:'center'}}>
                                    <img src="https://yt3.ggpht.com/ytc/AKedOLT3EnMXtIOvDT4CL7obl0-acSZCBhMuapXBQFksVQ=s176-c-k-c0x00ffffff-no-rj-mo"></img>
                                    <p style={{fontSize:'20px',paddingLeft:'1rem',paddingTop:'1rem'}}>Harry Bhai</p>
                                    </div>
                                </div>
                                <div className="enrollbutton" style={{paddingBottom:'1rem'}}>
                                    <button target="_blank" type="submit" className="enrollbtn">
                                        <div style={{padding:'0.8rem'}}>
                                            <div style={{paddingBottom:'0.2rem',fontWeight:'600'}}>Enroll For Free</div>
                                            <div>Starts <span style={{fontWeight:'800',color:'white'}}>{date.toDateString()}</span></div>
                                        </div>
                                    </button>
                                </div>
                                <div>
                                    <p style={{color:'white',fontSize:'18px'}}><span style={{color:'white',fontWeight:'800'}}>60,000 </span>&nbsp;already Enrolled</p>
                                </div>
                            </div>
                            <div className="content-right">
                                <div style={{display:'flex',justifyContent:'center',alignItems:'center',paddingLeft:'10rem',paddingTop:'3rem'}}>
                                    <img src={logo2} style={{height:'400px',width:'500px'}}></img>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default CourseEnroll
