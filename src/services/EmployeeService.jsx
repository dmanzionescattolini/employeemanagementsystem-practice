import axios from "axios";
import Employee from "../types/Employee";


export default class EmployeeService {
    static getEmployees() {
       return axios.get("http://localhost:8080/employees");
    }

    static getEmployeeById(id){
        return axios.get("http://localhost:8080/employees/"+id);
    }
    static addEmployee(employee){
        return axios.post("http://localhost:8080/employees", employee);
    }

    static updateEmployee(employee,id){
       return axios.put("http://localhost:8080/employees/"+id, employee);
    }

    static deleteEmployee(id){
        confirm("Are you sure you want to delete this employee?");
       return  axios.delete("http://localhost:8080/employees/"+id);
    }

}