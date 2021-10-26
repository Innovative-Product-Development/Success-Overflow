
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import {Route,Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';



function App() {
  return (
    <div className="App">
     
     <Header/>
     <Switch>
     <Route path='/' exact>
     <HomePage  />
     </Route>
     <Route path='/login'  >
     <Login />
     </Route>
     <Route path='/courses' >
     <Courses/>
     </Route>
     </Switch>
     <Footer/>
     
    </div>
  );
}

export default App;
