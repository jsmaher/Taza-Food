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

const FormPage = (props) => {
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
                  Create Account
                </h3>
                </center>
             
              <form>
                <div className="grey-text">
                 
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                onClick={()=>props.history.push("/signupres")}
                 style={{
                  backgroundColor:"#1c9723",
                  color:"white",
                  width:"70%"
            }}
                  color="#1c9723"
                  className="mb-3"
                  type="button"
                >
                  Restaurant
                </MDBBtn>
                <MDBBtn
                    onClick={()=>props.history.push("/signupuser")}
                 style={{
                  backgroundColor:"#1c9723",
                  color:"white",
                  width:"70%"
            }}
                  color="#1c9723"
                  className="mb-3"
                  type="button"
                >
User                </MDBBtn>
              </div>
              </form>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;