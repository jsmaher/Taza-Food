import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Logo  from  './../../images/tazafoodlogo2.png';


const FooterPagePro = () => {
  return (
    <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
      
      <div style={{ backgroundColor: "#1c9723" }} className="py-4 d-flex align-items-center">

      <MDBContainer className="text-center text-md-left mb-4 mb-md-0">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="text-center text-md-left mb-4 mb-md-0">
            <h6 className="text-capitalize font-weight-bold">
            <img src={Logo} width="50px" align="middle"/> &nbsp;&nbsp; 
            &nbsp;&nbsp;&nbsp;
              <strong textTransform="capitalize">Taza Food</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
            Online Fast Food site in pakistan;  </p>
            <ol>
              <li>Pizza</li>
              <li>Burger</li>
              <li>McDonald’s fries</li>
              <li>French fries</li>
              <li>Cheese fries</li>
<p>etc</p>
            </ol>
          </MDBCol>
          
          <MDBCol md="3" lg="2" xl="2" className="text-center text-md-left mb-4 mb-md-0" style={{ textAlign: "right" } }>
            <h6 className="text-center text-md-left mb-4 mb-md-0">
              <strong>Subscribe Now!</strong>
            </h6>
            <hr className="text-center text-md-left mb-4 mb-md-0" style={{ width: "60px" }} />
            <p>
              <a href="#!" className="text-center text-md-left mb-4 mb-md-0">
              <i className="fab fa-twitter white-text mr-lg-4"> </i>
Twitter              </a>
            </p>
            <p>
              <a href="#!" className="text-center text-md-left mb-4 mb-md-0">
              <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
Facebook              </a>
            </p>
            <p>
              <a href="#!" className="text-center text-md-left mb-4 mb-md-0">
              <i className="fab fa-instagram white-text mr-lg-4"> </i>
Instagram              </a>
            </p>
            <p>
              <a href="#!" className="text-center text-md-left mb-4 mb-md-0">
              <i className="fab fa-youtube white-text mr-lg-4"> </i>
                Youtube
              </a>
            </p>
            <p>
              <a href="#!" className="text-center text-md-left mb-4 mb-md-0">
              <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
              Google Plus
              </a>
            </p> <p>
              <a href="#!" className="text-center text-md-left mb-4 mb-md-0">
              <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
Linkedin              </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="text-center text-md-left mb-4 mb-md-0" style={{ textAlign: "center" } }>
            <h6 className="text-center text-md-left mb-4 mb-md-0">
              <strong>Contact</strong>
            </h6>
            <hr className="text-center text-md-left mb-4 mb-md-0" style={{ width: "60px" }} />
            <p>
              <i className="fa fa-home mr-3" /> Mithi, Tharparkar
            </p>
            <p>
              <i className="fa fa-envelope mr-3" />tazafood@info.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +92 341 3746921
            </p>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
      <div className="text-center text-md-left mb-4 mb-md-0" >
        <MDBContainer fluid style={{ backgroundColor: "#808080" , textAlign: "center"  }}>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="#"> JS Rajput </a>
        </MDBContainer>
      </div>
    </MDBFooter>
   
  );
}

export default FooterPagePro;