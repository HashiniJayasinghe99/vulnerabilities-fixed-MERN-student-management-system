import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Button from "@mui/material/Button";
import axios from "axios";
import "../lecture/Lecture.css";
import "../admin/admin.css";
import HomeIcon from '@mui/icons-material/Home';

function AddMarking() {
  const [marking, setMarking] = useState({
    markingNumber:String,
    answer1: String,
    marking1: String,
    answer2: String,
    marking2: String,
    answer3: String,
    marking3: String,
    answer4: String,
    marking4: String,
    answer5: String,
    marking5: String,
    answer6: String,
    marking6: String,
    answer7: String,
    marking7: String,
    answer8: String,
    marking8: String,
    answer9: String,
    marking9: String,
    answer10: String,
    marking10: String,
    date: String,
    moduleN: String,
    Lecture: String,
    other: String,
  });

const btnStyle = {
    borderRadius: 35,
    backgroundColor: "white",
    margin: "0 18px 18px",
    color: "black",
    fontWeight: "bold",
    fontFamily: "cursive"
  };
  let navigate = useNavigate();
  

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/marking", marking)
      .then(() => {
        alert("Quiz successfully Uploaded");
        navigate("/lectureMenu");
      })
      .catch((err) => {
        alert(err);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setMarking((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
  return (
    <div className="tableStyleL">
      <div className="uploadQuiz-card">
      <div className="homebtn2">
        <Button
          variant="contained"
          style={btnStyle}
          startIcon={<HomeIcon />}
          onClick={() => {
            navigate("/lectureMenu");
          }}
        >
         Home 
        </Button>
        </div>
        <div className="Quiz_heading">Upload New </div>
        <div className="QuizformStyle_1 ">
          <form onSubmit={sendData}>
          <div className="row quiz-form">
              <label for="date" className="col-sm-2 col-form-label">
                Date
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="mark-control"
                  id="date"
                  name="date"
                  onChange={handleChange}
                  value={marking.date}
                  min="2018-01-01" max="2024-01-31"
                  required
                />
                
              </div>
            </div>
            <div className="row quiz-form">
              <label for="module" className="col-sm-2 col-form-label">
                Module
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="mark-control"
                  id="module"
                  name="moduleN"
                  placeholder="Enter module name"
                  onChange={handleChange}
                  value={marking.moduleN}
                  required
                />
              </div>
            </div>  
            <div className="row quiz-form">
              <label for="lecture" className="col-sm-2 col-form-label">
                Lecture
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="mark-control"
                  id="lecture"
                  name="Lecture"
                  placeholder="Enter lecture name"
                  onChange={handleChange}
                  value={marking.Lecture}
                  required
                />
              </div>  
             </div>
             <div className="row quiz-form">
              <label for="markingNumber" className="col-sm-2 col-form-label">
                Quiz ID
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="mark-control"
                  id="markingNumber"
                  name="markingNumber"
                  placeholder="First two letters of module name + number of the quiz"
                  onChange={handleChange}
                  value={marking.markingNumber}
                  required
                  unique
                />
              </div>  
             </div>
              
            <div className="row quiz-form">
              <label for="answer1" className="col-sm-2 col-form-label">
                Question 01
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="mark-control"
                  id="answer1"
                  name="answer1"
                  placeholder="Upload Answer Here"
                  onChange={handleChange}
                  value={marking.answer1}
                  required
                />
                  <input
                  type="text"
                  className="mark-control"
                  id="marking1"
                  name="marking1"
                  placeholder="Allocate Marks Here"
                  onChange={handleChange}
                  value={marking.marking1}
                  required
                />
              </div>
            </div>
            <div className="row quiz-form">
              <label for="answer2" className="col-sm-2 col-form-label">
              Question 02
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="mark-control"
                  id="answer2"
                  name="answer2"
                  placeholder="Upload Answer Here"
                  onChange={handleChange}
                  value={marking.answer2}
                  required
                />
                   <input
                  type="text"
                  className="mark-control"
                  id="marking2"
                  name="marking2"
                  placeholder="Allocate Marks Here"
                  onChange={handleChange}
                  value={marking.marking2}
                  required
                />
                
              </div>
            </div>
            <div className="row quiz-form">
              <label for="answer3" className="col-sm-2 col-form-label">
              Question 03
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="mark-control"
                  id="answer3"
                  name="answer3"
                  placeholder="Upload Answer Here"
                  onChange={handleChange}
                  value={marking.answer3}
                  
                />
                   <input
                  type="text"
                  className="mark-control"
                  id="marking3"
                  name="marking3"
                  placeholder="Allocate Marks Here"
                  onChange={handleChange}
                  value={marking.marking3}
                  required
                />
              </div>
            </div>
            <div className="row quiz-form">
              <label for="answer4" className="col-sm-2 col-form-label">
              Question 04
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="mark-control"
                  id="answer4"
                  name="answer4"
                  placeholder="Upload Answer Here"
                  onChange={handleChange}
                  value={marking.answer4}
                  
                />
                   <input
                  type="text"
                  className="mark-control"
                  id="marking4"
                  name="marking4"
                  placeholder="Allocate Marks Here"
                  onChange={handleChange}
                  value={marking.marking4}
                  required
                />
              </div>
            </div>
            <div className="row quiz-form">
              <label for="answer5" className="col-sm-2 col-form-label">
              Question 05
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="mark-control"
                  id="answer5"
                  name="answer5"
                  placeholder="Upload Answer Here"
                  onChange={handleChange}
                  value={marking.answer5}
                  
                />
                   <input
                  type="text"
                  className="mark-control"
                  id="marking5"
                  name="marking5"
                  placeholder="Allocate Marks Here"
                  onChange={handleChange}
                  value={marking.marking5}
                  required
                />
              </div>
            </div>
            <div className="row quiz-form">
              <label for="answer6" className="col-sm-2 col-form-label">
              Question 06
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="mark-control"
                  id="answer6"
                  name="answer6"
                  placeholder="Upload Answer Here"
                  onChange={handleChange}
                  value={marking.answer6}
                  
                />
                   <input
                  type="text"
                  className="mark-control"
                  id="marking6"
                  name="marking6"
                  placeholder="Allocate Marks Here"
                  onChange={handleChange}
                  value={marking.marking6}
                  required
                />
              </div>
            </div>
            <div className="row quiz-form">
              <label for="answer7" className="col-sm-2 col-form-label">
              Question 07
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="mark-control"
                  id="answer7"
                  name="answer7"
                  placeholder="Upload Answer Here"
                  onChange={handleChange}
                  value={marking.answer7}
                  
                />
                   <input
                  type="text"
                  className="mark-control"
                  id="marking7"
                  name="marking7"
                  placeholder="Allocate Marks Here"
                  onChange={handleChange}
                  value={marking.marking7}
                  required
                />
              </div>
            </div>
            <div className="row quiz-form">
              <label for="answer8" className="col-sm-2 col-form-label">
              Question 08
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="mark-control"
                  id="answer8"
                  name="answer8"
                  placeholder="Upload Answer Here"
                  onChange={handleChange}
                  value={marking.answer8}
                  
                />
                  <input
                  type="text"
                  className="mark-control"
                  id="marking8"
                  name="marking8"
                  placeholder="Allocate Marks Here"
                  onChange={handleChange}
                  value={marking.marking8}
                  
                />
            
                

              </div>
            </div>
            <div className="row quiz-form">
              <label for="answer9" className="col-sm-2 col-form-label">
              Question 09
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="mark-control"
                  id="answer9"
                  name="answer9"
                  placeholder="Upload Answer Here"
                  onChange={handleChange}
                  value={marking.answer9}
                  
                />
                  <input
                  type="text"
                  className="mark-control"
                  id="marking9"
                  name="marking9"
                  placeholder="Allocate Marks Here"
                  onChange={handleChange}
                  value={marking.marking9}
                  
                />
              </div>
            </div>
            <div className="row quiz-form">
              <label for="answer10" className="col-sm-2 col-form-label">
              Question 10
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="mark-control"
                  id="answer10"
                  name="answer10"
                  placeholder="Upload Answer Here"
                  onChange={handleChange}
                  value={marking.answer10}
                  
                />
                  <input
                  type="text"
                  className="mark-control"
                  id="marking10"
                  name="marking10"
                  placeholder="Allocate Marks Here"
                  onChange={handleChange}
                  value={marking.marking10}
                  
                />
              </div>
            </div>
            <div className="quiz-submit-card">
              <div className="quiz-submit">
                <Button 
                type="submit" 
                style={{
                  borderRadius: 35,
                  backgroundColor: "brown",
                  marginRight: "18px",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "cursive",
                  fontSize:"x-large"
                }}
                >
               Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddMarking;
