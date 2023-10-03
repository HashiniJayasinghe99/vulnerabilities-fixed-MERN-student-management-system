import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentProject.css";
import EditIcon from "@mui/icons-material/Edit";
import plus from "../images/StudentImages/plus.gif"
import pdf from "../images/StudentImages/pdf.gif"
import statusImg from "../images/StudentImages/status.gif"

export default function StudentProject() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        function getTopics() {
            axios
                .get("http://localhost:5000/api/studentProjects")
                .then((res) => {
                    setTopics(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getTopics();
    }, []);


    /*-----*/

    function filterData(studentProjects, searchKey) {
        const result = studentProjects.filter((studentProject) => {
            return studentProject.groupID.toLowerCase().includes(searchKey.toLowerCase());
        });

        setTopics(result);
    }

    function handleSearchArea(e) {
        const searchKey = e.target.value;

        axios.get("http://localhost:5000/api/studentProjects").then((res) => {
            filterData(res.data, searchKey);
        });
    }
    /*---------*/

    return (
        <div className="all">
            <div>
                <a href="/RegisterStudentProject">
                    <button type="button" className="studentProjectBtn button50">
                        <img className="Student_Group" src={plus} alt="plus-image" /> Register New Student Project
                    </button>
                </a>
                <button class="studentProjectBtn button51" onClick={window.print}>
                    <img className="Student_Group" src={pdf} alt="pdf-image" /> Download PDF</button>
                <a href="/ViewStatusOfTopic">
                    <button type="button" className="studentProjectBtn button52">
                        <img className="Student_Group" src={statusImg} alt="status-image" /> Status of Student Projects
                    </button>
                </a>
            </div>

            {/*Search function*/}
            <div className="searchBar2">
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

            <h2 className="heading">Student Project Details</h2><br />

            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Group ID</th>
                        <th scope="col">Group Name</th>
                        <th scope="col">Leader IT Number</th>
                        <th scope="col">Leader Email</th>
                        <th scope="col">Topic Name</th>
                        <th scope="col">Reqest Supervisor</th>
                        <th scope="col">Description</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody className="table-light">
                    {topics.map((topic, index) => {
                        return (
                            <tr key={topic._id}>
                                <td>{index + 1}</td>
                                <td>{topic.groupID}</td>
                                <td>{topic.groupName}</td>
                                <td>{topic.leaderITNum}</td>
                                <td>{topic.leaderEmail}</td>
                                <td>{topic.topicName}</td>
                                <td>{topic.reqSupervisor}</td>
                                <td>{topic.description}</td>

                                <td>
                                    <a
                                        className="btn btn-warning"
                                        href={`/UpdateStudentProject/${encodeURIComponent(topic._id)}`}
                                    >
                                        <EditIcon />
                                        &nbsp;&nbsp; Update
                                    </a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;

                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            
        </div >
    )
}
