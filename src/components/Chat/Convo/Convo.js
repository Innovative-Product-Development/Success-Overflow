import React, { useContext, useEffect, useRef, useState } from 'react';
import "./Convo.css"
import { useSelector } from "react-redux"
import { getEndPoint } from "../../../request/request"

function Convo({convo}) {
    const { user } = useSelector((state)=>state.auth)
    const [otherPerson,setOtherPerson] = useState({})
    useEffect(()=>{
        console.log("convoconvoconvo",convo)
        const friendId = convo.members.find(m => m!== user._id )
        const findFriend = async()=>{
        try{
            
            const response2 = await getEndPoint(`/user/friendDetails/${friendId}`,null);
            if (response2) {
                if (response2.status === 200) {
                    console.log("bahibhai",response2.data)
                    setOtherPerson(response2.data)
                    // setIsStudent(response2.data.isStudent);
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
            
        }catch(err){
                console.log(err)
            }
        }
        findFriend();
    },[])

    console.log(convo)
    return (
        <div className="convo">
            <img className="img" src={otherPerson && otherPerson.profilePic ? otherPerson.profilePic : "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"} alt="" />
            <span className="name" >{otherPerson && otherPerson.username}</span>
        </div>

    //     <div className="convo">
    //     <img className="img" src={"https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"} alt="" />
    //     <span className="name" >hey</span>
    // </div>

        
    )
}

export default Convo;