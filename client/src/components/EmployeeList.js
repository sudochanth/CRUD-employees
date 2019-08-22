import React from 'react';
import Employee from './Employee';
import '../css/employeeList.scss';

const EmployeeList = props => {
    return (
      <div id='employeeList' className="employeeList container">
        <div className="employeeHeader">
            <h3>Employee ID</h3>
            <h3>First Name</h3>
            <h3>Last Name</h3>
            <h3>Email</h3>
            <h3>Phone Number</h3>
            <h3>Edit/Delete</h3>
          </div>

        { props.employees.map(employee =>
          <Employee {...employee} 
                    key={employee._id} 
                    deleteEmployee={props.deleteEmployee}
                    editEmployee={props.editEmployee} />
        )}
      </div>
    );
    
};

export default EmployeeList;