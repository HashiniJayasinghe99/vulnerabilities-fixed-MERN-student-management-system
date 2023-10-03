import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admin.css";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useNavigate } from "react-router-dom";

function Faculty_Notices() {
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

  const loginMenuBtnUpdate = {
    borderRadius: 35,
    backgroundColor: "#4682B4",
    padding: "5px 15px",
    color: "white",
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
    <div className="tableStyle_FN">
      <div className="table_heading_FN">Admin Notices</div>
      <div className="admin_searchBar">
        <input
          type="text"
          class="form-control rounded"
          placeholder="Search by faculty (FOC/ FOE/ FOB)"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={handleSearchArea}
        />
      </div>

      <div>
        {notices.map((notice, index) => {
          return (
            <div className="note" key={notice._id}>
              <Button
                variant="contained"
                style={loginMenuBtnUpdate}
                startIcon={<VisibilityIcon />}
                onClick={() => {
                  navigate(`/viewNotice/${notice._id}`);
                }}
              >
                View Notice
              </Button>
              <h1>{notice.date}</h1>
              <h1>{notice.faculty}</h1>
              <br />
              <h4>{notice.topic.substring(0, 55) + "..."}</h4>
              <p>{notice.message.substring(0, 55) + "..."}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faculty_Notices;
