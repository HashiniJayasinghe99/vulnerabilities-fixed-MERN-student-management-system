import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Button from "@mui/material/Button";
import axios from "axios";
import "../lecture/Lecture.css";
import "../admin/admin.css";
import HomeIcon from '@mui/icons-material/Home';

function AddQuiz() {
  const [quiz, setQuiz] = useState({
    quizNumber: String,
    quiz1: String,
    quiz2: String,
    quiz3: String,
    quiz4: String,
    quiz5: String,
    quiz6: String,
    quiz7: String,
    quiz8: String,
    quiz9: String,
    quiz10: String,
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
      .post("http://localhost:5000/api/quiz", quiz)
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

    setQuiz((preValue) => {
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
        <div className="Quiz_heading">Upload New Quiz</div>
      
        <div className="QuizformStyle_1 ">
          <form onSubmit={sendData}>
          <div className="row quiz-form">
              <label for="date" className="col-sm-2 col-form-label">
                Date
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="quiz-control"
                  id="date"
                  name="date"
                  onChange={handleChange}
                  value={quiz.date}
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
                  className="quiz-control"
                  id="module"
                  name="moduleN"
                  placeholder="Enter module name"
                  onChange={handleChange}
                  value={quiz.moduleN}
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
                  className="quiz-control"
                  id="lecture"
                  name="Lecture"
                  placeholder="Enter lecture name"
                  onChange={handleChange}
                  value={quiz.Lecture}
                  required
                />
              </div>  
             </div>
             <div className="row quiz-form">
              <label for="quizNumber" className="col-sm-2 col-form-label">
                Quiz ID
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="quiz-control"
                  id="quizNumber"
                  name="quizNumber"
                  placeholder="First two letters of module name + number of the quiz"
                  onChange={handleChange}
                  value={quiz.quizNumber}
                  required
                  unique
                />
              </div>  
             </div>
              
            <div className="row quiz-form">
              <label for="quiz1" className="col-sm-2 col-form-label">
                Question 01
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="quiz-control"
                  id="quiz1"
                  name="quiz1"
                  placeholder="Upload question here"
                  onChange={handleChange}
                  value={quiz.quiz1}
                  required
                />
              </div>
            </div>
            <div className="row quiz-form">
              <label for="quiz2" className="col-sm-2 col-form-label">
              Question 02
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="quiz-control"
                  id="quiz2"
                  name="quiz2"
                  placeholder="Upload question here"
                  onChange={handleChange}
                  value={quiz.quiz2}
                  required
                />
              </div>
            </div>
            <div className="row quiz-form">
              <label for="quiz3" className="col-sm-2 col-form-label">
              Question 03
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="quiz-control"
                  id="quiz3"
                  name="quiz3"
                  placeholder="Upload question here"
                  onChange={handleChange}
                  value={quiz.quiz3}
                  
                />
              </div>
            </div>
            <div className="row quiz-form">
              <label for="quiz4" className="col-sm-2 col-form-label">
              Question 04
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="quiz-control"
                  id="quiz4"
                  name="quiz4"
                  placeholder="Upload question here"
                  onChange={handleChange}
                  value={quiz.quiz4}
                  
                />
              </div>
            </div>
            <div className="row quiz-form">
              <label for="quiz5" className="col-sm-2 col-form-label">
              Question 05
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="quiz-control"
                  id="quiz5"
                  name="quiz5"
                  placeholder="Upload question here"
                  onChange={handleChange}
                  value={quiz.quiz5}
                  
                />
              </div>
            </div>
            <div className="row quiz-form">
              <label for="quiz6" className="col-sm-2 col-form-label">
              Question 06
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="quiz-control"
                  id="quiz6"
                  name="quiz6"
                  placeholder="Upload question here"
                  onChange={handleChange}
                  value={quiz.quiz6}
                  
                />
              </div>
            </div>
            <div className="row quiz-form">
              <label for="quiz7" className="col-sm-2 col-form-label">
              Question 07
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="quiz-control"
                  id="quiz7"
                  name="quiz7"
                  placeholder="Upload question here"
                  onChange={handleChange}
                  value={quiz.quiz7}
                  
                />
              </div>
            </div>
            <div className="row quiz-form">
              <label for="quiz8" className="col-sm-2 col-form-label">
              Question 08
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="quiz-control"
                  id="quiz8"
                  name="quiz8"
                  placeholder="Upload question here"
                  onChange={handleChange}
                  value={quiz.quiz8}
                  
                />
              </div>
            </div>
            <div className="row quiz-form">
              <label for="quiz9" className="col-sm-2 col-form-label">
              Question 09
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="quiz-control"
                  id="quiz9"
                  name="quiz9"
                  placeholder="Upload question here"
                  onChange={handleChange}
                  value={quiz.quiz9}
                  
                />
              </div>
            </div>
            <div className="row quiz-form">
              <label for="quiz10" className="col-sm-2 col-form-label">
              Question 10
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="quiz-control"
                  id="quiz10"
                  name="quiz10"
                  placeholder="Upload question here"
                  onChange={handleChange}
                  value={quiz.quiz10}
                  
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

export default AddQuiz;
