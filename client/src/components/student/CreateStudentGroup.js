import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateStudentGroup.css";

//Create Student Group
function AddStudentGroup() {
    const [valid, setValid] = useState(false);
    const [group, setGroup] = useState({
        groupID: "",
        groupName: "",
        leaderEmail: "",
        leaderITNum: "",
        leaderName: "",
        member1ITNum: "",
        member1Name: "",
        member2ITNum: "",
        member2Name: "",
    });

    let navigate = useNavigate();

    function sendData(e) {
        e.preventDefault();

        axios
            .post("http://localhost:5000/api/studentGroups", group)
            .then(() => {
                alert("New Student Group Created");
                setValid(true);
                navigate("/StudentGroup");
            })
            .catch((err) => {
                alert(err);
            });

        setGroup({
            groupID: "",
            groupName: "",
            leaderEmail: "",
            leaderITNum: "",
            leaderName: "",
            member1ITNum: "",
            member1Name: "",
            member2ITNum: "",
            member2Name: "",
        });
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setGroup((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    }

    return (
        <div className="container">
            <h2 className="heading">Create Student Group</h2>
            <div className="CreateStudentGroup__page_layout">
            <div className="formStyle2">
                
                <form onSubmit={sendData}>
                    <div className="form-group row">
                        <label for="groupID" className="col-sm-3 col-form-label, CreateStudentGroup_LeftSideForm">
                            Group ID
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control, CreateStudentGroup_RightsideForm"
                                id="groupID"
                                name="groupID"
                                placeholder="Enter Group ID"
                                onChange={handleChange}
                                value={group.groupID}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="groupName" className="col-sm-3 col-form-label, CreateStudentGroup_LeftSideForm">
                            Group Name
                        </label>
                        <div className="col-sm-8 CreateStudentGroup">
                            <input
                                type="text"
                                className="form-control, CreateStudentGroup_RightsideForm"
                                id="groupName"
                                name="groupName"
                                placeholder="Enter Group Name"
                                onChange={handleChange}
                                value={group.groupName}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="leaderITNum" className="col-sm-3 col-form-label, CreateStudentGroup_LeftSideForm">
                            Leader IT Number
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control, CreateStudentGroup_RightsideForm"
                                id="leaderITNum"
                                name="leaderITNum"
                                placeholder="Enter Leader IT Number"
                                onChange={handleChange}
                                value={group.leaderITNum}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="leaderName" className="col-sm-3 col-form-label, CreateStudentGroup_LeftSideForm">
                            Leader Name
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control, CreateStudentGroup_RightsideForm"
                                id="leaderName"
                                name="leaderName"
                                placeholder="Enter Leader Name"
                                onChange={handleChange}
                                value={group.leaderName}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="leaderEmail" className="col-sm-3 col-form-label, CreateStudentGroup_LeftSideForm">
                            Leader Email
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control, CreateStudentGroup_RightsideForm"
                                id="leaderEmail"
                                name="leaderEmail"
                                placeholder="Enter Leader Email Address"
                                onChange={handleChange}
                                value={group.leaderEmail}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="member1ITNum" className="col-sm-3 col-form-label, CreateStudentGroup_LeftSideForm">
                            Member 2 - IT Number
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control, CreateStudentGroup_RightsideForm"
                                id="member1ITNum"
                                name="member1ITNum"
                                placeholder="Enter Member 2 - IT Number"
                                onChange={handleChange}
                                value={group.member1ITNum}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="member1Name" className="col-sm-3 col-form-label, CreateStudentGroup_LeftSideForm">
                            Member 2 - Name
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control, CreateStudentGroup_RightsideForm"
                                id="member1Name"
                                name="member1Name"
                                placeholder="Enter Member 2 - Name"
                                onChange={handleChange}
                                value={group.member1Name}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="member2ITNum" className="col-sm-3 col-form-label, CreateStudentGroup_LeftSideForm">
                            Member 3 - IT Number
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control, CreateStudentGroup_RightsideForm"
                                id="member2ITNum"
                                name="member2ITNum"
                                placeholder="Enter Member 3 - IT Number"
                                onChange={handleChange}
                                value={group.member2ITNum}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="member2Name" className="col-sm-3 col-form-label, CreateStudentGroup_LeftSideForm">
                            Member 3 - Name
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control, CreateStudentGroup_RightsideForm"
                                id="member2Name"
                                name="member2Name"
                                placeholder="Enter Member 3 - Name"
                                onChange={handleChange}
                                value={group.member2Name}
                                required
                            />
                        </div>


                    </div>


                    <div className="form-group row">
                        <div className="btn-alignment">
                            <div className="col-sm-10">
                                <div className="sumitt_btn">
                                <button type="submit" className="btn btn-primary ">
                                    Submit
                                </button>
                            </div><br /></div><br /><br />
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
}

export default AddStudentGroup;
