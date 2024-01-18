import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardLink,
  MDBCardText,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./employee.scss";

import React, { useEffect, useState } from "react";
import EmployeeService from "../../../services/EmployeeService";
import { useParams } from "react-router-dom";

export default function Employee() {
  const  params  = useParams();
  const id=params.id;
  const [employee, setEmployee] = useState();
  useEffect(() => {
    const fetchEmployee = async function(){

        let emp = await EmployeeService.getEmployeeById(id);
        setEmployee(emp.data);
        console.log(emp.data);
    }
    fetchEmployee();
  },[]);
  return (
      <MDBCard>
        <MDBIcon icon="user" />
       <MDBCardBody>
         <MDBCardText>
           <p>ID: {employee.id}</p>
           <p>First Name: {employee.firstName}</p>
           <p>Last Name: {employee.lastName}</p>
           <p>Email: {employee.email}</p>
         </MDBCardText>
       </MDBCardBody>
       <MDBCardFooter>
         <MDBCardLink href={`/employees/edit/${employee.id}`}>Edit</MDBCardLink>
         <MDBCardLink href={`/employees/delete/${employee.id}`}>
           Delete
         </MDBCardLink>
       </MDBCardFooter>
     </MDBCard>

  );
}
