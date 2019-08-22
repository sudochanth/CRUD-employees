import React, {Component} from 'react';
import EmployeeForm from './EmployeeForm';
import '../css/employee.scss';


class Employee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggled: false,
      employeeId: props.employeeId,
      firstName: props.firstName,
      lastName: props.lastName,
      email: props.email,
      phoneNumber: props.phoneNumber
    }
  }

  toggler = () => {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }))
  }

  onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onButtonSubmit = (e) => {
    e.preventDefault();
    const updates = {
      employeeId: this.state.employeeId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber
    };
    this.props.editEmployee(this.props._id, updates);
    this.toggler();
  }

  render() {
    const { employeeId, firstName, lastName, email, phoneNumber, _id, deleteEmployee } = this.props;
    return (
      <div className='employee'>
        { !this.state.isToggled ?
        <div className='table'>
          <h5 className='header'>Employee ID:</h5>
          <p>{employeeId}</p>
          <h5 className='header'>First Name:</h5>
          <p>{firstName}</p>
          <h5 className='header'>Last Name:</h5>
          <p>{lastName}</p>
          <h5 className='header'>Email:</h5>
          <p>{email}</p>
          <h5 className='header'>Phone Number:</h5>
          <p>{phoneNumber}</p>
          <p className='employeeButtons'>
            <button className='btn btn-sm btn-outline-info' onClick={this.toggler}>Edit</button>
            <button className='btn btn-sm btn-outline-danger' onClick={() => deleteEmployee(_id)}>Delete</button>
          </p>
        </div>
        :
        <div className='editForm'>
          <EmployeeForm 
            onHandleChange={this.onHandleChange}
            onButtonSubmit={this.onButtonSubmit}
            employeeId={this.state.employeeId}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phoneNumber={this.state.phoneNumber}
            btnText='Update Employee' />
        </div>
        }
      </div>

    );
  }
} 

export default Employee;