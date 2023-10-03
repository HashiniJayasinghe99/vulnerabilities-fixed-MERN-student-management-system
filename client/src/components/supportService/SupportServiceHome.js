import React from "react";
import "./SupportService.css";
import theNextYou from "../images/SupportServiceImages/main image.png";
import "./Supportserviceform.css";

export default function SMenu() {
  return (
    <div className="contact">
      <h1 className="supporTitle">
        {" "}
        Support Services
      </h1>
    <br></br>
      <div className="menubtn">
      <a href="/HostalDetails">
          <button
            type="button"
            className="btn btn-secondary"
            style={{ width: "20%", fontSize: "140%", height:"115px", marginTop: "20px",borderBottomLeftRadius:"30px",borderColor:"black",backgroundColor:"#8000ff"}}
          >
            <b>Hostel Services</b>
          </button>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/TransportDetails">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "20%", fontSize: "140%", height:"115px", marginTop: "20px",borderBottomLeftRadius:"30px",borderColor:"black",backgroundColor:"#8000ff"}}
          >
            <b>Transport Services</b>
          </button>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/ContactDetails">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "20%", fontSize: "140%", height:"115px", marginTop: "20px",borderBottomLeftRadius:"30px",borderColor:"black",backgroundColor:"#8000ff"}}
          >
            <b>Contact Details</b>
          </button>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        
        </div>
        
        <div className="menuimage">
        <img src={theNextYou} alt="nextYouImage" />
      </div>{" "}
      <br /> <br /> <br />
    </div>
  );
}
