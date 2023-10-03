
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
import "./Supportserviceform.css";



 function UpdateTransport(){

    const [valid, setValid] = useState(false);
    const [mark, setmarks] = useState({
        transportID: "",
        vehicleType: "",
        ownerName: "",
        capacity: "",
        coverage: "",
        time:"",
        contactNo:"",
    });

    let navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        function getMark() {
          axios
            .get(`http://localhost:5000/api/transportdetails/${id}`,)
            .then((res) => {
              setmarks(res.data);
            })
            .catch((err) => {
              alert(err.message);
            });
        }
        getMark();
      }, []);

      function updateData(e) {
        e.preventDefault();
    
        axios
          .put(`http://localhost:5000/api/transportdetails/${id}`, mark)
          .then(() => {
            alert("Recode updated");
            navigate("/TransportDetails");
          })
          .catch((err) => {
            alert(err);
          });

     

      }
      function handleChange(event) {
        const { name, value } = event.target;
    
        setmarks((preValue) => {
          return {
            ...preValue,
            [name]: value,
          };
        });
      }

      return (

    <div class="supAddMarksForm">
      <br></br>
         <h2 className="heading-s">   &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Update Transport Details</h2>
<br></br>
       <div className="form-transport">
       <div className="formStyle-s">
           <form onSubmit={updateData}>
           <div class="form-group-s row">
            <label for="transportID" class="col-sm-2 col-form-label">
           <b> Transpor ID </b>
            </label>
            <div class="col-sm-10 supLabel">
              <input
                type="text"
                class="form-s-control"
                id="transportID"
                name="transportID"
                placeholder="enter document name"
                onChange={handleChange}
                value={mark.transportID}
                disabled

               />
            </div>
          </div>

          <div class="form-group-s row">
            <label for="vehicleType" class="col-sm-2 col-form-label">
          <b>   Vehicle Type </b>
            </label>
            <div class="col-sm-10 supLabel">
           <select
                type="text"
                class="form-s-control"
                id="vehicleType"
                name="vehicleType"
           
                onChange={handleChange}
                value={mark.vehicleType}
                required
            >
             
             <option value="Van">Van</option>
                  <option value="Bus">Bus</option>
                 <option value="Three Wheeler">Three Wheeler</option>
                  <option value="car">Car</option>

            </select>
            </div>
          </div>

          <div class="form-group-s row">
            <label for="ownerName" class="col-sm-2 col-form-label">
           <b> Owner Name </b>
            </label>
            <div class="col-sm-10 supLabel">
              <input
                type="text"
                class="form-s-control"
                id="ownerName"
                name="ownerName"
                placeholder="enter group id"
                onChange={handleChange}
                value={mark.ownerName}
                required
              />
            </div>
          </div>

          <div class="form-group-s row">
            <label for="capacity" class="col-sm-2 col-form-label">
            <b> Capacity </b>
            </label>
            <div class="col-sm-10 supLabel">
              <input
                type="text"
                class="form-s-control"
                id="capacity"
                name="capacity"
                placeholder="enter topic name"
                onChange={handleChange}
                value={mark.capacity}
                required
              />
            </div>
          </div>

          <div class="form-group-s row">
            <label for="coverage" class="col-sm-2 col-form-label">
           <b> Coverage </b> 
            </label>
            <div class="col-sm-10 supLabel">
              <input
                type="text"
                class="form-s-control"
                id="coverage"
                name="coverage"
                placeholder="enter marks"
                onChange={handleChange}
                value={mark.coverage}
                required
              />
            </div>
          </div>
            
          <div class="form-group-s row">
            <label for="time" class="col-sm-2 col-form-label">
          <b>   Time </b>
            </label>
            <div class="col-sm-10 supLabel">
              <input
                type="text"
                class="form-s-control"
                id="time"
                name="time"
                placeholder="enter supervisor name"
                onChange={handleChange}
                value={mark.time}
                required
              />
            </div>
          </div>
          
          <div class="form-group-s row">
            <label for="contactNo" class="col-sm-2 col-form-label">
           <b>  Contact No </b>
            </label>
            <div class="col-sm-10 supLabel">
              <input
                type="text"
                class="form-s-control"
                id="contactNo"
                name="contactNo"
                placeholder="enter feedback"
                onChange={handleChange}
                value={mark.contactNo}
                required
              />
            </div>
          </div>
          <br></br>
          
          <div class="form-group-s row">
         
            <div  className="updateBtn-ss">
              
              <button type="submit" class="btn btn-primary" > 
              &nbsp;&nbsp;
                Update
                &nbsp;&nbsp;
              </button>  

         

            </div>
          </div>

           
           </form>

       </div>
       </div>
    </div>


      );
    

};

export default UpdateTransport;

