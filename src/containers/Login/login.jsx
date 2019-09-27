import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";
import { Link} from "react-router-dom";
import Logo from './../../images/tazafoodlogo.png'

const FormPage = () => {
  return (
    <MDBContainer>
        <br/><br/>
        <br/><br/>
      <MDBRow center>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              
              <center>
          <img src={Logo} alt="" width="80px"/>
                <h3  style={{
                   
                   color:"#1c9723"
             }}>
Sign In                </h3>
                </center>
             
              <form>
                <div className="grey-text"  >
                  <MDBInput
                    label="Email"
                   
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Password"
                   
                    group
                    type="password"
                    validate
                  />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                 style={{
                  backgroundColor:"#1c9723",
                  color:"white"
            }}
                  color="#c90044"
                  className="mb-3"
                  type="button"
                >
                  Sign In
                </MDBBtn>
              </div>
              </form>
                <div >
                  <p>Not a Register?
                    <br />
                    <Link to="/register">Sign Up</Link> </p>
              
                </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;