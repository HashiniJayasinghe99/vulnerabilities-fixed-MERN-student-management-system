import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import "./StudentProfileUpdate.css";
//import UpgradeIcon from "@mui/icons-material/Upgrade";
import StudentProfile from "./StudentProfile";

function StudentProfileUpdate() {
  const [valid, setValid] = useState(false);
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    studentId: "",
    nic: "",
    faculty: "",
    gender: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  let navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    function getUser() {
      axios
        .get(`http://localhost:5000/api/students/${id}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getUser();
  }, []);

  function updateData(e) {
    e.preventDefault();

    const updatedUser = user;

    axios
      .put(`http://localhost:5000/api/students/${id}`, updatedUser)
      .then((res) => {
        alert("student updated");
        setValid(res.data);
        //navigate("/StudentProfile");
      })
      .catch((err) => {
        alert(err);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setUser((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      {valid === false ? (
        <div className="container">
          <div className="formStyle2">
            <div className="StudentProfile_heading">Update Student</div><br /><br />

            <div className="studentProfileformStyle">
              <form onSubmit={updateData}>
                <div className="form-group row">
                  <label for="fname" className="col-sm-2 col-form-label, UpdateStudentProfile_LeftSideForm ">
                    First Name
                  </label>
                  <div className="col-sm-10, UpdateStudentProfile_RightsideForm">
                    <input
                      type="text"
                      className="form-control"
                      id="fname"
                      name="fName"
                      onChange={handleChange}
                      value={user.fName}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="lname" className="col-sm-2 col-form-label, UpdateStudentProfile_LeftSideForm ">
                    Last Name
                  </label>
                  <div className="col-sm-10, UpdateStudentProfile_RightsideForm">
                    <input
                      type="text"
                      className="form-control"
                      id="lname"
                      name="lName"
                      onChange={handleChange}
                      value={user.lName}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="stdid" className="col-sm-2 col-form-label, UpdateStudentProfile_LeftSideForm ">
                    Student ID
                  </label>
                  <div className="col-sm-10, UpdateStudentProfile_RightsideForm">
                    <input
                      type="text"
                      className="form-control"
                      id="stdid"
                      name="studentId"
                      onChange={handleChange}
                      value={user.studentId}
                      required
                      disabled
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="NIC" className="col-sm-2 col-form-label, UpdateStudentProfile_LeftSideForm ">
                    NIC
                  </label>
                  <div className="col-sm-10, UpdateStudentProfile_RightsideForm">
                    <input
                      type="text"
                      className="form-control"
                      id="NIC"
                      name="nic"
                      onChange={handleChange}
                      value={user.nic}
                      required
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="fac" className="col-sm-2 col-form-label, UpdateStudentProfile_LeftSideForm ">
                    Faculty
                  </label>
                  <div className="col-sm-10, UpdateStudentProfile_RightsideForm">
                    <select
                      id="fac"
                      class="form-control"
                      value={user.faculty}
                      onChange={handleChange}
                      name="faculty"
                    >
                      <option selected={user.faculty === "FOC"} value="FOC">
                        FOC
                      </option>
                      <option selected={user.faculty === "FOE"} value="FOE">
                        FOE
                      </option>
                      <option selected={user.faculty === "FOB"} value="FOB">
                        FOB
                      </option>
                    </select>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="gen" className="col-sm-2 col-form-label, UpdateStudentProfile_LeftSideForm ">
                    Gender
                  </label>
                  <div className="col-sm-10, UpdateStudentProfile_RightsideForm">
                    <div>
                      <input
                        type="radio"
                        value="male"
                        name="gender"
                        checked={user.gender === "male"}
                        onChange={handleChange}
                      />{" "}
                      Male
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="female"
                        name="gender"
                        checked={user.gender === "female"}
                        onChange={handleChange}
                      />{" "}
                      Female
                    </div>
                  </div>
                </div>

                <div className="form-group row">
                  <label for="mail" className="col-sm-2 col-form-label, UpdateStudentProfile_LeftSideForm ">
                    Email
                  </label>
                  <div className="col-sm-10, UpdateStudentProfile_RightsideForm">
                    <input
                      type="email"
                      className="form-control"
                      id="mail"
                      name="email"
                      onChange={handleChange}
                      value={user.email}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="phone" className="col-sm-2 col-form-label, UpdateStudentProfile_LeftSideForm ">
                    Phone No
                  </label>
                  <div className="col-sm-10, UpdateStudentProfile_RightsideForm">
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      name="phoneNumber"
                      onChange={handleChange}
                      value={user.phoneNumber}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="pass" className="col-sm-2 col-form-label, UpdateStudentProfile_LeftSideForm ">
                    Password
                  </label>
                  <div className="col-sm-10, UpdateStudentProfile_RightsideForm">
                    <input
                      type="password"
                      className="form-control"
                      id="pass"
                      name="password"
                      onChange={handleChange}
                      value={user.password}
                      required
                    />
                  </div>
                </div>
                <br />

                <div className="form-group row">
                  <div className="col-sm-10, UpdateStudentProfile_RightsideForm">
                    <div className="stdProfileUpdate_btn">
                      <button type="submit" className="btn btn-dark btn-lg ">
                        Update
                      </button></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <StudentProfile studentID={user.studentId} />
        </div>
      )}
    </div>
  );
}

export default StudentProfileUpdate;