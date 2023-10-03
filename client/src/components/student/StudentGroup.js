import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentGroup.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import plus from "../images/StudentImages/plus.gif";
import pdf from "../images/StudentImages/pdf.gif";
import xss from "xss"; // Import the xss library

export default function StudentGroup() {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        function getGroups() {
            axios
                .get("http://localhost:5000/api/studentGroups")
                .then((res) => {
                    setGroups(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getGroups();
    }, []);

    function deleteStudentGroup(_id) {
        axios
            .delete("http://localhost:5000/api/studentGroups/" + _id)
            .then((res) => {
                console.log(res.data);

                alert("Student Group Deleted");
            })
            .catch((err) => {
                alert(err);
            });

        setGroups(groups.filter((group) => group._id !== _id));
    }

    /*-----*/

    function filterData(studentGroups, searchKey) {
        const result = studentGroups.filter((studentGroup) => {
            return studentGroup.groupID.toLowerCase().includes(searchKey.toLowerCase());
        });

        setGroups(result);
    }

    function handleSearchArea(e) {
        const searchKey = e.target.value;

        axios.get("http://localhost:5000/api/studentGroups").then((res) => {
            filterData(res.data, searchKey);
        });
    }
    /*---------*/

    return (
        <div className="all">
            <div>
                <a href="/CreateStudentGroup"><button type="button" className="stGroupPageBtn button10">
                    <img className="Student_Group" src={plus} alt="plus-image" /> Create New Student Group
                </button> </a>
                <button class="stGroupPageBtn button20" onClick={window.print}>
                    <img className="Student_Group" src={pdf} alt="pdf-image" />  Download PDF</button>
            </div>

            {/*Search function*/}
            <div className="searchBarstd">
                <input
                    type="text"
                    class="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={handleSearchArea}
                ></input>
            </div>
            {/*-------*/}

            <h2 className="heading">Student Group Details</h2><br />

            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Group ID</th>
                        <th scope="col">Group Name</th>
                        <th scope="col">Leader IT Number</th>
                        <th scope="col">Leader Name</th>
                        <th scope="col">Member 2 IT Number</th>
                        <th scope="col">Member 2 Name</th>
                        <th scope="col">Member 3 IT Number</th>
                        <th scope="col">Member 3 Name</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody className="table-light">
                    {groups.map((group, index) => {
                        return (
                            <tr key={group._id}>
                                <td>{index + 1}</td>
                                <td>{group.groupID}</td>
                                <td>{group.groupName}</td>
                                <td>{group.leaderITNum}</td>
                                <td>{group.leaderName}</td>
                                <td>{group.member1ITNum}</td>
                                <td>{group.member1Name}</td>
                                <td>{group.member2ITNum}</td>
                                <td>{group.member2Name}</td>
                                <td>
                                    <a
                                        className="btn btn-warning"
                                        href={`/UpdateStudentGroup/${encodeURIComponent(group._id)}`}
                                    >
                                        <EditIcon />
                                        &nbsp;&nbsp; Update
                                    </a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <a
                                        className="btn btn-danger"
                                        href="#"
                                        onClick={() => {
                                            if (
                                                window.confirm(
                                                    "Are you sure you wish to delete this record?"
                                                )
                                            )
                                                deleteStudentGroup(group._id);
                                        }}
                                    >
                                        <DeleteForeverIcon />
                                        &nbsp;&nbsp; Delete
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div >
    )
}
