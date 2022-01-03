import React,{useEffect, useState, useRef} from 'react';
import { useHistory } from 'react-router';
import { postEndPoint } from "../../request/request"
import { Col, Row, Button, Form, Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import "../UploadCourse/UploadCourse.css"
import uuid from 'react-uuid'
import { GrAddCircle, BsEye, AiFillDelete } from 'react-icons/all';
import { useSelector } from "react-redux"


function UploadCourse(props) {

    const history = useHistory();

    

    const { isAuth, isStudent } = useSelector((state)=>state.auth)

    const [course_name,setCourseName] = useState("")
    const [course_description,setCourseDescription]  = useState("")
    const [course_domain, setCourseDomain] = useState("")
    
    const [selected, setSelected] = useState([]);
    const [options,setOptions] = useState([]);
    const [course_thumbnail, setCourseThumbNail] = useState("")

    const [video, setVideo] = useState([{ key: uuid(), video_name: "", video_description: "", video_link: ""}]);
    const videoDiv = useRef(null);



    useEffect(()=>{
        
        if (!isAuth){
            history.push('/login');
        }
        else if(isStudent){
            history.push('/');
        }
    },[isAuth, isStudent, history])
   


    async function submit(){
        // console.log(course_name, course_description, course_domain, selected)
        console.log(video, course_thumbnail)
        console.log({ course_name, course_description, course_domain, selected, course_videos:video, course_thumbnail })

        try {
            const response2 = await postEndPoint('/course', { course_name, course_description, course_domain, selected, course_videos:video, course_thumbnail }, null);
            if (response2) {
                if (response2.status === 200) {
                    if( response2.data.message === "success"){
                        alert("course uploaded successfully")
                        history.push('/')
                    }
                    
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


    
    function AddDetails(type) {
        //FUNCTION TO ADD Details FORM
        
        let temp2 = Array.from(video);
        let valid2 = false;
        if (temp2.length > 0) {
            for (var i2 = 0; i2 < temp2.length; i2++) {
                var value2 = temp2[i2]
                if (value2.video_name.length > 0 && value2.video_description.length > 0) {
                    valid2 = true;
                }
                else {
                    valid2 = false;
                    break;
                }
            }
        }
        else {
            valid2 = true;
        }
        if (valid2) {
            temp2.push({ key: uuid(), video_name: "", video_description: "", video_link: ""});
            setVideo(temp2);
        }

        else if (!valid2) {
            alert("Please fill the previous details!!");
            
        }
}

function deleteUploadedDoc(type, id, index) {
    /*FUNCTION TO DELETE DOCS*/
    // if (type === 1) {
    //     setProfile("https://res.cloudinary.com/chiragjain55551/image/upload/v1627317877/StudentProject/vdjmvqojsnx3hckyuwm6.jpg");
    // }
    if(type == 1){
        setCourseThumbNail("");
    }
    else if (type === 2 && id && index >= 0) {
        let temp3 = Array.from(video);
        temp3[index].video_link = "";
        setVideo(temp3);

    }
    // else if (type === 3 && id && index >= 0) {
    //     let temp3 = Array.from(achievements);
    //     temp3[index].proof_link = "";
    //     setAchievements(temp3);

    // }
    // else if (type === 4) {
    //     setResume("");
    // }

}
       
function ValidationOnChange(event) {

    switch (event.target.name) {
        case "videoName":
            let temp2 = Array.from(video);

            let t2 = event.target.id.toString().split(",")[1];
            for (let index2 = 0; index2 < temp2.length; index2++) {
                if (temp2[index2].key === t2) {
                    temp2[index2].video_name = event.target.value;
                    break;
                }
            }
            setVideo(temp2);
            break;

        case "videoDescription":
            let temp4 = Array.from(video);

            let t4 = event.target.id.toString().split(",")[1];

            for (let index4 = 0; index4 < temp4.length; index4++) {
                if (temp4[index4].key === t4) {

                        temp4[index4].video_description = event.target.value;

                        break;
                }
            }
            setVideo(temp4);
            break;
        case "videoLink":
                let temp5 = Array.from(video);
    
                let t3 = event.target.id.toString().split(",")[1];
                for (let index2 = 0; index2 < temp5.length; index2++) {
                    if (temp5[index2].key === t3) {
                        temp5[index2].video_link = event.target.value;
                        break;
                    }
                }
                setVideo(temp5);
                break;
        default:
            break;
    }
}

function DeleteDetails(type, index) {
    //FUNCTION TO DELETE  FORM
    if (type === 1) {
        if (index >= 0 && index < video.length && video.length > 1) {

            let temp = Array.from(video);
            temp.splice(index, 1);
            setVideo(temp);
        }
    }
}
function checkBeforeUpload(type, id, index) {
    if(type === 1){
        if(course_thumbnail.length > 0){
            alert("Delete the uploaded Thumbnail first!!");
            return false;
        }
        else {
            return true;
        }
    }
    if (type === 2 && id && index >= 0) {

        let temp3 = Array.from(video);
        if (temp3[index].video_link.length > 0) {
            console.log(temp3)
            alert("Delete The document first!!");
            
            return false;
        }
        else {
            return true;
        }


    }
}

function uploadFiles(type, id, index) {
    /*FUNCTION TO UPLOAD DOCS*/
    if (checkBeforeUpload(type, id, index) === true) {
        console.log(true)

        let uploadPreset = "ky39gx2y";
        let folder = "success-overflow";
        let fileName = index.toString() + "_Video_" + uuid().toString()

            
        

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
                    if(type === 1){
                        setCourseThumbNail(url)
                    }
                    if (type === 2 && id && index >= 0) {

                        let temp3 = Array.from(video);
                        temp3[index].video_link = url;
                        setVideo(temp3);

                    }
                   
                }
                else if (error) {
                    alert("OOOPS WE RAN INTO ERROR!")
                }
            }
        );
    }
}

// success-overflow

    function dropdownChange(event){
        setCourseDomain(event.target.value)
        setSelected([])

        if(event.target.value === "Web Developement"){
            setOptions(
                [  
                    { label: "React", value: "React" },
                    { label: "Node JS", value: "Node JS" },
                    { label: "PHP", value: "PHP"},
                    { label: "Angular", value: "Angular" },
                    { label: "Vue JS", value: "Vue JS" },
                    { label: "Spring", value: "Spring" },
                    { label: "Flask", value: "Flask" },
                    { label: "Laravel", value: "Laravel" },
                    { label: "Express JS", value: "Express JS" }
                ]
            )
        }else if(event.target.value === "Dance"){
            setOptions(
                [  
                    { label: "Hip Hop", value: "Hip Hop" },
                    { label: "Jazz", value: "Jazz" },
                    { label: "Folk Dance", value: "Folk Dance"}
                ]
            )
        }
    }



    return (
        <div style={{textAlign:"center"}}>
             <Container className="customLoginBorder" style={{maxWidth:"1000px",padding:"15px",boxShadow: "1.5px 1.5px 7px 3px rgba(0,0,0,0.2)", borderRadius: "40px",textAlign:"center", marginBottom:"50px"}}>
                <div style={{width:"90%",margin:"auto",textAlign:"center"}}>
                  
                    <h3 style={{ margin: "30px auto", marginBottom: "0px", paddingTop:"16px",paddingBottom:"20px",textAlign: "center", fontSize: "36px", lineHeight: "54px", fontWeight: "600", fontFamily: "Poppins", color: "rgb(107 27 212)", marginTop: "0px" }}>Upload Course</h3>
                    <Form >
                        <Form.Group className="inputDiv" style={{textAlign:"start"}}>
                            <Form.Label className="customBoldFont inputLabel">Course Name: </Form.Label>
                            <Form.Control className="inputField" name="SapId" id="SapId" type="text" rows={5} value={course_name} onInput={(event)=>{setCourseName(event.target.value)}} />
                        </Form.Group>
                        <br></br>
                        <Form.Group className="inputDiv" style={{textAlign:"start"}}>
                            <Form.Label className="customBoldFont inputLabel">Course Description: </Form.Label>
                            <Form.Control className="inputField" name="SapId" id="SapId" type="text" rows={5} value={course_description} onInput={(event)=>{setCourseDescription(event.target.value)}} />
                        </Form.Group>
                        <br></br>
                        

                        <Form.Group className="inputDiv" style={{textAlign:"start"}}>
                            <Form.Label className="customBoldFont inputLabel" for="selectDropdown">Course Domain: </Form.Label>
                                <Form.Select id="selectDropdown" onChange={(event)=>{dropdownChange(event)}} aria-label="Default select example">
                                
                                    <option style={{color:"lightgray"}}>Select Domain</option>
                                    <option value="Web Developement">Web Developement</option>
                                    <option value="Music">Music</option>
                                    <option value="Dance">Dance</option>
                                </Form.Select>
                        </Form.Group>
                        <br/>
                        <Form.Group className="inputDiv" style={{textAlign:"start"}}>
                        <Form.Label className="customBoldFont inputLabel" for="selectSubDropdown">Course Sub Domains: </Form.Label>
                            <MultiSelect
                                id="selectSubDropdown"
                                options={options}
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                            />
                        </Form.Group>
                        <br></br>
                        <div className="documentDivThumbnail">
                                <Row>
                                    <Col sm={4} md={5} lg={5}>
                                        <Form.Label className=" inputLabel" style={{ marginRight: "2%" }}>Course Thumbnail</Form.Label>
                                    </Col>
                                    <br></br>
                                    <Col style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}  className="thumbnailButton" sm={8} md={7} lg={7}>
                                        <Button onClick={() => { uploadFiles(1, 4, 4); }} style={{ border: "none", outline: "none", background: "rgb(166, 98, 255)", fontWeight: "500", paddingLeft: "20px", paddingRight: "20px", marginTop: "0.5%" }} >Upload Course Thumbnail</Button>
                                        {
                                            course_thumbnail && course_thumbnail.length > 1 ?
                                            <div className="documentIconsDiv">
                                                {/* <OverlayTrigger
                                                    placement={"top"}
                                                    overlay={<Tooltip>View uploaded document</Tooltip>}>
                                                    <a href={value.proof_link} rel="noreferrer" target="_blank"><BsEye className="eyeIcon" /></a>
                                                </OverlayTrigger> */}
                                                <OverlayTrigger
                                                    placement={"top"}
                                                    overlay={<Tooltip>Delete Course Thumbnail</Tooltip>}
                                                >
                                                    <label style={{ color: "red", cursor: "pointer" }} onClick={() => { deleteUploadedDoc(1, 0,0); }}>
                                                        <AiFillDelete style={{ fontSize: "28px", marginRight: "12px", marginLeft: "10px" }} />
                                                    </label>
                                                </OverlayTrigger>
                                            </div>
                                            : null
                                        }
                                    </Col>
                                </Row>
                                                              
                                </div>
                        <br></br>
                        <div className="mainBox" style={{ marginTop: "3%" }} id="video" ref={videoDiv}>
    
                                    <h4 className="headings inputLabel">Video Lectures</h4>
                                    {/* <label className="subHeadings">Please enter internship details (Note: Proof of internship should contain evalutation report filled by company and your certificate/LOR given by the company)</label> */}
                                    <hr />
                                    {
                                        video.map((value, index) => {

                                            return (
                                                <div className="mainContainer" style={{ marginTop: "6%", }} key={value.key}>
                                                    {video.length > 1 ? <div><h4 className="headingsVideonumber" >Video {index + 1} </h4> <hr /></div> : null}
                                                    <Form.Group className="mb-3 mt-3" >
                                                        <Row>
                                                            <Col sm={4} md={5} lg={4}>
                                                                <Form.Label className="BoldTextHeading">Video Name:</Form.Label>{/*{ _id: uuid(), name: "", role: "", description: "", proof_link: "",start_date:"", end_date:"" }*/}
                                                            </Col>
                                                            <Col sm={6} md={6} lg={8} >
                                                                <Form.Control name="videoName" className="customInputField" id={"videoname," + value.key} type="text" rows={5} defaultValue={value.video_name && value.video_name.length > 0 ? value.video_name : ""} onInput={(event) => { ValidationOnChange(event); }} />
                                                                {/* onInput={(event) => { ValidationOnChange(event); }} */}
                                                            </Col>
                                                        </Row>
                                                        <br />
                                                       
                                                        <Row>
                                                            <Col sm={4} md={5} lg={4}>
                                                                <Form.Label className="BoldTextHeading">Video Description</Form.Label>
                                                            </Col>
                                                            <Col sm={6} md={6} lg={8} >
                                                                <Form.Control name="videoDescription" className="customInputField" id={"videodesc," + value.key} type="text" rows={5} defaultValue={value.video_description && value.video_description.length > 0 ? value.video_description : ""} onInput={(event) => { ValidationOnChange(event); }} />
                                                            </Col>
                                                        </Row>
                                                        <br />
                                                       
                                                        <div className="mainDocumentDiv" style={{alignItems: "center" }}>
                                                            <div className="documentDiv">
                                                            <Row>
                                                            <Col sm={4} md={5} lg={4}>
                                                                <Form.Label className="BoldTextHeading" >Video Link</Form.Label>
                                                                </Col>
                                                                <Col style={{display:"flex",alignItems:"center",justifyContent:"space-between"}} sm={8} md={7} lg={8} >
                                                                {/* <Form.Control name="videoLink" className="customInputField" id={"videolink," + value.key} type="text" rows={5} defaultValue={value.video_link && value.video_link.length > 0 ? value.video_link : ""} onInput={(event) => { ValidationOnChange(event); }} /> */}
                                                            
                                                                <Button onClick={() => { uploadFiles(2, value.key, index); }} style={{ border: "none", outline: "none", background: "rgb(166, 98, 255)", fontWeight: "500", paddingLeft: "20px", paddingRight: "20px", marginTop: "0.5%" }} >Upload Video Lecture</Button>
                                                                {value.video_link && value.video_link.length > 1 ?
                                                                <div className="documentIconsDiv">
                                                                    {/* <OverlayTrigger
                                                                        placement={"top"}
                                                                        overlay={<Tooltip>View uploaded document</Tooltip>}>
                                                                        <a href={value.proof_link} rel="noreferrer" target="_blank"><BsEye className="eyeIcon" /></a>
                                                                    </OverlayTrigger> */}
                                                                    <OverlayTrigger
                                                                        placement={"top"}
                                                                        overlay={<Tooltip>Delete uploaded Video</Tooltip>}
                                                                    >
                                                                        <label style={{ color: "red", cursor: "pointer" }} onClick={() => { deleteUploadedDoc(2, value.key, index); }}>
                                                                            <AiFillDelete style={{ fontSize: "28px", marginRight: "12px", marginLeft: "10px" }} />
                                                                        </label>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                : null}
                                                                </Col>
                                                                </Row>
                                                                {/* onClick={() => { uploadFiles(2, value.key, index); }} */}
                                                            </div>

                                                        </div>
                                                        {index !== 0 ?
                                                           
                                                                <div className="deleteButton">
                                                                     <OverlayTrigger
                                                                placement={"top"}
                                                                overlay={<Tooltip>Delete this video</Tooltip>}
                                                            >
                                                                    <Button variant="danger" style={{ fontWeight: "500", marginTop: "1.5%", backgroundColor: "#7f0a15", borderColor: "#7f0a15" }} onClick={() => { DeleteDetails(1, index); }}>
                                                                        Delete
                                                                    </Button>
                                                                    </OverlayTrigger>
                                                                </div>
                                                             : null}
                                                    </Form.Group>
                                                </div>
                                            );
                                        })
                                    }
                                    <br />
                                    <div onClick={() => { AddDetails(1); }} style={{ display: 'flex', alignItems: "center", color: " #2323a4", cursor: "pointer" }}>
                                        <GrAddCircle style={{ fontSize: "25px" }} /><span style={{ marginLeft: "5px", fontSize: "20px", fontFamily: "monospace" }}>Add More Videos</span>
                                    </div>
                                </div>

                               

                        
                        
                    </Form>
                    <div style={{ display: "flex", justifyContent: 'center', marginBottom:"20px" }}>
                        <button onClick={()=>{submit()}} style={{ marginTop: "6%", border: "none", outline: "none", borderRadius: "5px", fontWeight: "bolder", backgroundColor: "rgb(107 27 212)", fontFamily: "Poppins", padding: "5px 45px", color: "#FFFFFF" }} >Submit</button>
                    </div>
                </div>
                <br />
            </Container>
        </div>
    );
}

export default UploadCourse;