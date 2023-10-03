import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Supportserviceform.css";



function AddTransport() {

  const [valid, setValid] = useState(false);
  const [transport, setTransport] = useState({
  transportID: "",
  vehicleType: "",
  ownerName: "",
  capacity: "",
  coverage: "",
  time:"",
  contactNo:"",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault()

    axios
      .post("http://localhost:5000/api/transportdetails",transport)
      .then(() => {
        alert("Transport details are added");
        setValid(true);
        navigate("/TransportDetails");
      })
      .catch((err) => {
        alert(err);
      });

      setTransport({
        transportID: "",
        vehicleType: "",
        ownerName: "",
        capacity: "",
        coverage: "",
        time:"",
        contactNo:"",
      });

    }
    function handleChange(event) {
      const { name, value } = event.target;
  
      setTransport((preValue) => {
        return {
          ...preValue,
          [name]: value,
        };
      });
    }
  
    

    
  
  
  
  
  return (
    <div className="">
    <br></br>
    
        <h2 className="heading-s">   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; Add Transport Service </h2>
        <br></br><br></br>
          
          <div className="form-transport">
      <div className="formStyle-s">
        <form onSubmit={sendData}>
     

        <div className="form-group-s row">
            <label for="transportID" className="col-sm-2 col-form-label">
         <b> Transport Id </b>
            </label>
            <div className="col-sm-10 supLabel">
              <input
                type="text"
                className="form-s-control"
                id="transportID"
                name="transportID"
                placeholder="enter transport id"
                onChange={handleChange}
                value={transport.transportID}
                unique
                required
              />
            </div>
          </div>

          <div className="form-group-s row">
            <label for="vehicleType" className="col-sm-2 col-form-label">
          <b>  vehicle Type </b> 
            </label>
            <div className="col-sm-10 supLabel">
              <select
                type="text"
                className="form-s-control"
                id="vehicleType"
                name="vehicleType"
                onChange={handleChange}
                value={transport.vehicleType}
                required


              >
              
                 <option value="Van">Van</option>
                  <option value="Bus">Bus</option>
                 <option value="Three Wheeler">Three Wheeler</option>
                  <option value="Car">Car</option>
                </select>

              
            </div>
          </div>
          <div className="form-group-s row">
            <label for="ownerName" className="col-sm-2 col-form-label">
           <b> owner Name </b>
            </label>
            <div className="col-sm-10 supLabel">
              <input
                type="Text"
                className="form-s-control"
                id="ownerName"
                name="ownerName"
                placeholder="enter name"
                onChange={handleChange}
                value={transport.ownerName}
                required
              />
            </div>
          </div>

          <div className="form-group-s row">
            <label for="capacity" className="col-sm-2 col-form-label">
           <b> capacity </b>
            </label>
            <div className="col-sm-10 supLabel">
              <input
                type="text"
                className="form-s-control"
                id="capacity"
                name="capacity"
                placeholder="enter capacity"
                onChange={handleChange}
                value={transport.capacity}
                required
              />
            </div>
          </div>

          <div className="form-group-s row">
            <label for="coverage" className="col-sm-2 col-form-label">
            <b> coverage </b>
            </label>
            <div className="col-sm-10 supLabel">
              <input
                type="text"
                className="form-s-control"
                id="coverage"
                name="coverage"
                placeholder="enter coverage areas"
                onChange={handleChange}
                value={transport.coverage}
                required
              />
            </div>
          </div>


          <div className="form-group-s row">
            
            <label for="time" className="col-sm-2 col-form-label">
           <b>  Time </b>
            </label>
            <div className="col-sm-10 supLabel">
              <input
                type="time"
                className="form-s-control"
                id="time"
                name="time"
                placeholder="enter time"
                onChange={handleChange}
                value={transport.time}
                required
              />
            </div>
          </div>

          <div className="form-group-s row">
            <label for="contactNo" className="col-sm-2 col-form-label">
           <b>  contact No </b>
            </label>
            <div className="col-sm-10 supLabel">
              <input
                type="text"
                className="form-s-control"
                id="contactNo"
                name="contactNo"
                placeholder="enter contact no"
                onChange={handleChange}
                value={transport.contactNo}
                maxlength="10"
                required
              />
            </div>

            
          </div>

          <div className="form-group-s row">
        
            
              <div className="addButton-s">
              <button type="submit" className="btn btn-primary">
            
              &nbsp;&nbsp;  &nbsp;&nbsp; Add &nbsp;&nbsp;&nbsp;&nbsp;
              
              </button>
              </div>
            
            
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}
export default  AddTransport;
