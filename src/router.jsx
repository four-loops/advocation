import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home.jsx'
import ViewCandidates from './components/CandidateList.jsx';
import Seeker from './components/Seeker.jsx';
import GiverLanding from './components/GiverLanding.jsx';
import GiverSignUp from './components/GiverSignUp.jsx';
import SeekerSignUp from './components/SeekerSignUp.jsx';
import JobList from './components/JobList.jsx';

function RouteManager() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/ViewCandidates" component={ViewCandidates} />
<<<<<<< HEAD
=======
        <Route path="/GiverLanding" component={GiverLanding} />
>>>>>>> fb9ff4b56e291a1ab99d6bce4f6eb1918ae3d544
        <Route path="/GiverSignUp" component={GiverSignUp} />
        <Route path="/SeekerSignUp" component={SeekerSignUp} />
        <Route path="/seeker" component={Seeker} />
        <Route path="/jobs" component={JobList} />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ViewCandidates">ViewCandidates</Link>
          </li>
          <li>
            <Link to="/Seeker">Seeker Home</Link>
          </li>
          <li>
            <Link to="/GiverLanding">Giver Landing</Link>
            <Link to="/GiverSignUp">Giver Sign Up Form</Link>
          </li>
          <li>
            <Link to="/SeekerSignUp">Seeker Sign Up Form</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}

export default RouteManager;