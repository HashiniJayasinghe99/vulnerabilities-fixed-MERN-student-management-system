import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentProfile.css";
import back from "../images/StudentImages/back.gif"

//import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function StudentProfile(props) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:5000/api/students")
        .then((res) => {
          const results = res.data;
          setStudents(
            results.filter((result) => result.studentId === props.studentID)
          );
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getStudents();
  }, []);

  return (
    <div>

      <div className="all">
        <div>
        <a href="/StudentMenu"><button className="profile_back_button">
          <img className="profile_back_button-image" src={back} alt="books" /><p>Back</p></button>
        </a><br />
        </div>

        <h2 className="heading">Student Profile</h2>
        <p style={{ fontSize: "140%", fontWeight: "bold", marginLeft:"675px", color:"white" }}>
          Hello {props.studentID}
        </p><br/>

        <div className="Content_Of_User">
          <table className="tableStyle">
            <tbody className="">
              {students.map((student, index) => {
                return (
                  <tr key={student._id}>
                    <tr>
                      <th scope="col"></th>
                      <td ></td>
                    </tr>

                    <tr>
                      <th scope="col">Student ID </th>
                      <td >{student.studentId}</td>
                    </tr>

                    <tr>
                      <th scope="col">First Name</th>
                      <td>{student.fName}</td>
                    </tr>

                    <tr>
                      <th scope="col">Last Name</th>
                      <td>{student.lName}</td>
                    </tr>

                    <tr>
                      <th scope="col">NIC No</th>
                      <td>{student.nic}</td>
                    </tr>

                    <tr>
                      <th scope="col">Faculty</th>
                      <td>{student.faculty}</td>
                    </tr>

                    <tr>
                      <th scope="col">Gender</th>
                      <td>{student.gender}</td>
                    </tr>

                    <tr>
                      <th scope="col">Email</th>
                      <td>{student.email}</td>
                    </tr>

                    <tr>
                      <th scope="col">Phone Number</th>
                      <td>{student.phoneNumber}</td>
                    </tr>



                    <tr>
                      <th></th>
                      <td>
                        <a
                          className="btn btn-warning updateBTN"
                          href={`/StudentProfileUpdate/${student._id}`}
                        >
                          Update
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;

                      </td>
                    </tr>

                  </tr>

                );
              })}
            </tbody>
          </table>
          <br /> <br /> <br />
        </div>
      </div>

    </div>
  );
}



