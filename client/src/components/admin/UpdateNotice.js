import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import "./admin.css";
import UpgradeIcon from "@mui/icons-material/Upgrade";

function UpdateNotice() {
  const [notice, setNotice] = useState({
    date: "",
    topic: "",
    faculty: "FOC",
    message: "",
  });

  let navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    function getNotice() {
      axios
        .get(`http://localhost:5000/api/notices/${id}`)
        .then((res) => {
          setNotice(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getNotice();
  }, []);

  function updateData(e) {
    e.preventDefault();

    const updatedNotice = notice;

    axios
      .put(`http://localhost:5000/api/notices/${id}`, updatedNotice)
      .then(() => {
        alert("Faculty notice updated");
        navigate("/f_notices");
      })
      .catch((err) => {
        alert(err);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNotice((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <div className="staffformStyle">
        <div className="staff_heading">Update Faculty Notice</div>
        <div className="staffformStyle_1">
          <form onSubmit={updateData}>
            <div className="form-group row">
              <label for="date_" className="col-sm-2 col-form-label">
                Date
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  id="date_"
                  name="date"
                  onChange={handleChange}
                  value={notice.date}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="tpc" className="col-sm-2 col-form-label">
                Topic
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="tpc"
                  name="topic"
                  onChange={handleChange}
                  value={notice.topic}
                  required
                />
              </div>
            </div>

            <div class="form-group row">
              <label for="fac" className="col-sm-2 col-form-label">
                Faculty
              </label>
              <div className="col-sm-10">
                <select
                  id="fac"
                  class="form-control"
                  value={notice.faculty}
                  onChange={handleChange}
                  name="faculty"
                >
                  <option selected={notice.faculty === "FOC"} value="FOC">
                    FOC
                  </option>
                  <option selected={notice.faculty === "FOE"} value="FOE">
                    FOE
                  </option>
                  <option selected={notice.faculty === "FOB"} value="FOB">
                    FOB
                  </option>
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label for="cntnt" className="col-sm-2 col-form-label">
                Content
              </label>
              <div className="col-sm-10">
                <textarea
                  type="textArea"
                  className="form-control"
                  rows="6"
                  id="cntnt"
                  name="message"
                  onChange={handleChange}
                  value={notice.message}
                  required
                />
              </div>
            </div>

            <br />

            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-dark btn-lg">
                  <UpgradeIcon />
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateNotice;
