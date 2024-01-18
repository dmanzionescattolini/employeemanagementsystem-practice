
import { MDBContainer, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import EmployeeService from '../../../services/EmployeeService';
export default function Employees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const retrieveEmployees = async function retrieve(){
    EmployeeService.getEmployees().then(res=>{
      setEmployees(res.data);
    }).catch(err=>{
      console.log("An error was thrown while trying to retrieve the employees: ",err);
    })
    };
    retrieveEmployees();
  }, []);
  return (
    <MDBContainer fluid>
      <MDBTable>
        <MDBTableHead>
          <tr><th>Employee ID</th><th>Employee First Name</th><th>Employee Last Name</th><th>Employee Email</th><th>Actions</th></tr>
        </MDBTableHead>
        <MDBTableBody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.email}</td>
            <td><a href={`/employees/edit/${employee.id}`}>Edit</a>&nbsp;&nbsp;
              <a href={`/employees/delete/${employee.id}`}>Delete</a> &nbsp;&nbsp;
              <a href={`/employees/${employee.id}`}>View</a>
            </td>
          </tr>
        ))}
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  )
}
