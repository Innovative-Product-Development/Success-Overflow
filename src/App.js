
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import {Route,Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import Web_dev from './components/Courses/Web_dev/Web_dev'
import Register2 from './components/Register2/Register2';
import UploadCourse from './components/UploadCourse/UploadCourse';


function App() {
  return (
    <div className="App">
     
     <Header/>
     <Switch>
     <Route path='/' exact>
        <HomePage  />
     </Route>
     <Route path='/login' exact >
        <Login />
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
     <Route path='/courses/web_dev' >
     <Web_dev/>
     </Route>
     </Switch>
     <Footer/>
     
    </div>
  );
}

export default App;
