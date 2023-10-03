import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./RegisterStudentProject.css";

//Create New Student Project
function AddStudentProjectc() {
    const [valid, setValid] = useState(false);
    const [topic, setTopic] = useState({
        groupID: "",
        groupName: "",
        leaderITNum: "",
        leaderEmail: "",
        topicName: "",
        reqSupervisor: "",
        description: "",
    });

    let navigate = useNavigate();

    function sendData(e) {
        e.preventDefault();

        axios
            .post("http://localhost:5000/api/studentProjects", topic)
            .then(() => {
                alert("New Student Project Added");
                setValid(true);
                navigate("/StudentProject");
            })
            .catch((err) => {
                alert(err);
            });

        setTopic({
            groupID: "",
            groupName: "",
            leaderITNum: "",
            leaderEmail: "",
            topicName: "",
            reqSupervisor: "",
            description: "",
        });
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setTopic((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    }

    return (
        <div className="container">
            <h2 className="heading">Register Student Project</h2>

            <div className="RegisterStudentProject__page_layout">
                <div className="formStyle2"><br /><br />
                    <form onSubmit={sendData}>
                        <div className="form-group row">
                            <label for="groupID" className="col-sm-3 col-form-label">
                                Group ID
                            </label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control, RegisterStudentProject_RightsideForm"
                                    id="groupID"
                                    name="groupID"
                                    placeholder="Enter Group ID"
                                    onChange={handleChange}
                                    value={topic.groupID}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="groupName" className="col-sm-3 col-form-label, RegisterStudentProject_LeftSideForm">
                                Group Name
                            </label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control, RegisterStudentProject_RightsideForm"
                                    id="groupName"
                                    name="groupName"
                                    placeholder="Enter Group Name"
                                    onChange={handleChange}
                                    value={topic.groupName}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="leaderITNum" className="col-sm-3 col-form-label">
                                Leader IT Number
                            </label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control, RegisterStudentProject_RightsideForm"
                                    id="leaderITNum"
                                    name="leaderITNum"
                                    placeholder="Enter Leader IT Number"
                                    onChange={handleChange}
                                    value={topic.leaderITNum}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="leaderEmail" className="col-sm-3 col-form-label">
                                Leader Email
                            </label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control, RegisterStudentProject_RightsideForm"
                                    id="leaderEmail"
                                    name="leaderEmail"
                                    placeholder="Enter Leader Email"
                                    onChange={handleChange}
                                    value={topic.leaderEmail}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="topicName" className="col-sm-3 col-form-label">
                                Topic Name
                            </label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control, RegisterStudentProject_RightsideForm"
                                    id="topicName"
                                    name="topicName"
                                    placeholder="Enter Topic Name"
                                    onChange={handleChange}
                                    value={topic.topicName}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="reqSupervisor" className="col-sm-3 col-form-label">
                                Reqest Supervisor
                            </label>
                            <div className="col-sm-8">
                                <select className="form-control, RegisterStudentProject_RightsideForm" name="reqSupervisor" placeholder="Select Supervisor" value={topic.reqSupervisor} onChange={handleChange} required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>Mr. Thusithanjana Thilakarathna</option>
                                    <option>Ms. Karthiga Rajendran</option>
                                    <option>Ms. Karthiga Rajendran</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="description" className="col-sm-3 col-form-label">
                                Project Description
                            </label>
                            <div className="col-sm-8">
                                <textarea
                                    className="form-control, RegisterStudentProject_RightsideForm, discription_box"
                                    id="description"
                                    name="description"
                                    placeholder="Enter Project Description"
                                    onChange={handleChange}
                                    value={topic.description}
                                    required></textarea>
                            </div>
                        </div>


                        <div className="form-group row">
                            <div className="btn-alignment">
                                <div className="col-sm-10">
                                    <div className="sumitt_btn">
                                        <button type="submit" className="btn btn-primary" >
                                            Register
                                        </button>
                                    </div>
                                </div><br /><br /><br />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddStudentProjectc;
