import React, { useState, useEffect } from 'react'
// import { useHistory, useParams } from 'react-router-dom';
import './SingleCourse.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import "../../../../node_modules/video-react/dist/video-react.css";
import { getEndPoint } from '../../../request/request'
// import { Player } from 'video-react';
// import poster from '../../../../src/assets/images/avatar.png';

//https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=40&playlistId=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB&key=AIzaSyBwGVGXLo-toCzGy930cRDWKBcYoIcMeZo

const SingleCourse = (props) => {

    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [id, setId] = useState("")
    const [link, setLink] = useState("")
    const [course, setCourse] = useState({})
    const [allVideos, setAllVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState([]);

    const setVid = (videoId) => {
        const video = allVideos.filter((video)=> video._id == videoId)
        setSelectedVideo(video)
        setName(video[0].video_name)
        setDescription(video[0].video_description)
        setId(video[0]._id)
        setLink(video[0].video_link)
    }



    useEffect( async ()=>{
        console.log("hwhhwhw",props.match.params.courseId)
        try {
            const response2 = await getEndPoint(`/course/${props.match.params.courseId}`,null);
            if (response2) {
                if (response2.status === 200) {
                    console.log(response2.data)
                    setCourse(response2.data)    
                    setAllVideos(response2.data.videos)
                    setSelectedVideo(response2.data.videos[0])
                    setName(response2.data.videos[0].video_name)
                    setDescription(response2.data.videos[0].video_description)
                    setId(response2.data.videos[0]._id)
                    setLink(response2.data.videos[0].video_link)
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
    },[])

    const [singleCourse,setSingleCourse] = useState([]);
    // const [vid,setVid] = useState("");
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
    
    // useEffect(()=>{
    //     fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails%2Csnippet&id=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB&key=AIzaSyBwGVGXLo-toCzGy930cRDWKBcYoIcMeZo')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         const result = data.items.map(item=>{
    //            return {title:item.snippet.title,vid:item.contentDetails.videoId}

    //         })
    //         setSingleCourse(result);
    //         setVid(result.vid);
    //         // setTitle(result.title)
    //     })

    // },[])




    return (
        <>
        <div className='courseHeading'>
            <h3>{course.course_name}</h3>
            <p style={{marginBottom:"2px",fontWeight:"600"}}>Domain: <span>{course.course_domain}</span></p>
            <p  style={{fontWeight:"600"}}>Sub Domain: <span>{course.course_subdomain && course.course_subdomain.length>0 && course.course_subdomain.join(", ")}</span></p>
            
        </div>
        <div style={{display:'grid',gridTemplateColumns:'3fr 1fr'}}>
            <div className="main-screen">
            <iframe style={{width:"100%",height:"550px"}} src={link} ></iframe>
                <div className='title1'>

                    <h4 style={{color:"#7d2ae8"}}>{name}</h4>
                    <p>{description}</p>
                </div>
            </div>
            <div className="video-sidebar">
                
                <ul className="sidebar-ul">
                <h5 style={{marginLeft:"10px"}}>Other Videos</h5>
                {
                    allVideos.map((item,index)=>{
                          return id !== item._id && <li key={index} className="othervideos" >{item.video_name}
                        <br></br>
                        <p onClick={()=>{
                            setVid(item._id);
                            // setTitle(item.title);
                            // setCounter(index);
                        }} className='watchvideo'>Watch this video</p>
                        </li>
                    })
                }
                </ul>
            </div>
        </div>
        <div className="about-section" id="about">
                    <div className="about-content">
                        <h2 className="about-title">About This Course</h2>
                        <p className="about-para">{course.course_description}</p>
                        <div className="skillset">
                            <h5>Skills You Will Gain</h5>
                            <div style={{ paddingTop: '1rem', paddingLeft: '1rem' }}>
                                {
                                    course.course_subdomain && course.course_subdomain.length>0 && course.course_subdomain.map((skill,index)=>{
                                        return <span key={index} className="badge rounded-pill bg-light text-dark">{skill}</span>
                                    })
                                }
                                {/* <span className="badge rounded-pill bg-light text-dark">Web Design</span>
                                <span className="badge rounded-pill bg-light text-dark">Web Accessibilty</span>
                                <span className="badge rounded-pill bg-light text-dark">HTML</span>
                                <span className="badge rounded-pill bg-light text-dark">HTML5</span> */}
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
                        {
                            course && course.courseCreator!=null && <div className="instructor-info">
                            <img alt="thumbnail" src={course.courseCreator.profilePic}></img>
                            <div style={{ paddingLeft: '3rem' }}>
                                <h4>{course.courseCreator.name}</h4>
                                <p>{course.courseCreator.description}</p>
                                <div className="more-info">
                                    {/* <div className="side-info">
                                        <img alt="thumbnail" src="https://cdn.iconscout.com/icon/free/png-64/users-144-457814.png"></img>
                                        <p><b>46,578</b> learners</p>
                                    </div> */}
                                    <div className="side-info">
                                        <img alt="thumbnail" src="https://cdn.iconscout.com/icon/free/png-64/book-1169-433812.png"></img>
                                        <p>Experience<b> {course.courseCreator.experience} years</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                        
                    </div>
                </div>
        
        
        </>
    )
}

export default SingleCourse
