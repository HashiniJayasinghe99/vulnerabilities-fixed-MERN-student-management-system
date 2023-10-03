import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admin.css";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate } from "react-router-dom";

function StaffMembers() {
  const [users, setUsers] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    function getUsers() {
      axios
        .get("http://localhost:5000/api/staffMembers")
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getUsers();
  }, []);

  function deleteUser(_id) {
    axios
      .delete("http://localhost:5000/api/staffMembers/" + _id)
      .then((res) => {
        console.log(res.data);

        alert("staff member deleted");
      })
      .catch((err) => {
        alert(err);
      });

    setUsers(users.filter((user) => user._id !== _id));
  }

  const btnStyle = {
    borderRadius: 35,
    backgroundColor: "white",
    margin: "0 18px 18px",
    color: "black",
    fontWeight: "bold",
  };

  const btnStyleBack = {
    borderRadius: 35,
    margin: "0 18px 18px",
    color: "White",
    fontWeight: "bold",
  };

  function filterData(staffMembers, searchKey) {
    const result = staffMembers.filter((member) => {
      return member.staffId.toLowerCase().includes(searchKey);
    });

    setUsers(result);
  }

  function handleSearchArea(e) {
    const searchKey = e.target.value;

    axios.get("http://localhost:5000/api/staffMembers").then((res) => {
      filterData(res.data, searchKey);
    });
  }

  return (
    <div className="admin_table_style">
      <div>
        <Button
          variant="outlined"
          style={btnStyleBack}
          size="large"
          startIcon={<ArrowBackIcon />}
          onClick={() => {
            navigate("/adminMenu");
          }}
        ></Button>
        <Button
          variant="contained"
          style={btnStyle}
          startIcon={<PersonAddAlt1Icon />}
          onClick={() => {
            navigate("/addStaffMember");
          }}
        >
          Add New Staff Member
        </Button>
        <Button
          variant="contained"
          style={btnStyle}
          startIcon={<PictureAsPdfIcon />}
          onClick={window.print}
        >
          Generate Staff Report
        </Button>
      </div>
      <div className="table_heading">All Staff Members Details</div>
      <div className="admin_searchBar">
        <input
          type="text"
          class="form-control rounded"
          placeholder="Search by Staff ID"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={handleSearchArea}
        />
      </div>

      <div>
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Staff ID</th>
              <th scope="col">NIC</th>
              <th scope="col">Faculty</th>
              <th scope="col">Type</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>

              <th></th>
            </tr>
          </thead>
          <tbody className="table-light">
            {users.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.fName}</td>
                  <td>{user.lName}</td>
                  <td>{user.staffId}</td>
                  <td>{user.nic}</td>
                  <td>{user.faculty}</td>
                  <td>{user.type}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>
                    <Button
                      variant="contained"
                      style={{
                        borderRadius: 35,
                        backgroundColor: "",
                        marginRight: "18px",
                        color: "white",
                        fontWeight: "bold",
                      }}
                      startIcon={<EditIcon />}
                      onClick={() => {
                        navigate(`/updateStaffMember/${user._id}`);
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      style={{
                        borderRadius: 35,
                        backgroundColor: "brown",
                        marginRight: "18px",
                        color: "white",
                        fontWeight: "550600",
                      }}
                      startIcon={<DeleteForeverIcon />}
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you wish to delete this record?"
                          )
                        )
                          deleteUser(user._id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StaffMembers;
