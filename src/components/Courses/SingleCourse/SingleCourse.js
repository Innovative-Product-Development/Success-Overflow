import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import './SingleCourse.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import "../../../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import poster from '../../../../src/assets/images/avatar.png';

//https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails%2Csnippet&id=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB&maxResults=40&key=AIzaSyBwGVGXLo-toCzGy930cRDWKBcYoIcMeZo

const SingleCourse = (props) => {

    const [singleCourse,setSingleCourse] = useState([]);
    const [vid,setVid] = useState("");
    const [title,setTitle] = useState("");
    const [counter,setCounter] = useState(0)
    
    useEffect(()=>{
        fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails%2Csnippet&id=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB&key=AIzaSyBwGVGXLo-toCzGy930cRDWKBcYoIcMeZo')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const result = data.items.map(item=>{
               return {title:item.snippet.title,vid:item.contentDetails.videoId}

            })
            setSingleCourse(result);
            setVid(result.vid);
            setTitle(result.title)
        })

    },[])

    const renderVideo= () =>{
        return(
            <div className="video-container">
                <iframe width="1050" height="450" src={"//www.youtube.com/embed/"+vid+"?rel=0"} frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }


    return (
        <>
        
        <div style={{display:'grid',gridTemplateColumns:'3fr 1fr'}}>
            <div className="main-screen">
            {renderVideo()}
            </div>
            <div className="video-sidebar">
                <ul className="sidebar-ul">
                {
                    singleCourse.map((item,index)=>{
                        return <li key={item.vid} className={counter===index? "video-collection myItem" : "myItem"} onClick={()=>{
                            setVid(item.vid);
                            setTitle(item.title);
                            setCounter(index);
                        }}>{item.title}</li>
                    })
                }
                </ul>
            </div>
        </div>
        
        
        </>
    )
}

export default SingleCourse
