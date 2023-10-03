import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import "./admin.css";
import image from "../images/admin.jpg";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function AdminProfile() {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    adminId: "",
    nic: "",
    gender: "male",
    email: "",
    phoneNumber: "",
    password: "",
  });

  let navigate = useNavigate();

  const loginMenuBtnUpdate = {
    borderRadius: 35,
    backgroundColor: "#4682B4",
    padding: "10px 20px",
    color: "white",
    fontWeight: "bold",
    marginTop: "25px",
  };

  const loginMenuBtnDelete = {
    borderRadius: 35,
    backgroundColor: "#FF0000",
    padding: "10px 20px",
    color: "white",
    fontWeight: "bold",
    marginTop: "25px",
  };

  const btnStyleBack = {
    borderRadius: 35,
    margin: "0 18px 18px",
    color: "White",
    fontWeight: "bold",
  };

  const { id } = useParams();

  useEffect(() => {
    function getUser() {
      axios
        .get(`http://localhost:5000/api/admins/${id}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getUser();
  }, []);

  function deleteUser(_id) {
    axios
      .delete("http://localhost:5000/api/admins/" + _id)
      .then((res) => {
        console.log(res.data);

        alert("Admin profile deleted");

        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
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
      </div>
      <div className="profileContent">
        <h3 className="profileHeading">Admin Profile</h3>
        <img className="profileImage" src={image} />
      </div>
      <div className="profileDetails">
        <table class="table table-borderless ">
          <tbody>
            <tr>
              <td>Full Name</td>
              <td>
                {user.fName} {user.lName}
              </td>
            </tr>
            <tr>
              <td>Admin ID</td>
              <td>{user.adminId}</td>
            </tr>
            <tr>
              <td>NIC</td>
              <td>{user.nic}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{user.gender}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>{user.phoneNumber}</td>
            </tr>
            <tr>
              <td>
                <Button
                  variant="contained"
                  style={loginMenuBtnUpdate}
                  startIcon={<UpgradeIcon />}
                  onClick={() => {
                    navigate(`/admProfileUpdate/${user._id}`);
                  }}
                >
                  Update Profile
                </Button>
              </td>
              <td>
                <Button
                  variant="contained"
                  style={loginMenuBtnDelete}
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you wish to delete this profile?"
                      )
                    )
                      deleteUser(user._id);
                  }}
                >
                  Delete Profile
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminProfile;
