import axios from 'axios';


const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8082/employees";

const EMPLOYEE_BASE_REST_API_URL_ADDEMPLOYEE = "http://localhost:8082/employee";


class EmployeeService 
{
   
    getEmployee(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL);
    }

    createEmployee(employee){
      return  console.log(employee), axios.post(EMPLOYEE_BASE_REST_API_URL_ADDEMPLOYEE, employee)
    }

    getEmployeeById(employeeId) {
      return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId)
    }

    updateEmployee(employeeId, employee) {
          return axios.put(EMPLOYEE_BASE_REST_API_URL_ADDEMPLOYEE + '/' + employeeId, employee )
    }
    
    deleteEmployee(employeeId){
       return axios.delete(EMPLOYEE_BASE_REST_API_URL_ADDEMPLOYEE + '/' + employeeId);
    }

}

export default new EmployeeService();