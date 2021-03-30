import React from 'react';
import StudentRegister from "./pages/studentRegister.jsx";
import Login from "./pages/login.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import TeacherRegister from "./pages/teacherRegister.jsx";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default function App(props) {


  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/StudentRegister" component={StudentRegister} />
          <Route exact path="/StudentDashboard" component={StudentDashboard} />
          <Route exact path="/TeacherRegister" component={TeacherRegister} />
          {/* <StudentRegister></StudentRegister> */}
          {/* <Login></Login>
       */}
        </Switch>
      </Router>
    </div>
  );
}
