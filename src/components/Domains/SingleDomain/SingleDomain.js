import React, {useEffect, useState} from 'react';
import { getEndPoint } from "../../../request/request"

function SingleDomain(props) {

    const [teachers, setTeachers] = useState([]);

    useEffect( async()=>{
        try {
            const response2 = await getEndPoint(`/user/allTeachers/${props.match.params.domain}`,null);
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
      
    },[])
    return (
        <div>
            {
                teachers.map((teacher)=>{
                    return <h1>{teacher.name}</h1>
                })
            }
        </div>
    );
}

export default SingleDomain;