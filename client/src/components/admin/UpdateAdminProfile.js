import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import "./admin.css";
import UpgradeIcon from "@mui/icons-material/Upgrade";

function UpdateAdminProfile() {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    adminId: "",
    nic: "",
    gender: "male",
    email: "",
    phoneNumber: "",
    password: "",
  });

  let navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    function getUser() {
      axios
        .get(`http://localhost:5000/api/admins/${id}`)
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
      .put(`http://localhost:5000/api/admins/${id}`, updatedUser)
      .then(() => {
        alert("admin updated");
        navigate(`/adminProfile/${user._id}`);
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
    <div className="container">
      <div className="staffformStyle">
        <div className="staff_heading">Update Admin Profile</div>
        <div className="staffformStyle_1">
          <form onSubmit={updateData}>
            <div className="form-group row">
              <label for="fname" className="col-sm-2 col-form-label">
                First Name
              </label>
              <div className="col-sm-10">
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
              <label for="lname" className="col-sm-2 col-form-label">
                Last Name
              </label>
              <div className="col-sm-10">
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
              <label for="admid" className="col-sm-2 col-form-label">
                Admin Id
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="admid"
                  name="adminId"
                  onChange={handleChange}
                  value={user.adminId}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="NIC" className="col-sm-2 col-form-label">
                NIC
              </label>
              <div className="col-sm-10">
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
              <label for="gen" className="col-sm-2 col-form-label">
                Gender
              </label>
              <div className="col-sm-10">
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
              <label for="mail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
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
              <label for="phone" className="col-sm-2 col-form-label">
                Phone No
              </label>
              <div className="col-sm-10">
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
              <label for="pass" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
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
              <div className="col-sm-10">
                <button type="submit" className="btn btn-dark btn-lg">
                  <UpgradeIcon />
                  &nbsp;&nbsp;Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateAdminProfile;
