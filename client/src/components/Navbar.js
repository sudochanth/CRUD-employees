import React from 'react';
import '../css/navbar.scss';

const Navbar = ({ visibleToggle }) => {
  return (
    <div className="navbar">
      <a href='#'>View Employees</a>
      <a href='#employeeForm' onClick={visibleToggle}>Create Employee</a>
    </div>
  );
};

export default Navbar;