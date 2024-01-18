import { MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import './Home.scss';
export default function Home() {
  return (
    <MDBContainer>
        <h1>Welcome to the Employee Management Application</h1>
        <p>Click on the links below to navigate to the different pages</p>
        <p>Employees Page: <a href="/employees">Go</a></p>
        
    </MDBContainer>
  )
}
