import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

function AddEmployeeComponent() {

const [empId, setEmpId] = useState('');
const [eName, setEName] = useState('');
const [mobile, setMobile] = useState('');
const [salary, setSalary] = useState('');

const {id}  = useParams();

const navigation = useNavigate();



const  saveOrUpdateEmployee = (e) => {
e.preventDefault()

const employee = {empId, eName, mobile, salary};


if(id){
   EmployeeService.updateEmployee(id, employee).then((response) => {
  
   }).catch((err) => {console.log(err)})
   navigation('/employees')
}
else
{
  EmployeeService.createEmployee(employee)
  .then(reponse => console.log(reponse))
  .catch(err => console.log(err.response.data))
  
  navigation('/employees')
}




}

useEffect(() => {

  EmployeeService.getEmployeeById(id).then((response) => {
      setEmpId(response.data.empId)
      setEName(response.data.eName)
      setMobile(response.data.mobile)
      setSalary(response.data.salary)
  }).catch((err) => {console.log(err)})

}, [])


const title = () => {
   if(id){
    return <h2 className='text-center'>Update Employee</h2>
   }
   else{
    return <h2 className='text-center'>Add Employee</h2>
   }
}

  return (
    <div>
    <br/>
    <br/>
      <div className='container'>
         <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
             {
              title()
             }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                          <label className='form-label'> Employee Id :</label>
                          <input type='text' placeholder='Enter the Id' name='empId' className='form-control' value={empId}  onChange={(e) => {setEmpId(e.target.value)}}/>
                        </div>

                        <div className='form-group mb-2'>
                          <label className='form-label'> Employee Name :</label>
                          <input type='text' placeholder='Enter the Name' name='eName' className='form-control' value={eName}  onChange={(e) => {setEName(e.target.value)}}/>
                        </div>

                        <div className='form-group mb-2'>
                          <label className='form-label'> Employee Mobile Number :</label>
                          <input type='text' placeholder='Enter the Mobile Number' name='mobile' className='form-control' value={mobile}  onChange={(e) => {setMobile(e.target.value)}}/>
                        </div>

                        <div className='form-group mb-2'>
                          <label className='form-label'> Employee Salary :</label>
                          <input type='text' placeholder='Enter the Salary' name='salary' className='form-control' value={salary}  onChange={(e) => {setSalary(e.target.value)}}/>
                        </div>

                        <button className='btn btn-success' onClick={(e) => {saveOrUpdateEmployee(e)}}> Submit</button>

                        <Link to={'/employees'} className='btn btn-danger'> Cancel </Link>

                    </form>
                </div>
            </div>
         </div>

      </div>

    </div>
  )
}

export default AddEmployeeComponent;