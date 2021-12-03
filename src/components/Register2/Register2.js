import React,{useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import { postEndPoint } from "../../request/request"
import '../../../node_modules/font-awesome/css/font-awesome.min.css';


function Register2(props) {

    const history = useHistory();

    // to check if user is a student or a teacher
    const [isStudent, setIsStudent] = useState(false)
    const [description, setDescription] = useState("")
    const [city,setCity] = useState("")
    const [state, setState] = useState("")
    const [profilePic, setProfilePic] = useState("")


    //student
    const [domain,setDomain] = useState([])   //web development dance music 
    const [sub_domain, setSub_domain] = useState([])  // () 
    
    //teacher
    const [experience, setExperience] = useState("")
   


    useEffect(()=>{
        var tok = localStorage.getItem('token');
        if (tok) {
            checkIsStudent();
        }
        else {
            history.push('/login');
        }
    },[])
   
    async function checkIsStudent() {
        try {
            const res = await postEndPoint('/user/isStudent', null);
            setIsStudent(res.data.isStudent)
        }
        catch (err) {
            console.log(err);
            // logOut();
        }
    }

      
const submit = async () => {
    
  try {
      const response2 = await postEndPoint('/user/details', { isStudent, domain, sub_domain, description, city, state, experience, profilePic }, null);
      if (response2) {
          if (response2.status === 200 && response2.data.token) {
              console.log(response2)
              history.push('/details')
          }
      }
      else {
          
          // setIsLoading(false);
          // setErrMsg("OOPS AN ERROR OCCURED TRY AGAIN LATER!!");
          // setShowError(true);
      }
  }
  catch (err) {
      alert(err.response.data.message)
  }
}


    return (
        <div>
            <form>
                {/* <div className="input-box">
                    <i className="fa fa-edit"></i>
                    <input type="text" className="desc" id="desc">Describe Yourself</input>
                </div>
                <div className="input-box">
                    <i className="fa fa-globe"></i>
                    <input type="text" className="city" id="city">City</input>
                </div>
                <div className="input-box">
                    <i className="fa fa-globe"></i>
                    <input type="text" className="state" id="state">State</input>
                </div>
                <div className="input-box">
                    <i className="fa fa-globe"></i>
                    <label for="exp">Experience</label>
                    <select name="exp" id="exp" required>
                        <option value="0-2">0-2 yrs</option>
                        <option value="2-5">2-5 yrs</option>
                        <option value="5-10">5-10 yrs</option>
                        <option value="10-15">10-15 yrs</option>
                        <option value="more15">more than 15 yrs</option>
                    </select>
                </div> */}
                
            </form>
            {/* hello from register 2 */}
            {/* <h1>{isStudent ? "student" : "teacher"}</h1> */}
{/* 
            {
                !isStudent && <div>
                    //experience
                </div>
            }

            <h1></h1> */}
        </div>
    );
}

export default Register2;