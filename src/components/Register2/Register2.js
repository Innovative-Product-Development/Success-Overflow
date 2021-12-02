import React,{useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import { postEndPoint } from "../../request/request"


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
    const [sub_domain, setSub_tech] = useState([])  // () 
    
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

            </form>
            {/* hello from register 2
            <h1>{isStudent ? "student" : "teacher"}</h1>

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