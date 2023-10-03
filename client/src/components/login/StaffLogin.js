import React, { useState } from "react";
import "./login.css";
import Button from "@mui/material/Button";
import InputIcon from "@mui/icons-material/Input";
import AdminLogin from "./AdminLogin";
import SupportServiceLogin from "./SupportServiceLogin";
import LectureLogin from "./LectureLogin";

function StaffLogin() {
  const [adm, setAdm] = useState(true);
  const [ss, setSs] = useState(false);
  const [lec, setLec] = useState(false);

  function adminLoginHandle() {
    setAdm(true);
    setSs(false);
    setLec(false);
  }

  function ssLoginHandle() {
    setAdm(false);
    setSs(true);
    setLec(false);
  }

  function lecturerLoginHandle() {
    setAdm(false);
    setSs(false);
    setLec(true);
  }

  const loginMenuBtn = {
    borderRadius: 35,
    backgroundColor: "white",
    padding: "10px 20px",
    marginRight: "28px",
    color: "black",
    fontWeight: "bold",
  };

  return (
    <div>
      <div className="container">
        <div className="loginMenu">
          <Button
            variant="contained"
            style={loginMenuBtn}
            startIcon={<InputIcon />}
            onClick={adminLoginHandle}
          >
            Admin Login
          </Button>
          <Button
            variant="contained"
            style={loginMenuBtn}
            startIcon={<InputIcon />}
            onClick={ssLoginHandle}
          >
            Support Service Login
          </Button>
          <Button
            variant="contained"
            style={loginMenuBtn}
            startIcon={<InputIcon />}
            onClick={lecturerLoginHandle}
          >
            Lecture Login
          </Button>
        </div>
        <div className="loginForm">
          {adm ? (
            <AdminLogin />
          ) : ss ? (
            <SupportServiceLogin />
          ) : (
            <LectureLogin />
          )}
        </div>
      </div>
    </div>
  );
}

export default StaffLogin;
