import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admin.css";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate } from "react-router-dom";

function AllNotices() {
  const [notices, setNotices] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    function getNotices() {
      axios
        .get("http://localhost:5000/api/notices")
        .then((res) => {
          setNotices(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getNotices();
  }, []);

  function deleteNotice(_id) {
    axios
      .delete("http://localhost:5000/api/notices/" + _id)
      .then((res) => {
        console.log(res.data);

        alert("Faculty notice deleted");
      })
      .catch((err) => {
        alert(err);
      });

    setNotices(notices.filter((notice) => notice._id !== _id));
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

  function filterData(facultyNotices, searchKey) {
    const result = facultyNotices.filter((fNotice) => {
      return fNotice.faculty.toLowerCase().includes(searchKey);
    });

    setNotices(result);
  }

  function handleSearchArea(e) {
    const searchKey = e.target.value;

    axios.get("http://localhost:5000/api/notices").then((res) => {
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
            navigate("/addNotice");
          }}
        >
          Add New Faculty Notice
        </Button>
      </div>
      <div className="table_heading">All Faculty Notices Details</div>
      <div className="admin_searchBar">
        <input
          type="text"
          class="form-control rounded"
          placeholder="Search"
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
              <th scope="col">Date</th>
              <th scope="col">Topic</th>
              <th scope="col">Faculty</th>
              <th scope="col">Content</th>

              <th></th>
            </tr>
          </thead>
          <tbody className="table-light">
            {notices.map((notice, index) => {
              return (
                <tr key={notice._id}>
                  <td>{index + 1}</td>
                  <td>{notice.date}</td>
                  <td>{notice.topic.substring(0, 35) + "..."}</td>
                  <td>{notice.faculty}</td>
                  <td>{notice.message.substring(0, 45) + "..."}</td>
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
                        navigate(`/updateF_Notice/${notice._id}`);
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
                          deleteNotice(notice._id);
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

export default AllNotices;
