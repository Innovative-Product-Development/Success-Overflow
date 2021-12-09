import React from 'react';
import '../Web_dev/Web_dev.css'
import logo from '../../Images/web_dev.svg'
import '../../../../node_modules/font-awesome/css/font-awesome.min.css'
import { NavLink } from 'react-router-dom';

const Web_dev = () => {

    // const[course_details,setCourseDetails] = useState([]);
    const course_details = [
        {
            "course_id": "1",
            "course_name": "HTML Tutorial For Beginners In Hindi (With Notes)",
            "course_description": "Learn HTML in One Video: In this video, we will see how to create beautiful websites using Html.",
            "course_thumbnail": "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHRtbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "teacher_name": "Harry bhai",
            "likes": "60k",
            "students_enrolled": "25k",
            "no_of_videos": "2",
            "video_links": [
                "https://www.youtube.com/embed/BsDoLVMnmZs",
                ""
            ],
            "comments": "100",
            "teacher_description": "PHD",
            "isrecommended": true
        },
        {
            "course_id": "2",
            "course_name": "CSS Tutorial In Hindi (With Notes)",
            "course_description": "CSS Tutorial For Beginners in Hindi: In this CSS3 tutorial in Hindi we will learn everything you need to learn about CSS from scratch.  ",
            "course_thumbnail": "https://images.unsplash.com/photo-1505685296765-3a2736de412f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3NzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "teacher_name": "Lisa Dutt",
            "likes": "36k",
            "students_enrolled": "12k",
            "no_of_videos": "1",
            "video_links": [
                "https://www.youtube.com/embed/Edsxf_NBFrw",
                ""
            ],
            "comments": "2000",
            "teacher_description": "ABC",
            "isrecommended": true
        },
        {
            "course_id": "3",
            "course_name": "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
            "course_description": "Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. ",
            "course_thumbnail": "https://images.unsplash.com/photo-1593720216276-0caa6452e004?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGphdmFzY3JpcHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "teacher_name": "Mosh",
            "likes": "100k",
            "students_enrolled": "20k",
            "no_of_videos": "1",
            "video_links": [
                "https://www.youtube.com/embed/W6NZfCO5SIk",
                ""
            ],
            "comments": "200",
            "teacher_description": "DEF",
            "istoprating":true
        },
        {
            "course_id": "4",
            "course_name": "React JS Crash Course 2021",
            "course_description": "Get started with React in this crash course. We will be building a task tracker app and look at components, props, state, hooks, working with an API and more.",
            "course_thumbnail": "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWN0JTIwanN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "teacher_name": "XYZ",
            "likes": "50k",
            "students_enrolled": "21k",
            "no_of_videos": "1",
            "video_links": [
                "https://www.youtube.com/embed/w7ejDZ8SWv8",
                ""
            ],
            "comments": "50",
            "teacher_description": "GHI"
        },
        {
            "course_id": "5",
            "course_name": "Learn Bootstrap in less than 20 minutes - Responsive Website Tutorial",
            "course_description": "This is a quick introduction on how to get started with Bootstrap 5 Alpha.",
            "course_thumbnail": "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9vdHN0cmFwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "teacher_name": "Raddy the Brand",
            "likes": "45k",
            "students_enrolled": "10k",
            "no_of_videos": "1",
            "video_links": [
                "https://www.youtube.com/embed/eow125xV5-c",
                ""
            ],
            "comments": "150",
            "teacher_description": "JKL"
        },
        {
            "course_id": "6",
            "course_name": "Front End Full Course | Front End Development Tutorial | Front End Development Course | Simplilearn",
            "course_description": "This video on Front End Development covers all the important front end development tools and technologies.  ",
            "course_thumbnail": "https://images.unsplash.com/photo-1549082969-62ab24fa9d7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJvbnRlbmRkZXZlbG9wZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "teacher_name": "ABC",
            "likes": "34k",
            "students_enrolled": "7k",
            "no_of_videos": "1",
            "video_links": [
                "https://www.youtube.com/embed/Q8NPQ2RgWyg",
                ""
            ],
            "comments": "120",
            "teacher_description": "MNO"
        },
        {
            "course_id": "7",
            "course_name": "Web Development (Backend) Full Course in One Video | Full Tutorial for Beginners to Expert [Hindi]",
            "course_description": "Web development backend",
            "course_thumbnail": "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "teacher_name": "Geeky Hub",
            "likes": "34k",
            "students_enrolled": "9k",
            "no_of_videos": "1",
            "video_links": [
                "https://www.youtube.com/embed/e45w22_N0jc",
                ""
            ],
            "comments": "110",
            "teacher_description": "PQR"
        },
        {
            "course_id": "8",
            "course_name": "Node Js Tutorial in Hindi ",
            "course_description": "This node js tutorial in Hindi will cover everything you will ever need to learn about Node. We will see topics like node js fs module, os module, Common JS vs ES6 modules, ",
            "course_thumbnail": "https://media.istockphoto.com/photos/nodejs-inscription-against-laptop-and-code-background-picture-id1347542592?b=1&k=20&m=1347542592&s=170667a&w=0&h=L7Vdq9Ae4cAlL-xZ_EqZog1wixnNUGOJHmEjhW868Xg=",
            "teacher_name": "Harry Genova",
            "likes": "54k",
            "students_enrolled": "23k",
            "no_of_videos": "1",
            "video_links": [
                "https://www.youtube.com/embed/BLl32FvcdVM",
                ""
            ],
            "comments": "99",
            "teacher_description": "STQ"
        },
        {
            "course_id": "9",
            "course_name": "MongoDB Crash Course",
            "course_description": "MongoDB is a complex NoSQL database with a ton of commands and intricacies. In this video I will be breaking down all the most important commands and showing you that MongoDB is actually a lot simpler to get started with than it looks.",
            "course_thumbnail": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9uZ29kYnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "teacher_name": "ABC",
            "likes": "12k",
            "students_enrolled": "2k",
            "no_of_videos": "1",
            "video_links": [
                "https://www.youtube.com/embed/ofme2o29ngU",
                ""
            ],
            "comments": "10",
            "teacher_description": "UVW"
        }
    ]

    return (
        <>
            {/* <section  className="section section-course" style={{backgroundImage:`url("https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`}}>
				<div className="container" style={{maxWidth:"95%", width:"100%",boxShadow:"none",background:"transparent"}}>
					<div className="banner-wrapper m-auto text-center">
						<div className="banner-header">
							
							<h1>The Portal <br/>of the <span>students</span>, by the <span>students</span> <br/>for the <span>students</span></h1>
							<p style={{marginTop:"30px", color:"#f4eaff"}}>SuccessOverFLOW aims at holistic development of student community</p>
						</div>
                         
						
					
						
					</div>
				</div>
			</section> */}
            <div className="top-banner" >
                <div className="text12">
                    <h1 className="course-title"><span>Web</span> Development</h1>
                    <p className="course-para">Design Code And Beautify</p>
                    <button className="actionbtn">Get Started</button>
                </div>
                <div className="course-image">
                    <img alt="logo" src={logo}></img>
                </div>
            </div>


            <div className='main'>
                <div className="course-section1">
                    {course_details.map(course => {
                        return (
                            <div className="card card12">
                                <img src={course.course_thumbnail} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{course.course_name}</h5>
                                    { (course.isrecommended && course.isrecommended === true) && 
                                    <div className="recommendDiv">
                                        <button className="recommend">Recommended</button>
                                    </div>
                                    }
                                    { (course.istoprating && course.istoprating === true) && 
                                    <div className="recommendDiv">
                                        <button className="recommend">Best Seller</button>
                                    </div>
                                    }
                                    <p className="card-text">{course.course_description}</p>
                                    <div className="part-1">
                                        <p className="teacher">Teacher(<i className="fa fa-user" />) : {course.teacher_name}</p>
                                        <p className="likes" style={{ paddingRight: '1rem' }}>Likes(<i className="	fa fa-thumbs-up" />): {course.likes}</p>
                                    </div>
                                    <div className="part-1">
                                        <p className="enrolled">Enrolled(<i className="fa fa-user-circle-o" />) : {course.students_enrolled}</p>
                                        <p className="videos" style={{ paddingRight: '1rem' }}>Videos(<i className="fa fa-code" />) : {course.no_of_videos} </p>
                                    </div>
                                    <NavLink to='/courseenroll' className="courselink">Go to course</NavLink>
                                </div>
                            </div>

                        )
                    }, [])
                    }
                </div>
                
            </div>
            {/* <div className="row row-cols-1 row-cols-md-3 mt-5 g-4" key={course.course_id}>
                        <div className="col" >
                            <div className="card h-100" >
                                <img src={course.course_thumbnail} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{course.course_name}</h5>
                                    <p className="card-text">{course.course_description}</p>
                                    <div className="part-1">
                                        <p className="teacher">Teacher(<i className="fa fa-user" />) : {course.teacher_name}</p>
                                        <p className="likes" style={{ paddingRight: '1rem' }}>Likes(<i className="	fa fa-thumbs-up" />): {course.likes}</p>
                                    </div>
                                    <div className="part-1">
                                        <p className="enrolled">Enrolled(<i className="fa fa-user-circle-o" />) : {course.students_enrolled}</p>
                                        <p className="videos" style={{ paddingRight: '1rem' }}>Videos(<i className="fa fa-code" />) : {course.no_of_videos} </p>
                                    </div>
                                </div>
                            </div>
                        </div> */}

            {/* <div className="col">
                            <div className="card h-100">
                                <img src={course.course_thumbnail} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{course.course_name}</h5>
                                    <p className="card-text">{course.course_description}</p>
                                    <div className="part-1">
                                        <p className="teacher">Teacher(<i className="fa fa-user" />) : {course.teacher_name}</p>
                                        <p className="likes" style={{ paddingRight: '1rem' }}>Likes(<i className="	fa fa-thumbs-up" />): {course.likes}</p>
                                    </div>
                                    <div className="part-1">
                                        <p className="enrolled">Enrolled(<i className="fa fa-user-circle-o" />) : {course.students_enrolled}</p>
                                        <p className="videos" style={{ paddingRight: '1rem' }}>Videos(<i className="fa fa-code" />) : {course.no_of_videos} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={course.course_thumbnail} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{course.course_name}</h5>
                                    <p className="card-text">{course.course_description}</p>
                                    <div className="part-1">
                                        <p className="teacher">Teacher(<i className="fa fa-user" />) : {course.teacher_name}</p>
                                        <p className="likes" style={{ paddingRight: '1rem' }}>Likes(<i className="	fa fa-thumbs-up" />): {course.likes}</p>
                                    </div>
                                    <div className="part-1">
                                        <p className="enrolled">Enrolled(<i className="fa fa-user-circle-o" />) : {course.students_enrolled}</p>
                                        <p className="videos" style={{ paddingRight: '1rem' }}>Videos(<i className="fa fa-code" />) : {course.no_of_videos} </p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
            {/* <div className="col">
                            <div className="card h-100">
                                <img src={course.course_thumbnail} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{course.course_name}</h5>
                                    <p className="card-text">{course.course_description}</p>
                                    <div className="part-1">
                                        <p className="teacher">Teacher(<i className="fa fa-user" />) : {course.teacher_name}</p>
                                        <p className="likes" style={{ paddingRight: '1rem' }}>Likes(<i className="	fa fa-thumbs-up" />): {course.likes}</p>
                                    </div>
                                    <div className="part-1">
                                        <p className="enrolled">Enrolled(<i className="fa fa-user-circle-o" />) : {course.students_enrolled}</p>
                                        <p className="videos" style={{ paddingRight: '1rem' }}>Videos(<i className="fa fa-code" />) : {course.no_of_videos} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={course.course_thumbnail} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{course.course_name}</h5>
                                    <p className="card-text">{course.course_description}</p>
                                    <div className="part-1">
                                        <p className="teacher">Teacher(<i className="fa fa-user" />) : {course.teacher_name}</p>
                                        <p className="likes" style={{ paddingRight: '1rem' }}>Likes(<i className="	fa fa-thumbs-up" />): {course.likes}</p>
                                    </div>
                                    <div className="part-1">
                                        <p className="enrolled">Enrolled(<i className="fa fa-user-circle-o" />) : {course.students_enrolled}</p>
                                        <p className="videos" style={{ paddingRight: '1rem' }}>Videos(<i className="fa fa-code" />) : {course.no_of_videos} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={course.course_thumbnail} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{course.course_name}</h5>
                                    <p className="card-text">{course.course_description}</p>
                                    <div className="part-1">
                                        <p className="teacher">Teacher(<i className="fa fa-user" />) : {course.teacher_name}</p>
                                        <p className="likes" style={{ paddingRight: '1rem' }}>Likes(<i className="	fa fa-thumbs-up" />): {course.likes}</p>
                                    </div>
                                    <div className="part-1">
                                        <p className="enrolled">Enrolled(<i className="fa fa-user-circle-o" />) : {course.students_enrolled}</p>
                                        <p className="videos" style={{ paddingRight: '1rem' }}>Videos(<i className="fa fa-code" />) : {course.no_of_videos} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={course.course_thumbnail} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{course.course_name}</h5>
                                    <p className="card-text">{course.course_description}</p>
                                    <div className="part-1">
                                        <p className="teacher">Teacher(<i className="fa fa-user" />) : {course.teacher_name}</p>
                                        <p className="likes" style={{ paddingRight: '1rem' }}>Likes(<i className="	fa fa-thumbs-up" />): {course.likes}</p>
                                    </div>
                                    <div className="part-1">
                                        <p className="enrolled">Enrolled(<i className="fa fa-user-circle-o" />) : {course.students_enrolled}</p>
                                        <p className="videos" style={{ paddingRight: '1rem' }}>Videos(<i className="fa fa-code" />) : {course.no_of_videos} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={course.course_thumbnail} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{course.course_name}</h5>
                                    <p className="card-text">{course.course_description}</p>
                                    <div className="part-1">
                                        <p className="teacher">Teacher(<i className="fa fa-user" />) : {course.teacher_name}</p>
                                        <p className="likes" style={{ paddingRight: '1rem' }}>Likes(<i className="	fa fa-thumbs-up" />): {course.likes}</p>
                                    </div>
                                    <div className="part-1">
                                        <p className="enrolled">Enrolled(<i className="fa fa-user-circle-o" />) : {course.students_enrolled}</p>
                                        <p className="videos" style={{ paddingRight: '1rem' }}>Videos(<i className="fa fa-code" />) : {course.no_of_videos} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={course.course_thumbnail} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{course.course_name}</h5>
                                    <p className="card-text">{course.course_description}</p>
                                    <div className="part-1">
                                        <p className="teacher">Teacher(<i className="fa fa-user" />) : {course.teacher_name}</p>
                                        <p className="likes" style={{ paddingRight: '1rem' }}>Likes(<i className="	fa fa-thumbs-up" />): {course.likes}</p>
                                    </div>
                                    <div className="part-1">
                                        <p className="enrolled">Enrolled(<i className="fa fa-user-circle-o" />) : {course.students_enrolled}</p>
                                        <p className="videos" style={{ paddingRight: '1rem' }}>Videos(<i className="fa fa-code" />) : {course.no_of_videos} </p>
                                    </div>
                                </div>
                            </div>
                        </div> */}

            {/* </div> */}


        </>
    )
}

export default Web_dev
