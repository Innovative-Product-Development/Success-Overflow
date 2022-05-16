import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import './CourseEnroll.css';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import logo2 from '../../Images/HTML_Flatline.svg'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { getEndPoint, postEndPoint } from '../../../request/request'
import { useSelector, useDispatch } from "react-redux"
import {  setAuth } from '../../../store/authSlice'





const CourseEnroll = (props) => {

    const [course, setCourse] = useState({})
    const [isEnrolled, setIsEnrolled] = useState(false)

    const { isAuth, token, user, isStudent } = useSelector((state)=>state.auth)
    const history = useHistory();
    const dispatch = useDispatch();

    const gotocourse = async () => {
        history.push(`/singlecourse/${course._id}`)
    }

    const enrollCourse = async () => {
        if(!isAuth || token == ''){
            history.push('/login')
        }
        try {
            const response2 = await postEndPoint(`/course/enrollCourse/${course._id}`,null);
            if (response2) {
                if (response2.status === 200) {
                    console.log(response2.data.data)
                    dispatch(setAuth({ user: response2.data.data}))
                    setIsEnrolled(true)
                }
            }
        }
        catch (err) {
            console.log(err)         
        }
      

    }

    useEffect(()=>{
        if(isAuth && token != ''){
            if(user.courses_enrolled.includes(props.match.params.courseId)){
                setIsEnrolled(true)
            }else{
                setIsEnrolled(false)
            }
        }
    },[])

   
    useEffect( async ()=>{
        console.log("hwhhwhw",props.match.params.courseId)
        try {
            const response2 = await getEndPoint(`/course/${props.match.params.courseId}`,null);
            if (response2) {
                if (response2.status === 200) {
                    console.log(response2.data)
                    setCourse(response2.data)    
                }
            }
        }
        catch (err) {
            console.log(err)         
        }      
    },[])

    const date = new Date();
    
    function getEnrolled(){
        window.location.href = '/singlecourse';
    }

    return (
        <>
            {
                course && course.courseCreator && <div className="singleCourse">
                <div className="upper-banner">
                    <div className="inner-banner">
                        <div className="inner-content">
                            <div className="content-left">
                                <p className="content-left-para">This course is a part of Front-End Developement</p>
                                <div className="content-left-title">
                                    <h1>{course.course_name}</h1>
                                </div>
                                <div className="content-left-rating" >

                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <i className="fas fa-star filled"><AiFillStar /></i>
                                    <i className="fas fa-star"><AiOutlineStar /></i>
                                    <span className="d-inline-block average-rating" style={{ paddingLeft: '0.5rem', color: 'black' }}>4.4 &nbsp;60k ratings | <i className="fa fa-thumbs-up"></i>&nbsp;96%</span>
                                </div>
                                <div className="teacher-img">
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img alt="thumbnail" src={course.courseCreator.profilePic}></img>
                                        <p style={{ fontSize: '20px', paddingLeft: '1rem', paddingTop: '1rem', fontWeight: '600' }}>{course.courseCreator.name}</p>
                                    </div>
                                </div>
                                <div className="enrollbutton" style={{ paddingBottom: '1rem' }}>
                                    {
                                        isEnrolled ?
                                        <button target="_blank" type="submit" className="enrollbtn" onClick={()=>gotocourse()}>
                                            <div style={{ padding: '0.2rem' }}>
                                                <div style={{ paddingBottom: '0.2rem', fontWeight: '600', color: 'white' }}>Go to course</div>
                                               
                                            </div>
                                        </button> :
                                         <button target="_blank" type="submit" className="enrollbtn" onClick={()=>enrollCourse()}>
                                            <div style={{ padding: '0.2rem' }}>
                                                <div style={{ paddingBottom: '0.2rem', fontWeight: '600', color: 'white' }}>Enroll For Free</div>
                                                
                                            </div>
                                        </button>
                                    }
                                   
                                </div>
                                <div>
                                    <p style={{ color: 'black', fontSize: '18px' }}><span style={{ color: 'black', fontWeight: '800' }}>60,000 </span>&nbsp;already Enrolled</p>
                                </div>
                            </div>
                            <div className="content-right">
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '10rem', paddingTop: '3rem' }}>
                                    <img alt="thumbnail" src={course.course_thumbnail[0]} style={{ height: '300px', width: '500px' }}></img>
                                </div>
                            </div>
                        </div>

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
                        <p className="about-para">{course.course_description}</p>
                        <div className="skillset">
                            <h5>Skills You Will Gain</h5>
                            <div style={{ paddingTop: '1rem', paddingLeft: '1rem' }}>
                                {
                                    course.course_subdomain.map((skill,index)=>{
                                        return <span key={index} className="badge rounded-pill bg-light text-dark">{skill}</span>
                                    })
                                }
                               
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
                            <img alt="thumbnail" src={course.courseCreator.profilePic}></img>
                            <div style={{ paddingLeft: '3rem' }}>
                                <h4>{course.courseCreator.name}</h4>
                                <p>{course.courseCreator.description}</p>
                                <div className="more-info">
                                   
                                    <div className="side-info">
                                        <img alt="thumbnail" src="https://cdn.iconscout.com/icon/free/png-64/book-1169-433812.png"></img>
                                        <p>Experience<b> {course.courseCreator.experience} years</b></p>
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

                <div className="faq-section" id="faq">
                    <div className="faq-content">
                        <h3>Frequently Asked Questions</h3>
                        <div className="container-part">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item" style={{width:'1000px'}}>
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        When will I have my access to lectures and assignments?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Access to lectures and assignments depends on your type of enrollment. If you take a course in audit mode, you will be able to see most course materials for free. To access graded assignments and to earn a Certificate, you will need to purchase the Certificate experience, during or after your audit
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{width:'1000px'}}>
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        What will I get if I subscribe to this Specialization?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        When you enroll in the course, you get access to all of the courses in the Specialization, and you earn a certificate when you complete the work. Your electronic Certificate will be added to your Accomplishments page - from there, you can print your Certificate or add it to your LinkedIn profile.  If you only want to read and view the course content, you can audit the course for free.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{width:'1000px'}}>
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Is Financial Aid available?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Yes, Coursera provides financial aid to learners who cannot afford the fee. Apply for it by clicking on the Financial Aid link beneath the "Enroll" button on the left. You'll be prompted to complete an application and will be notified if you are approved. You'll need to complete this step for each course in the Specialization, including the Capstone Project
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
            }
        </>
    )
}

export default CourseEnroll
