import React from "react";
import { MDBContainer, MDBIcon } from "mdbreact";
import "./index.css"

const SearchPage = () => {
  return (
     
      
     
      <div className="input-group form-sm form-2 pl-0">
        <input type="text" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <span className="input-group-text">
            <MDBIcon icon="search"  />
          </span>
        </div>
      </div>
      
  );
}

export default SearchPage;