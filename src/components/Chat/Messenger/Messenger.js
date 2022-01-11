import React, { useContext, useEffect, useRef, useState } from 'react';
import "./Messenger.css"
import { useSelector } from "react-redux"
import Conversation from "../Convo/Convo"
import Message from "../Message/Message"
import { getEndPoint, postEndPoint } from "../../../request/request"
import {io} from "socket.io-client"

function Messenger(props) {
    const { user } = useSelector((state)=>state.auth)
    const [convos,setConvos] = useState([]);
    const [messages,setMessages] = useState([])
    const [currentChat,setCurrentChat] = useState(null);

    const socket = useRef()
    const [text,setText] = useState("");
     const [arrivalMessage,setArrivalMessage] = useState(null);
    const scrollRef=useRef();

    useEffect(()=>(
        scrollRef.current?.scrollIntoView({behaviour:"smooth"}) 
    ),[messages])
    

    useEffect(()=>{
        socket.current = io("https://success-overflow-socket.herokuapp.com/");
        socket.current.on("getMessage",data => {
            setArrivalMessage({
                sender: data.senderId,
                text:data.text,
                createdAt:Date.now()
            })
        })

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

    // useEffect(()=>{
    //     socket.current.emit("addUser",user._id);
    //     socket.current.on("allusers",users=>console.log(users));
    // },[])

    useEffect(()=>{
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) && (
            setMessages(prev=>[...prev,arrivalMessage])
        )
    },[arrivalMessage,currentChat])

    const sendMessage = async ()=>{

        const text1 = (text)
        const message = {
            
            "convoId":currentChat._id,
            "sender":user._id,
            "text":text1

        }
       

        const receiverId = currentChat.members.find((member) => member!==user._id)

        socket.current.emit("sendMessage",{
            
            senderId:user._id, 
            receiverId, 
            text:text1
        })
        try{
            const response2 = await postEndPoint(`/message`,{message},null);
            if (response2) {
                if (response2.status === 200) {
                    console.log("bahibhai",response2.data)
                    const mess = response2.data
                    setMessages([...messages,mess])
                    setText("")
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
            // setConvos(allconvos.data)
        }catch(err){
            console.log(err)
        }
      
    }

    useEffect(()=>{
        const fetchmessages = async () => {
        try{
            // const allmessages = await axios.get(`http://localhost:8800/api/messages/${currentChat._id}`)
            // setMessages(allmessages.data);

            const response2 = await getEndPoint(`/message/${currentChat._id}`,null);
            if (response2) {
                if (response2.status === 200) {
                    console.log("bahibhai",response2.data)
                    setMessages(response2.data)
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
    if(currentChat){
        fetchmessages();
    }
    
},[currentChat])

    useEffect(()=>{
        const fetchConvos = async () => {
        try{
            const response2 = await getEndPoint(`/convo/${user._id}`,null);
            if (response2) {
                if (response2.status === 200) {
                    console.log("bahibhai",response2.data.data)
                    setConvos(response2.data.data)
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
            // setConvos(allconvos.data)
        }catch(err){
            console.log(err)
        }
    }
    fetchConvos();
},[])


    return (
        <>
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <h4>{ user.isStudent ? "Teachers" : "Students"  }</h4>
                        {/* <input placeholder="Search for friends" className="searchmenu" type="text" /> */}
                        {
                            convos.map((convo)=>(
                                <div onClick={()=> setCurrentChat(convo)}>
                                    <Conversation convo={convo}  />
                                </div>
                            
                            ))
                        }
                        
                    
                    </div>
                </div>
                <div className="chatbox">
                    <div className="chatboxWrapper">
                        {
                            currentChat ? (
                                <>
                                    <div className="top">
                                        {
                                            messages.length>0 && messages.map((message)=>{
                                                  return   (
                                                      <div ref={scrollRef}>
                                                          <Message message={message} own={ message.sender === user._id ? true : false}/>
                                                      </div>
                                                  )    
                                            })
                                        }
                                                         
                                    </div>
                        <div className="bottom">
                               <textarea className="chatmessage" value={text} placeholder="write something...." onChange={(e)=>setText(e.target.value)}></textarea>
                               <button  className="chatmessagebutton" style={{ margin:"auto", border: "none", outline: "none", borderRadius: "5px", fontWeight: "bolder", backgroundColor: "rgb(107 27 212)", fontFamily: "Poppins", color: "#FFFFFF" }} onClick={sendMessage}>Send</button>
                        </div>
                                </>
                            ) :
                            <span>open a conversation to chat</span>
                        }

                    </div>
            </div>
            </div>
        </>
    );
}

export default Messenger;