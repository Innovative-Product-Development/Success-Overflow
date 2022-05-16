import React, { useEffect, useState } from 'react';
import { postEndPoint } from "../../request/request"
import { CountryDropdown, RegionDropdown } from 'react-indian-state-region-selector';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './Register2.css';
import { Form, Container } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from "../../store/authSlice"
import { useHistory } from 'react-router';
import uuid from 'react-uuid'

function Register2(props) {

    const history = useHistory();
    const dispatch = useDispatch()
    const { isAuth, user, isStudent } = useSelector((state)=>state.auth)

    // to check if user is a student or a teacher

    const [description, setDescription] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [profilePic, setProfilePic] = useState("https://res.cloudinary.com/chiragjain55551/image/upload/v1639042828/success-overflow/profile2_hmbvcc.jpg")
    const [selected, setSelected] = useState([]);
    const [selectedDomains, setSelectedDomains] = useState([]);
    const [options,setOptions] = useState([]);

    //student
    const [domain, setDomain] = useState([])   //web development dance music 


    //teacher
    const [experience, setExperience] = useState("")



    useEffect(() => {
        if (!isAuth){
            history.push('/login');
        }
    }, [history, isAuth])

   
    function uploadFiles() {

            
    
            let uploadPreset = "ky39gx2y";
            let folder = "success-overflow";
            let index = 5
            let fileName = index.toString() + "_ProfilePic_" + uuid().toString()
    
                
            
    
            window.cloudinary.openUploadWidget({
                cloudName: "chiragjain55551", uploadPreset: uploadPreset, sources: ["local"], showAdvancedOptions: false, cropping: false, multiple: false, defaultSource: "local", folder: folder, public_id: fileName,
                styles: {
                    palette: { window: "#FFFFFF", windowBorder: "#90A0B3", tabIcon: "#0078FF", menuIcons: "#5A616A", textDark: "#000000", textLight: "#FFFFFF", link: "#0078FF", action: "#FF620C", inactiveTabIcon: "#0E2F5A", error: "#F44235", inProgress: "#0078FF", complete: "#20B832", sourceBg: "#E4EBF1" },
                    fonts: { default: { active: true } }
                }
            },
                (error, result) => {
                    if (!error && result.event === "success") {
                        const url = result.info.secure_url;
                        setProfilePic(url)                   
                    }
                    else if (error) {
                        alert("OOOPS WE RAN INTO ERROR!")
                    }
                }
            );
        
    }


    const submit = async () => {

        try {
            // const response2 = await postEndPoint('/user/details', { isStudent, domain, sub_domain, description, city, state, experience, profilePic }, null);

            
            // console.log(isStudent, domain, selected , description, city, state, experience )
            
            const response2 = await postEndPoint('/user/details', { email:user.email,isStudent, domain, sub_domain:selected, description, city, state, experience, profilePic }, null);
            if (response2) {
                if (response2.status === 200) {
                    if(response2.data.message === 'nice work'){
                        dispatch(setAuth({ user: response2.data.user}))
                        history.push('/')
                    }
                    // history.push('/details')
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
    const optionsDomain = [
        { label: "Web Development", value: "Web Development" },
        { label: "Music", value: "Music" },
        { label: "Dance", value: "Dance"},
    ]

    useEffect(()=>{
        setOptions([])
        setSelected([])
        const d=[]
        selectedDomains.map((dom)=>{
            d.push(dom.label)

            if(dom.label === "Web Development"){
                        setOptions((option)=>{
                            
                            return [  ...option,
                                    { domain: "Web Development", label: "React", value: "React" },
                                    { domain: "Web Development", label: "Node JS", value: "Node JS" },
                                    { domain: "Web Development", label: "PHP", value: "PHP"},
                                    { domain: "Web Development", label: "Angular", value: "Angular" },
                                    { domain: "Web Development", label: "Vue JS", value: "Vue JS" },
                                    { domain: "Web Development", label: "Spring", value: "Spring" },
                                    { domain: "Web Development", label: "Flask", value: "Flask" },
                                    { domain: "Web Development", label: "Laravel", value: "Laravel" },
                                    { domain: "Web Development", label: "Express JS", value: "Express JS" }
                                ]
                        })
            }

            if(dom.label === "Dance"){
                setOptions((option)=>{
                    
                        return [  ...option,
                            { domain: "Dance", label: "Hip Hop", value: "Hip Hop" },
                            { domain: "Dance", label: "Jazz", value: "Jazz" },
                            { domain: "Dance", label: "Folk Dance", value: "Folk Dance"}
                        ]
                })
    }

    return []


        })
        setDomain(d)

        
        



    },[selectedDomains])



    return (
        <div style={{marginBottom:'140px'}}>
            {/* <form>
                <div className="input-box">
                    <i className="fa fa-edit"></i>
                    <input type="text" className="desc" id="desc" value={description} onInput={(event)=> {setDescription(event.target.value);}} placeholder="Describe Yourself"/>
                </div>
                <div className="input-box">
                    <i className="fa fa-globe"></i>
                    <input type="text" className="city" id="city" value={city} onInput={(event)=> {setCity(event.target.value);}} placeholder="City"/>
                </div>
                <div className="input-box">
                    <i className="fa fa-globe"></i>
                    <input type="text" className="state" id="state" value={state} onInput={(event)=> {setState(event.target.value);}} placeholder="State"/>
                </div>
                <div className="input-box">
                    <i className="fa fa-user"></i>
                    <label for="exp" style={{padding:' 0 30px'}}>Experience:</label>
                    <select name="exp" id="exp" required>
                        <option value="0-2">0-2 yrs</option>
                        <option value="2-5">2-5 yrs</option>
                        <option value="5-10">5-10 yrs</option>
                        <option value="10-15">10-15 yrs</option>
                        <option value="more15">more than 15 yrs</option>
                    </select>
                </div>
                

            </form> */}
            <Container className="customLoginBorder" style={{maxWidth:"1000px",padding:"15px",boxShadow: "1.5px 1.5px 7px 3px rgba(0,0,0,0.2)", borderRadius: "40px",textAlign:"center", marginBottom:"50px"}}>
                <div style={{width:"90%",margin:"auto",textAlign:"center"}}>
                  
                    <h3 style={{ margin: "30px auto", marginBottom: "0px", paddingTop:"16px",paddingBottom:"20px",textAlign: "center", fontSize: "36px", lineHeight: "54px", fontWeight: "600", fontFamily: "Poppins", color: "rgb(107 27 212)", marginTop: "0px" }}>User Details</h3>
                    <div className="profilePicDiv">
                        <img alt="profileImage" width="180px" height="180px" style={{borderRadius:"50%"}} src={profilePic}/>
                        <div style={{ display: "flex", justifyContent: 'center' }}>
                        
                            <button onClick={()=>{uploadFiles()}} style={{ marginTop: "3%", border: "none", outline: "none", borderRadius: "5px", fontWeight: "bolder", backgroundColor: "rgb(166, 98, 255)", fontFamily: "Poppins", padding: "5px 45px", color: "#FFFFFF" }} >Upload Pic</button>
                        </div>
                    </div>
                    <Form >
                        <Form.Group className="inputDiv" style={{textAlign:"start"}}>
                            <Form.Label className="customBoldFont inputLabel">Description</Form.Label>
                            <Form.Control autoComplete='off' className="inputField" name="SapId" id="SapId" type="text" rows={5} value={description} onInput={(event)=>{setDescription(event.target.value)}} />
                        </Form.Group>
                        <br></br>
                        
                        <Form.Group className="inputDiv" style={{textAlign:"start"}}>
                            <Form.Label className="customBoldFont inputLabel">State</Form.Label>
                            {/* <Form.Control> */}
                            <CountryDropdown classes="inputField form-control" rows={5}
                            value={state}
                            onChange={(val) => setState(val)} />
                            {/* </Form.Control> */}
                            {/* <Form.Control autoComplete='off' className="inputField" name="SapId" id="SapId" type="text" rows={5} value={city} onInput={(event)=>{setCity(event.target.value)}} /> */}
                        </Form.Group>
                        <br></br>
                        <Form.Group className="inputDiv" style={{textAlign:"start"}}>
                            <Form.Label className="customBoldFont inputLabel">City</Form.Label>
                            <RegionDropdown classes="inputField form-control" rows={5}
                            country={state}
                            value={city}
                            onChange={(val) => setCity(val)} />
                            {/* <Form.Control autoComplete='off' className="inputField" name="SapId" id="SapId" type="text" rows={5} value={state} onInput={(event)=>{setState(event.target.value)}} /> */}
                        </Form.Group>
                        <br></br>
                        

                        {/* <Form.Group className="inputDiv" style={{textAlign:"start"}}>
                            <Form.Label className="customBoldFont inputLabel" for="selectDropdown">Domain: </Form.Label>
                                <Form.Select id="selectDropdown" onChange={(event)=>{dropdownChange(event)}} aria-label="Default select example" required>
                                
                                    <option style={{color:"lightgray"}}>Select Domain</option>
                                    <option value="Web Developement">Web Developement</option>
                                    <option value="Music">Music</option>
                                    <option value="Dance">Dance</option>
                                </Form.Select>
                        </Form.Group> */}
                        <Form.Group className="inputDiv" style={{textAlign:"start"}}>
                        <Form.Label className="customBoldFont inputLabel" for="selectSubDropdown">Domain: </Form.Label>
                            <MultiSelect
                                id="selectSubDropdown"
                                options={optionsDomain}
                                value={selectedDomains}
                                onChange={setSelectedDomains}
                                labelledBy="Select"
                            />
                        </Form.Group>
                        <br/>
                        <Form.Group className="inputDiv" style={{textAlign:"start"}}>
                        <Form.Label className="customBoldFont inputLabel" for="selectSubDropdown">Sub Domain: </Form.Label>
                            <MultiSelect
                                id="selectSubDropdown"
                                options={options}
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                            />
                        </Form.Group>
                        <br/>
                        {!isStudent && <Form.Group className="inputDiv" style={{textAlign:"start"}}>
                            <Form.Label className="customBoldFont inputLabel" for="selectDropdown">Experience: </Form.Label>
                                <Form.Select id="selectDropdown" onChange={(event)=>{setExperience(event.target.value)}} aria-label="Default select example" required>
                                
                                    <option style={{color:"lightgray"}}>Select Experience</option>
                                    <option value="0-2">0-2 years</option>
                                    <option value="2-5">2-5 years</option>
                                    <option value="5-10">5-10 years</option>
                                    <option value="10-15">10-15 years</option>
                                    <option value="more15">more than 15 years</option>
                                </Form.Select>
                        </Form.Group>}
                        </Form>
                    <div style={{ display: "flex", justifyContent: 'center' }}>
                        <button onClick={()=>{submit()}} style={{ marginTop: "6%", border: "none", outline: "none", borderRadius: "5px", fontWeight: "bolder", backgroundColor: "rgb(107 27 212)", fontFamily: "Poppins", padding: "5px 45px", color: "#FFFFFF" }} >Submit</button>
                    </div>
                </div>
                <br />
            </Container>
           
        </div>
    );
}

export default Register2;