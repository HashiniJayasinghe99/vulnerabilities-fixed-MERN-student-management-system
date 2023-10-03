import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
import "./UpdateStudentProject.css";

function UpdateStudentProject() {
    const [project, setProject] = useState({
        groupID: "",
        groupName: "",
        leaderITNum: "",
        leaderEmail: "",
        topicName: "",
        reqSupervisor: "",
        description: "",
    });

    let navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        function getProject() {
            axios
                .get(`http://localhost:5000/api/studentProjects/${id}`)
                .then((res) => {
                    setProject(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getProject();
    }, []);

    function sendData(e) {
        e.preventDefault();

        const updatedProject = project;

        axios
            .put(`http://localhost:5000/api/studentProjects/${id}`, updatedProject)
            .then(() => {
                alert("Project Updated");
                navigate("/StudentProject");
            })
            .catch((err) => {
                alert(err);
            });
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setProject((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    }

    return (
        <div className="container">
           <br /> <h2 className="heading">Update Student Project</h2><br />
            <div className="UpdateStudentProject__page_layout">
                <div className="formStyle2">
                    <form onSubmit={sendData}>
                        <div className="form-group row">
                            <label for="groupID" className="col-sm-3 col-form-label, UpdateStudentProject_LeftSideForm">
                                Group ID
                            </label>
                            <div className="col-sm-8" >
                                <input
                                    type="text"
                                    className="form-control, UpdateStudentProject_RightsideForm"
                                    id="groupID"
                                    name="groupID"
                                    placeholder="Enter Group ID"
                                    onChange={handleChange}
                                    value={project.groupID}
                                    required
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="groupName" className="col-sm-3 col-form-label, UpdateStudentProject_LeftSideForm">
                                Group Name
                            </label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control, UpdateStudentProject_RightsideForm"
                                    id="groupName"
                                    name="groupName"
                                    placeholder="Enter Group Name"
                                    onChange={handleChange}
                                    value={project.groupName}
                                    required
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="leaderITNum" className="col-sm-3 col-form-label, UpdateStudentProject_LeftSideForm">
                                Leader IT Number
                            </label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control, UpdateStudentProject_RightsideForm"
                                    id="leaderITNum"
                                    name="leaderITNum"
                                    placeholder="Enter Leader IT Number"
                                    onChange={handleChange}
                                    value={project.leaderITNum}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="leaderName" className="col-sm-3 col-form-label, UpdateStudentProject_LeftSideForm">
                                Leader Email
                            </label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control, UpdateStudentProject_RightsideForm"
                                    id="leaderEmail"
                                    name="leaderEmail"
                                    placeholder="Enter leader Email"
                                    onChange={handleChange}
                                    value={project.leaderEmail}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="leaderEmail" className="col-sm-3 col-form-label, UpdateStudentProject_LeftSideForm">
                                Topic Name
                            </label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control, UpdateStudentProject_RightsideForm"
                                    id="topicName"
                                    name="topicName"
                                    placeholder="Enter Topic Name"
                                    onChange={handleChange}
                                    value={project.topicName}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="reqSupervisor" className="col-sm-3 col-form-label">
                                Reqest Supervisor
                            </label>
                            <div className="col-sm-8">
                                <select className="form-control" name="reqSupervisor" placeholder="Select Supervisor" value={project.reqSupervisor} onChange={handleChange} required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>Mr. Thusithanjana Thilakarathna</option>
                                    <option>Ms. Karthiga Rajendran</option>
                                    <option>Mr. Kathsuri Perera</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="member1Name" className="col-sm-3 col-form-label, UpdateStudentProject_LeftSideForm">
                                Description
                            </label>
                            <div className="col-sm-8">
                                <textarea
                                    className="form-control, RegisterStudentProject_RightsideForm, discription_box"
                                    id="description"
                                    name="description"
                                    placeholder="Enter Project Description"
                                    onChange={handleChange}
                                    value={project.description}
                                    required></textarea>
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-sm-10">
                                <div className="update_btn">
                                    <button type="submit" className="btn btn-primary">
                                        <b style={{ fontSize: "110%" }}>Update</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div></div><br /><br />
        </div>

    );
}

export default UpdateStudentProject;
