import React from 'react';
import StudentRegister from "./pages/studentRegister.jsx";
import Login from "./pages/login.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import TeacherRegister from "./pages/teacherRegister.jsx";
import Container from "./pages/container.jsx";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Otp from './pages/otp.jsx';
import Home from './pages/Home.jsx';
import Newpassword from './pages/newPassword.jsx';
import Teacher_Dashboard from './pages/Teacher_Dashboard' 
import HOD_Dashboard from './pages/HOD_Dashboard'
import PrincipalHomepage from './pages/Principal_Dashboard.jsx';
import Principal_faculty_page from './pages/principal-faculty-page.jsx'
import Principal_hod_page from './pages/principal-hod-page.jsx'


export default function App(props) {


  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/StudentRegister" component={StudentRegister} />
          <Route exact path="/StudentDashboard" component={StudentDashboard} />
          <Route exact path="/TeacherRegister" component={TeacherRegister} />
          <Route exact path="/forgotpassword" component={Container}/>
          <Route exact path="/otp" component={Otp}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/newPassword" component={Newpassword}/>
          <Route exact path="/TeacherDashboard" component={Teacher_Dashboard}/>
          <Route exact path="/HOD_Dashboard" component={HOD_Dashboard}/>
          <Route exact path="/Principal_HomeDash" component={PrincipalHomepage}/>
          <Route exact path="/Principal_facultyDash" component={Principal_faculty_page}/>
          <Route exact path="/Principal_hodDash" component={Principal_hod_page}/>



          
        </Switch>
      </Router>
    </div>
  );
}
