import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Header/Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { setAuth, setToken } from "../../store/authSlice"
import { useHistory } from 'react-router';

const Header = () => {

  const history = useHistory();
  const dispatch = useDispatch()
  const { isAuth, isStudent, user } = useSelector((state)=>state.auth)

  function logout() {
    dispatch(setToken({token:''}))
    dispatch(setAuth({user:null}))
    localStorage.removeItem("token")
    history.push("/")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">SuccessOverFLOW</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li> */}
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/courses">Courses</NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/chat">Chat</NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/domain/Web Development">Web dev teachers</NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/notifications">Notification</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Yoga">Yoga</NavLink>
              </li>
              
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li> */}
              {
                isAuth && !isStudent && 
                <li className="nav-item">
                <NavLink className="nav-link" to="/uploadcourse">Upload Course</NavLink>
              </li>
              }

              {
                isAuth && 
                <li className="nav-item">
                <NavLink className="nav-link" to={`/profile/${user._id}`}>Profile</NavLink>
              </li>
              }

              

              {
                  ( isAuth ) ? 
                  <li className="nav-item">
                      <NavLink className="nav-link" onClick={()=>{logout()}} to="/">Logout</NavLink>
                  </li> : <li className="nav-item">
                <NavLink className="nav-link" to="/login">Sign Up</NavLink>
              </li>
              }
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">logout</NavLink>
              </li> */}


            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
