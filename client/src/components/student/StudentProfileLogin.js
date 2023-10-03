import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./StudentProfileLogin.css";
import VpnKey from "@mui/icons-material/VpnKey";
import StudentProfile from "./StudentProfile";

function StudentProfileLogin() {
    /*const [student, setStudent] = useState([]);*/
    const [valid, setValid] = useState(false);
    const [user, setUser] = useState({
        studentId: "",
        password: "",
    });

    /*let navigate = useNavigate();*/

    function sendData(e) {
        e.preventDefault();

        axios
            .post("http://localhost:5000/api/students/validate", user)
            .then((res) => {
                if (res.status === 200) {
                    alert("student validated");
                    setValid(res.data);
                    //setStudent(res.data);

                    //navigate("/StudentProfile");
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
            {valid === false ? (
                <div className="container mt-5">
                    <h4 className="warning_message_above_heading" >
                        Enter your login details again for security purposes.
                    </h4>

                    <div className="loginHeading">Student Login</div>

                    <div className="container">
                        <div className="formStyle">
                            <div className="LoginProfileformMainDiv">

                                <form onSubmit={sendData}>
                                    <div className="form-group ">
                                        <label for="id" >Student ID</label>
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
                                
                                
                            </div>
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

export default StudentProfileLogin;