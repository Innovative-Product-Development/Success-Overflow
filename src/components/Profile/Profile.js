import React,{useEffect, useState} from 'react';
import {getEndPoint} from "../../request/request"

function Profile(props) {
    const [user, setUser] = useState([]);
    useEffect( async()=>{
        
        try {
            const response2 = await getEndPoint(`/user/userDetails/${props.match.params.userId}`,null);
            if (response2) {
                if (response2.status === 200) {
                    console.log(response2.data.data)
                    setUser(response2.data.data)
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
    return (
        <div>
            Profile of {props.match.params.userId}
            {
                user &&  <h1>{user.name}</h1>
            }
        </div>
    );
}

export default Profile;