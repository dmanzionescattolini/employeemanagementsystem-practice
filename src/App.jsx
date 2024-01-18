import { MDBContainer,  MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler, MDBIcon, MDBCollapse} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeRoutes from "./routes/EmployeeRoutes";
import "./App.scss";
import Home from "./components/home/Home";
export default function App() {
  const [openNavText, setOpenNavText] = useState(false);
  return (
    <div>
      <MDBNavbar dark expand='md'  bgColor="dark">
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">Employee Management System</MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarText"
            color="white"
            onClick={() => setOpenNavText(!openNavText)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar 	 open={openNavText} >
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink   href="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/employees">Employees</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/employees/add">Add Employee</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {EmployeeRoutes}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
