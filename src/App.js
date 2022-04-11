
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import {Route,Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import WebDev from './components/Courses/Web_dev/Web_dev'
import Register2 from './components/Register2/Register2';
import UploadCourse from './components/UploadCourse/UploadCourse';
import CourseEnroll from './components/Courses/CourseEnroll/CourseEnroll';
import SingleCourse from './components/Courses/SingleCourse/SingleCourse';
import Domains from "./components/Domains/Domain"
import SingleDomain from "./components/Domains/SingleDomain/SingleDomain"
import Notification from './components/Notification/Notification';
import Messenger from './components/Chat/Messenger/Messenger';
import Profile from './components/Profile/Profile';
import Yoga from './components/Yoga/Yoga';

function App() {
  return (
    <div className="App">
     
     <Header/>
     <Switch>
     <Route path='/' exact>
        <HomePage />
     </Route>
     <Route path='/login' exact >
        <Login />
     </Route>
     <Route path='/chat' exact >
       <Messenger/>
     </Route>
     <Route path='/details' exact >
        <Register2 />
     </Route>
     <Route path='/uploadcourse' exact >
         <UploadCourse/>
     </Route>
     
     <Route path='/courses' exact >
         <Courses/>
     </Route>
     <Route path='/yoga' exact >
         <Yoga/>
     </Route>
     
     <Route path='/courses/web_dev' >
         <WebDev/>
     </Route>
     {/* <Route exact path='/details/:sapId' render={(props) => <Details {...props} />}></Route> */}
     <Route path='/courseenroll/:courseId' exact render={(props) => <CourseEnroll {...props} />}>
     </Route>
     <Route path='/singlecourse/:courseId' exact render={(props) => <SingleCourse {...props} />}>
     </Route>

     <Route path='/profile/:userId' exact render={(props) => <Profile {...props} />}>
     </Route>

     <Route path="/notifications" exact>
       <Notification/>
     </Route>
     <Route path="/domains" exact>
       <Domains/>
     </Route>
     <Route path="/domain/:domain" exact render={(props) => <SingleDomain {...props} />}>
     </Route>
    

     </Switch>
     <Footer/>
     
    </div>
  );
}

export default App;
