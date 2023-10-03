import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./StudentLogin.css";
import VpnKey from "@mui/icons-material/VpnKey";

export default function StudentLogin() {
  const [valid, setValid] = useState(false);
  const [user, setUser] = useState({
    studentId: "",
    password: "",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/students/validate", user)
      .then((res) => {
        if (res.status === 200) {
          alert("student validated");
          setValid(res.data);

          navigate("/studentMenu");
        }
      })
      .catch((err) => {
        alert("Login details are invalid, Please try again!!!");

        setValid(false);
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
      <div className="loginHeading">Student Login</div>

      <div className="container">
        <div className="form_Style">
          <div className="LoginformMainDiv">
            <form onSubmit={sendData}>
              <div className="form-group ">
                <label for="id">Student ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="studentId"
                  value={user.studentId}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark">
                <VpnKey />
                &nbsp;&nbsp; Login
              </button>
            </form>
            <br />
            <br />
            <div>
              <label for="password">
                If you don't have an account click to
              </label>
              &nbsp;&nbsp;
              <a href="/addStudent">Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
