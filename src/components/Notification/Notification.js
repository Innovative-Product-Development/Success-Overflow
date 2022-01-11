import React,{useState, useEffect, useRef} from 'react';
import { getEndPoint, postEndPoint } from "../../request/request"
import './Notification.css'
import {io} from "socket.io-client"
import { useSelector, useDispatch } from "react-redux"
import { setAuth } from '../../store/authSlice'

function Notification(props) {

    const dispatch = useDispatch();
    const [notifications,setNotifications] = useState([])
    const [isStudent, setIsStudent] = useState(false)
    const socket = useRef();
    const { isAuth, token, user } = useSelector((state)=>state.auth)
    const [arrivalNotification, setArrivalNotification] = useState(null)

 

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
            const response2 = await postEndPoint(`/user/changeNotificationStatus/${notificationid}`, {status: "accepted"},null);
            if (response2) {
                if (response2.status === 200) {
                    console.log(response2.data)
                    socket.current.emit("changeStatus",{
                        senderId,
                        notification:response2.data.notification,
                        user: response2.data.sender
                    })
                   
                    requestNotifications();
                    alert(response2.data.message)
                    


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


    const rejectRequest = async (notificationid, senderId) => {


        try {
            const response2 = await postEndPoint(`/user/changeNotificationStatus/${notificationid}`, {status: "rejected"},null);
            if (response2) {
                if (response2.status === 200) {
                    console.log(response2.data)
                    socket.current.emit("changeStatus",{
                        senderId,
                        notification:response2.data.notification
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
            <h1 className='NotificationHeading'>NOTIFICATIONS</h1>
            <div className='NotificationContainer'>
                
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
                            {notification.receiver.name} has accepted your request
                            <p  className='NotificationDate'>{ String(new Date(notification.updatedAt).toDateString()) }</p>
                            </div>
                            </li>
                    }else if(notification.status == "rejected"){
                        return <li className='NotificationLi'>
                            <div className='NotificationDiv'>
                            {notification.receiver.name} has rejected your request
                            <p  className='NotificationDate'>{ String(new Date(notification.updatedAt).toDateString()) }</p>
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
                            <button onClick={()=>{rejectRequest(notification._id, notification.sender._id)}} className='rejectButton'>Reject</button>
                            
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