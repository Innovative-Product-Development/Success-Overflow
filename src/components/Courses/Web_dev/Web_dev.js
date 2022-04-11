import React,{useEffect, useState} from 'react';
import '../Web_dev/Web_dev.css'
import logo from '../../Images/web_dev.svg'
import '../../../../node_modules/font-awesome/css/font-awesome.min.css'
import { NavLink } from 'react-router-dom';
import { getEndPoint } from '../../../request/request'
import { Button, Container, Spinner, Toast, Row, Col } from "react-bootstrap";

const Web_dev = () => {

    const [course_details,setCourseDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect( async ()=>{

        try {
            const response2 = await getEndPoint('/course/allcourses',null);
            if (response2) {
                if (response2.status === 200) {
                    console.log(response2.data.data)
                    const courses = response2.data.data
                    courses.sort((a,b) => (a.isRecommended > b.isRecommended ) ? -1 : ((b.isRecommended > a.isRecommended ) ? 1 : 0))
                    setCourseDetails(response2.data.data)
                    setIsLoading(false)          
                }

                
            }
        }
        catch (err) {
            console.log(err)         
        }
      

    },[])


    return (
        <>
           
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
              <div className="top-banner" >
                <div className="text12">
                    <h1 className="course-title"><span>Web</span> Development</h1>
                    <p className="course-para">Design Code And Beautify</p>
                    <button className="actionbtn">Get Started</button>
                    
                </div>
                <div className="course-image">
                    <img alt="logo" src={logo}></img>
                </div>
            </div>


            <div className='main'>
                <div className="course-section1">
                    {course_details && course_details.map((course,i) => {
                        return (
                            <div className="card card12">
                                <img style={{border:"1px solid #8e51de",borderRadius:"2px"}} src={course.course_thumbnail} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{course.course_name}</h5>
                                    { (course.isRecommended && course.isRecommended === true) && 
                                    <div className="recommendDiv">
                                        <button className="recommend">Recommended</button>
                                    </div>
                                    }
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
                
            </div>
            
              </div>
              )}
          </div>
          

        </>
    )
}

export default Web_dev
