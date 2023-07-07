import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(
        () => {

            getEmployees()
            
        }, []
    )

    const getEmployees = () => {
        EmployeeService.getEmployee().then((response) => {
            setEmployees(response.data) 
            console.log(response.data);
         }).catch((err) => {
             console.log(err);
         })
    }

  const deleteEmployee = (employeeId) => {
       EmployeeService.deleteEmployee(employeeId).then((response) => {
        getEmployees();
       }).catch((err) => {
        console.log(err)})
  }
    return (
        <div className="container">
            <h2 className="text-center ">List Employees</h2>
            <Link to='/add-employee' className='btn btn-primary mb-2'> Add Employee </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Mobile</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee => 
                            <tr key={employee.empId}>
                                <td>{employee.empId}</td>
                                <td>{employee.eName}</td>
                                <td>{employee.mobile}</td>
                                <td>{employee.salary}</td>
                                <td>
                                    <Link className='btn btn-info' to={`/edit-employee/${employee.empId}`}> Update</Link>
                                    <button className='btn btn-danger' onClick={() => deleteEmployee(employee.empId)} style={{marginLeft:"10px"}}> Delete </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent

