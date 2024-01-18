import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeService from "../../../services/EmployeeService";
import './EditEmployee.scss';
export default function EditEmployee() {
  const id = useParams().id;
  const [employee, setEmployee] = useState();

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => {
        console.log(
          "An error was thrown while trying to retrieve the employee: ",
          err
        );
      });
  },[]);
  function handleChange(event) {
    const { id, value } = event.target;
    setEmployee({ ...employee, [id]: value });
  }
  function handleSubmit() {
    EmployeeService.updateEmployee(employee, id)
      .then((res) => {
        console.log(res.data);
        window.location.href = "/employees";
      })
      .catch((err) => {
        console.log(
          "An error was thrown while trying to update the employee: ",
          err
        );
      });
  }
  return (
    <MDBCard className="w-50 m-auto">
    <MDBCardBody>
    <MDBCardText>
        <h1 className="text-center">Edit Employee</h1>
        <label for="firstName">
          First Name:
          <br></br>
          <input
          className="mb-4"
            id="firstName"
            onChange={handleChange}
            placeholder={employee?.firstName}
            required
          />
        </label>
        <label for="lastName">
          Last Name:
          <br></br>
          <input
            className="mb-4"
            id="lastName"
            placeholder={employee?.lastName}
            type="text"
            onChange={handleChange}
          />
        </label>
        <label for="email">
          Email:
          <br></br>
          <input
            className="mb-4"
            id="email"
            type="email"
            placeholder={employee?.email}
            onChange={handleChange}
            value={employee?.email}
            required
          />
        </label>
         <button className="w-50 btn btn-sm mx-auto bg-dark text-white d-inline" type="button"   onClick={handleSubmit} >Edit Employee</button>
         </MDBCardText>
         </MDBCardBody>
    </MDBCard>
  );
}
