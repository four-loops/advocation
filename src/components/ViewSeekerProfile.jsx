import React from 'react';
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';

const ViewSeekerProfile = (props) => {
  return (
    <NavLink to='/seekerprofile'>
      <Button variant="primary" size="lg" block>
        View/Edit Profile
      </Button>
    </NavLink>
  );
};

export default ViewSeekerProfile;