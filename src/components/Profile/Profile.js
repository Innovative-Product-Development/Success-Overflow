import React, { useEffect, useState } from 'react';
import { getEndPoint } from "../../request/request"
import { Button, Container, Spinner, Toast, Row, Col } from "react-bootstrap";
import {NavLink, Link } from 'react-router-dom'
import './Profile.css'

function Profile(props) {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(async () => {

        try {
            const response2 = await getEndPoint(`/user/userDetails/${props.match.params.userId}`, null);
            if (response2) {
                if (response2.status === 200) {
                    console.log(response2.data.data)
                    setUser(response2.data.data)
                    setIsLoading(false)
                }
            }
            else {

                // setIsLoading(false);
                // setErrMsg("OOPS AN ERROR OCCURED TRY AGAIN LATER!!");
                // setShowError(true);
            }
        }
        catch (err) {
            // alert(err.response)
            // setIsLoading(false);
            // if (typeof (err.response) !== 'undefined' && typeof (err.response.data) !== 'undefined' && typeof (err.response.data.msg) !== 'undefined') {
            //     setErrMsg(err.response.data.msg);
            //     setShowError(true);
            // }
            // else {
            //     setErrMsg("OOPS AN ERROR OCCURED TRY AGAIN LATER!!");
            //     setShowError(true);
            // }
        }
    }, [])
    return (
       <div>
            {isLoading ?
                (<center style={{ marginTop: "20%" }}>
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button>
                </center>) : (
            <div>
            {/* Profile of {props.match.params.userId} */}
            {
                user && <div className='profile-part'>
                    <div className='profile-img'>
                        <img className='profile-pic' src={user.profilePic}></img>
                    </div>
                    <div className='user-details'>
                        <div className='details-part-1'>
                            <h2 className='user-heading' style={{ textAlign: 'center' }}>{user.name}</h2>
                            <p className='user-desc' style={{ textAlign: 'center' }}>{user.description}</p>
                        </div>
                        <div className='details-part-2' style={{textAlign:'center'}}>
                            <h5><span>Email:  </span>{user.email}</h5>
                            <h5><span>Tech:  </span>{user.tech}</h5>
                            <h5><span>SubTech:  </span>{user.sub_tech && user.sub_tech.length>0 && 
                            user.sub_tech.map(e => e.label).join(", ")
                            
                            }</h5>
                            
                            
                        </div>
                        <div className='details-part-3' style={{textAlign:'center'}}>
                            <h5><span>City:  </span>{user.city}</h5>
                            <h5><span>State:  </span>{user.state}</h5>
                            
                            
                        </div>
                    </div>
                    {user.isStudent && <h4 style={{padding:'2rem 0 1rem 0'}}><span>Courses Enrolled</span></h4>}
                    <div className="course-section1" style={{paddingLeft:'3rem'}}>
                    
                    {user && user.isStudent && user.courses_enrolled && user.courses_enrolled.length>0 && user.courses_enrolled.map(course => {
                        return (
                            <div className="card card12">
                                <img style={{border:"1px solid #8e51de",borderRadius:"2px"}} src={course.course_thumbnail} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{course.course_name}</h5>
                                    {/* { (course.isRecommended && course.isRecommended === true) && 
                                    <div className="recommendDiv">
                                        <button className="recommend">Recommended</button>
                                    </div>
                                    } */}
                                    { (course.istoprating && course.istoprating === true) && 
                                    <div className="recommendDiv">
                                        <button className="recommend">Best Seller</button>
                                    </div>
                                    }
                                    <p style={{textAlign : 'center'}} className="card-text">{course.course_description}</p>
                                    <p style={{textAlign : 'center'}} className="card-text">{course.course_subdomain.join(', ')}</p>
                                    <div className="part-1">
                                        <p className="teacher">Teacher(<i className="fa fa-user" />) : {course.course_creator.name}</p>
                                        <p className="likes" style={{ paddingRight: '1rem' }}>Likes(<i className="	fa fa-thumbs-up" />): 21k</p>
                                    </div>
                                    <div className="part-1">
                                        <p className="enrolled">Enrolled(<i className="fa fa-user-circle-o" />) : 20</p>
                                        <p className="videos" style={{ paddingRight: '1rem' }}>Videos(<i className="fa fa-code" />) : {course.course_videos.length} </p>
                                    </div>
                                    <NavLink to={'/courseenroll/'+course._id} className="courselink">Go to course</NavLink>
                                </div>
                            </div>

                        )
                    }, [])
                    }
                </div>
                {user.isStudent && <h4><span>My Mentors</span></h4>}
                    <div className='mentors-section'>
                {
                    user && user.isStudent && user.connected_teachers && user.connected_teachers.length > 0 && user.connected_teachers.map((teacher) => {
                        return (
                            <div id="mentors" className="mentors-part" style={{ display: "block", backgroundColor: "floralwhite", marginTop: "60px" }}>
                                <div className='mentors-data'>
                                    <div className='mentor-img'>
                                        <img src={teacher.profilePic} className='mentor-pic'></img>
                                    </div>
                                    <div className='mentors-information'>
                                    <div className='mentors-info'>
                                        <div className='mentors-info-1'>
                                            <h5 className='mentor-name' style={{ paddingBottom: '10px' }}>{teacher.name}</h5>
                                            <p className='mentor-desc'><span className='Labels'>Description</span>: {teacher.description}</p>
                                            <p className='mentor-email'><span className='Labels'>Email</span>: {teacher.email}</p>

                                        </div>
                                        <div className='mentors-info-2'>
                                            <p className='mentor-tech' ><span className='Labels'>Domain</span>: {teacher.tech}</p>
                                            <p className='mentor-sub-tech' ><span className='Labels'>SubDomain</span>: 
                                            {teacher.sub_tech.map(e => e.label).join(", ")
                                            }</p>
                                            <p className='mentor-exp' ><span className='Labels'>Experience</span>: {teacher.experience} years</p>
                                        </div>
                                        <div className='mentors-info-3'>
                                            <p className='mentor-course' ><span className='Labels'>Course Created</span>: {teacher.my_courses.length} courses</p>
                                            <p className='mentor-city' ><span className='Labels'>City</span>: {teacher.city}</p>
                                            <p className='mentor-state'  ><span className='Labels'>State</span>: {teacher.state}</p>
                                        </div>
                                        <div className='mentors-info-32'>
                                            
                                            <p className='mentor-course' ><span className='Labels'>Course Created</span>: {teacher.my_courses.length} courses</p>
                                            <p className='mentor-city' ><span className='Labels'>Location</span>: {teacher.city},{teacher.state}</p>
                                            
                                        </div>
                                    </div>
                                    {/* <div className='requestbtn'>
                                          <Link to="#"><button className="requestButton" onClick={()=>{sendNotification(teacher._id)}}>Send Request</button></Link> 
                                    </div> */}
                                    </div>

                                </div>


                                {/* <Link to="#"><button className="requestButton">Send Request</button></Link> */}
                            </div>
                        )
                    })
                }

            </div>
                </div>
            }
        </div>
        )}
       </div>
    );
}

export default Profile;