import React, { useState } from "react";
import axios from "axios";
import "./admin.css";
import { useNavigate } from "react-router-dom";
import image from "../images/admin.jpg";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function AdminMenu() {
  const [user, setUser] = useState({
    adminId: "",
    password: "",
  });

  const loginMenuBtn = {
    borderRadius: 35,
    backgroundColor: "white",
    padding: "7px 20px",
    color: "black",
    fontWeight: "bold",
    marginTop: "25px",
  };

  let navigate = useNavigate();

  function handleViewProfile() {
    if (!user.adminId) {
      alert("Enter Admin ID to view the profile");
    } else if (!user.password) {
      alert("Enter Password to view the profile");
    } else {
      axios
        .post("http://localhost:5000/api/admins/manageProfile", user)
        .then((res) => {
          const admin = res.data;
          navigate(`/adminProfile/${admin._id}`);
        })
        .catch((err) => {
          alert("Login details are invalid, Please try again!!!");
        });
    }
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
    <div className="AdmMenu">
      {" "}
      <div className="adminMenu">
        <div className="admProfileLoginHeading">Admin Menu</div>
        <div className="admBtn">
          <button
            type="button"
            className="btn btn-light btn-lg btn-block"
            onClick={() => {
              navigate("/staffMembers");
            }}
          >
            <div className="adminMenuBtns">{">"} Manage Staff Members</div>
          </button>

          <button
            type="button"
            className="btn btn-light btn-lg btn-block"
            onClick={() => {
              navigate("/stds");
            }}
          >
            <div className="adminMenuBtns">{">"} Manage Students</div>
          </button>

          <button
            type="button"
            className="btn btn-light btn-lg btn-block"
            onClick={() => {
              navigate("/admins");
            }}
          >
            <div className="adminMenuBtns">{">"} Manage Admins</div>
          </button>

          <button
            type="button"
            className="btn btn-light btn-lg btn-block"
            onClick={() => {
              navigate("/f_notices");
            }}
          >
            <div className="adminMenuBtns">{">"} Manage Faculty Notices</div>
          </button>

          <button
            type="button"
            className="btn btn-light btn-lg btn-block"
            onClick={() => {
              navigate("/addStaffMember");
            }}
          >
            <div className="adminMenuBtns">{">"} Register New Staff Member</div>
          </button>
        </div>
      </div>
      <div className="admProfile">
        <p className="admProfileLoginHeading">Profile</p>
        <img className="adminMenuImg" src={image} />
        <div className="profileBottomArea">
          <div style={{ color: "white", textAlign: "left" }}>Admin ID</div>
          <input
            type="text"
            className="form-control"
            name="adminId"
            placeholder="Enter Admin ID"
            onChange={handleChange}
            value={user.adminId}
            required
          />
          <div style={{ color: "white", textAlign: "left" }}>Password</div>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            value={user.password}
            required
          />
          <Button
            variant="contained"
            style={loginMenuBtn}
            startIcon={<AccountCircleIcon />}
            onClick={handleViewProfile}
          >
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
