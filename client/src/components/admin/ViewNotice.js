import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import "./admin.css";
import UpgradeIcon from "@mui/icons-material/Upgrade";

function ViewNotice() {
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

  return (
    <div className="">
      <div className="viewNotice">
        <h1>{notice.topic}</h1>
        <br />
        <h2>{notice.date}</h2>
        <h2>{notice.faculty}</h2>
        <br />
        <h3>{notice.message}</h3>
      </div>
    </div>
  );
}

export default ViewNotice;
