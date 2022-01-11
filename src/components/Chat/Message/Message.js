import React, { useEffect, useState } from 'react'
import "./Message.css"
// import axios from 'axios'
import {format } from "timeago.js"

export default function Message({own,message}) {
    console.log(own,message.sender)
    // const [User,setUser]=useState({});
    // useEffect(()=>{
    //     const findFriend = async()=>{
    //     try{
            
    //         const friend = await axios.get(`http://localhost:8800/api/users?userId=${message.sender}`)
    //         console.log("000",friend.data)
    //         setUser(friend.data)
            
            
    //     }catch(err){
    //             console.log(err)
    //         }
    //     }
    //     findFriend();
    // },[])
    return (
        
        <div className={own ? "message own" : "message"}>
            <div className="mtop">
                 {/* <img className="Mimg" src={User.profilePic ? User.profilePic : "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"} alt="" /> */}
                {/* <img className="Mimg" src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" alt="" /> */}
                <p style={{marginBottom:"0px"}} className="Mtext">{message.text}</p>
            </div>
            <div className="mbottom">
                {format(message.createdAt)}
            </div>
            
        </div>
    )
}
