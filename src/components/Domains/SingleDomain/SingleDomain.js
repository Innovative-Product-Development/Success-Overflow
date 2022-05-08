import React, { useEffect, useState, useRef } from 'react';
import { getEndPoint, postEndPoint } from "../../../request/request"
import { Link } from 'react-router-dom'
import './SingleDomain.css'
import {io} from "socket.io-client"
import { useSelector } from "react-redux"

function SingleDomain(props) {

    const [teachers, setTeachers] = useState([]);
    const socket = useRef();
    const { isAuth, token, user, isStudent } = useSelector((state)=>state.auth)



    useEffect(()=>{
            socket.current = io("https://success-overflow-socket.herokuapp.com/");
            socket.current.emit("addUser",user._id);
            socket.current.on("allusers",users=>console.log(users));


            return () => {
                disconnectSocket();
              }
           
    },[])

    const disconnectSocket = () => {
        console.log('Disconnecting socket...');
        if(socket) socket.current.emit('forceDisconnect');
      }


    const sendNotification = async (receiverId) => {

        


        try {
            const response2 = await postEndPoint(`/user/sendNotification`, { receiverId }, null);
            if (response2) {
                if (response2.status === 200) {
                    console.log(response2.data)


                    socket.current.emit("sendNotification",{
                        senderId:user._id, 
                        receiverId,
                        notificaion: response2.data.notification
                    })


                    alert(response2.data.data)
                    // setTeachers(response2.data.data)
                    // const courses = response2.data.data
                    // courses.sort((a,b) => (a.isRecommended > b.isRecommended ) ? -1 : ((b.isRecommended > a.isRecommended ) ? 1 : 0))
                    // setCourseDetails(response2.data.data)



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

    }

    useEffect(async () => {
        try {
            const response2 = await getEndPoint(`/user/allTeachers/${props.match.params.domain}`, null);
            if (response2) {
                if (response2.status === 200) {
                    console.log(response2.data.data)
                    setTeachers(response2.data.data)
                    // const courses = response2.data.data
                    // courses.sort((a,b) => (a.isRecommended > b.isRecommended ) ? -1 : ((b.isRecommended > a.isRecommended ) ? 1 : 0))
                    // setCourseDetails(response2.data.data)



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
        <>
            <div className='mentors-section'>
                {
                    teachers && teachers.length > 0 && teachers.map((teacher) => {
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
                                    <div className='requestbtn'>
                                          <Link to="#"><button className="requestButton" onClick={()=>{sendNotification(teacher._id)}}>Send Request</button></Link> 
                                    </div>
                                    </div>

                                </div>


                                {/* <Link to="#"><button className="requestButton">Send Request</button></Link> */}
                            </div>
                        )
                    })
                }

            </div>
            {/* {
                teachers && teachers.length>0 && teachers.map((teacher)=>{
                    return <h1>{teacher.name}</h1>
                })
            } */}
        </>
    );
}

export default SingleDomain;