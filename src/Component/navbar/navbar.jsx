import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon } from "mdbreact";
import Logo from './../../images/tazafoodlogo2.png'

class NavbarPage extends Component {
state = {
  collapseID: ""
};

toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));
 
render() {
  return (
    
      <MDBNavbar dark expand="md" sticky style={{
          backgroundColor:"#1c9723"
      }}>
        <MDBNavbarBrand>
          <strong className="white-text"> <img src={Logo} alt="" width="83px" height="70px"/> &nbsp;&nbsp;&nbsp;Taza Food</strong>
        </MDBNavbarBrand>
        <div className="input-group form-sm form-2 pl-0" >
        <input type="text" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <span className="input-group-text">
            <MDBIcon icon="search"  />
          </span>
        </div>
      </div>
        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
        
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
          
          <MDBNavbarNav right>
           
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" className="mr-1" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem href="">My account</MDBDropdownItem>
                  <MDBDropdownItem href="">Log out</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>

   
    );
  }
}

export default NavbarPage;