import React from 'react'
import { Route } from 'react-router-dom'
import Employees from '../components/employees/Employees/Employees';
import Employee from '../components/employees/Employee/Employee';
import EditEmployee from '../components/employees/EditEmployee/EditEmployee';
import AddEmployee from '../components/employees/AddEmployee/AddEmployee';

 const EmployeeRoutes = 
  
    <>
        <Route path="/employees" element={<Employees/>}/>
        <Route path="/employees/:id" element={<Employee/>}/>
        <Route path="/employees/edit/:id" element={<EditEmployee/>}/>
        <Route path="/employees/add" element={<AddEmployee/>}/>	
        
   </>
  
 export default EmployeeRoutes;
