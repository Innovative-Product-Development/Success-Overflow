import React,{useState, useEffect, useRef} from 'react';
import { getEndPoint, postEndPoint } from "../../request/request"
import './Notification.css'
import {io} from "socket.io-client"
import { useSelector, useDispatch } from "react-redux"
import { Button, Container, Spinner, Toast, Row, Col } from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import { setAuth } from '../../store/authSlice'
import ReasonModal from './ReasonModal';

function Notification(props) {

    const dispatch = useDispatch();
    const [notifications,setNotifications] = useState([])
    const [isStudent, setIsStudent] = useState(false)
    const socket = useRef();
    const { isAuth, token, user } = useSelector((state)=>state.auth)
    const [arrivalNotification, setArrivalNotification] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [sender, setSender] = useState("");
    const [notificaionId, setNotificationId] = useState("");

 

    useEffect(()=>{
            socket.current = io("https://success-overflow-socket.herokuapp.com/");

            socket.current.on("statuschanged",data => {
                console.log("statusss",data)
                // dispatch(setAuth({ user: data.user }))
                
                requestNotifications();
                // console.log("babababab")
                // requestNotifications();
                
            })



            socket.current.on("passNotfications",data => {
                console.log("lakak",data)
                setArrivalNotification(data.notificaion)
                // console.log("boy good one")
                // console.log(data,"babita jiiiiiiiiii")
                // alert(data);
                // setNotifications(prev=>[data.notificaion,...prev])
            })
            socket.current.on("allusers1",users=>console.log('n1',users))
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

    const showReasonModal = (notificationid, senderId) => {
        console.log(typeof(senderId))
        setNotificationId(notificationid)
        setSender(senderId)
        setShowModal(true);
    }

    const closeReasonModal = () => {
        setShowModal(false);
    }

    const handleReject = (reason) => {
        console.log(reason)
        setShowModal(false);
        rejectRequest(reason)
    }
 


    useEffect(()=>{


        


        
    },[])
    useEffect(()=>{
        
    },[])

    useEffect(()=>{
        arrivalNotification && (
            setNotifications(prev=>[arrivalNotification,...prev])
        )
        // alert("bangalesh")
    },[arrivalNotification,setArrivalNotification])

    const acceptRequest = async (notificationid, senderId) => {
        
        try {
            const response2 = await postEndPoint(`/user/changeNotificationStatus/${notificationid}`, {status: "accepted", reason:""},null);
            if (response2) {
                if (response2.status === 200) {
                    console.log(response2.data)
                    socket.current.emit("changeStatus",{
                        senderId,
                        notification:response2.data.notification,
                        user: response2.data.sender
                    })
                   
                    requestNotifications();
                    alert("Request Accepted!! The student will ask queries in chat section.")
                    


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


    const rejectRequest = async (reason) => {
        // showReasonModal();

        console.log(sender, notificaionId, reason)
        try {
            
            const response2 = await postEndPoint(`/user/changeNotificationStatus/${notificaionId}`, {status: "rejected", reason: reason},null);
            if (response2) {
                if (response2.status === 200) {
                    console.log(response2.data)
                    socket.current.emit("changeStatus",{
                        senderId: sender,
                        notification:response2.data.notification,
                        user: response2.data.sender
                    })
                   
                    requestNotifications();
                    // alert(response2.data.message)
                   

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


    useEffect(()=>{
        requestNotifications();
    },[])

    const requestNotifications = async () => {
        try {
            const response2 = await getEndPoint(`/user/allnotifications`,null);
            if (response2) {
                if (response2.status === 200) {
                    console.log("bahibhai",response2.data.data)
                    setNotifications(response2.data.data)
                    setIsStudent(response2.data.isStudent);
                    setIsLoading(false)
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
                 <ReasonModal show={showModal} title={"Please Enter the Reason"} handleReject={handleReject} closeReasonModal={closeReasonModal}></ReasonModal>
             <h1 className='NotificationHeading'>NOTIFICATIONS</h1>
            <div className='NotificationContainer'>
                {
                    notifications.length == 0 &&   
                    <li className='NotificationLi'>
                    <div className='NotificationDiv'>
                         No New Notifications
                    
                    </div>
                    </li>  
                }
                
            {
                isStudent && notifications.map((notification)=>{
                    if(notification.status == "pending"){
                        return <>
                        <li className='NotificationLi'>
                            <div className='NotificationDiv'>
                            You have sent a request to {notification.receiver.name}
                            <p  className='NotificationDate'>{ String(new Date(notification.updatedAt).toDateString()) }</p>
                            </div>
                            </li>  
                        
                        </>
                    }else if(notification.status == "accepted"){
                        return <li className='NotificationLi'>
                            <div className='NotificationDiv'>
                            <div>{notification.receiver.name} has accepted your request. <NavLink className="chatLink"  to={`/chat`}>Chat</NavLink></div>
                            <p  className='NotificationDate'>{ String(new Date(notification.updatedAt).toDateString()) }</p>
                            </div>
                            </li>
                    }else if(notification.status == "rejected"){
                        return <li className='NotificationLi'>
                            <div className='NotificationDiv'>
                            {notification.receiver.name} has rejected your request
                            <p  className='NotificationDate'>{ String(new Date(notification.updatedAt).toDateString()) }</p>
                            </div>
                            <div>
                                <p style={{fontSize:"17px", marginTop:"5px", color:"deeppink"}}>Reason: <span style={{color:"black"}}>{notification.reason}</span></p>
                            </div>
                            
                            </li>
                    }
                })
            }
            {
                !isStudent && notifications.map((notification)=>{
                    if(notification.status == "pending"){
                        return <>
                        
                        <li className='NotificationLi'>
                        <div className='NotificationDiv'>
                        {notification.sender.name} has sent a request
                        <p  className='NotificationDate'>{ String(new Date(notification.updatedAt).toDateString()) }</p>
                        </div>
                        
                        
                        <div style={{marginTop:"5px", marginBottom:"5px"}}>
                            <button onClick={()=>{acceptRequest(notification._id, notification.sender._id)}} className='acceptButton'>Accept</button>
                            <button onClick={()=>{showReasonModal(notification._id, notification.sender._id)}} className='rejectButton'>Reject</button>
                            <button className='viewButton'><NavLink  to={`/profile/${notification.sender._id}`}>View Profile</NavLink></button>
                            
                        </div>
                        </li>  
                        </>
                    }else if(notification.status == "accepted"){
                        return <li className='NotificationLi'>
                            <div className='NotificationDiv'>
                            You have accepted the request sent by {notification.sender.name}
                            <p  className='NotificationDate'>{ String(new Date(notification.updatedAt).toDateString()) }</p>
                            </div>
                            </li>
                    }else if(notification.status == "rejected"){
                        return <li className='NotificationLi'>
                            <div className='NotificationDiv'>
                            You have rejected the request sent by {notification.sender.name}
                            <p  className='NotificationDate'>{ String(new Date(notification.updatedAt).toDateString()) }</p>
                            </div>
                           </li>
                           
                        
                    }
                })
            }
            
            </div>
             </div>
                )}
         </div>
        </>
    );
}

{/* <div>
                Notification
            </div>
            {
                isStudent && notifications.map((notification)=>{
                    if(notification.status == "pending"){
                        return <li>You have sent a request to {notification.receiver.name}</li>
                        
                        
                        
                    }
                })
            } */}

export default Notification;