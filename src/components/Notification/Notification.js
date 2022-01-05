import React,{useState, useEffect} from 'react';
import { getEndPoint, postEndPoint } from "../../request/request"
import './Notification.css'

function Notification(props) {


    const [notifications,setNotifications] = useState([])
    const [isStudent, setIsStudent] = useState(false)

    const acceptRequest = async (notificationid) => {
        try {
            const response2 = await postEndPoint(`/user/changeNotificationStatus/${notificationid}`, {status: "accepted"},null);
            if (response2) {
                if (response2.status === 200) {
                    console.log(response2.data)
                    alert(response2.data.message)
                    requestNotifications();

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


    const rejectRequest = async (notificationid) => {
        try {
            const response2 = await postEndPoint(`/user/changeNotificationStatus/${notificationid}`, {status: "rejected"},null);
            if (response2) {
                if (response2.status === 200) {
                    console.log(response2.data)
                    alert(response2.data.message)
                    requestNotifications();

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
                    console.log(response2.data.data)
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
                            <button onClick={()=>{acceptRequest(notification._id)}} className='acceptButton'>Accept</button>
                            <button onClick={()=>{rejectRequest(notification._id)}} className='rejectButton'>Reject</button>
                            
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