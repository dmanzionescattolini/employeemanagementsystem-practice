import { MDBBtn, MDBCard, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import './addemployee.scss';
import EmployeeService from "../../../services/EmployeeService";
export default function AddEmployee() {
  const [employee, setEmployee] = useState();
  function handleChange(event) {
    const { id, value } = event.target;
    setEmployee({ ...employee, [id]: value });
  }
  function handleSubmit() {
    EmployeeService.addEmployee(employee)
      .then((res) => {
        console.log(res.data);
        window.location.href = "/employees";
      })
      .catch((err) => {
        console.log(
          "An error was thrown while trying to add the employee: ",
          err
        );
      });
  }
  return (
    <MDBContainer className="">
      <MDBCard>
        <MDBInput
          className="mb-4"
          label="First Name"
          id="firstName"
          onChange={handleChange}
          required
        />

        <MDBInput
          className="mb-4"
          label="Last Name"
          id="lastName"
        
          onChange={handleChange}
        />
        <MDBInput
          className="mb-4"
          label="Email"
          id="email"
          type="email"
          onChange={handleChange}
          required
        />
        <MDBBtn type="button" color="black" onClick={handleSubmit}>
          {" "}
          Add Employee
        </MDBBtn>
      </MDBCard>
    </MDBContainer>
  );
}
