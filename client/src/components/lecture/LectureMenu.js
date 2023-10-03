import React from "react";
import { useNavigate } from "react-router-dom";
import "../lecture/Lecture.css"
import sir from "../images/animated-cartoon-lecture-animation-png-favpng-9geg7t8LAqp2kn5qf0uWEWRPp.jpg";
import theNextYou from "../images/StudentImages/the-next-you-image.jpg"

export default function LectureMenu() {
  let navigate = useNavigate();
  return (
    <div className="tableStyleL lecture-menu-card">
    <div className="lecture-menu-card">
    <div className="lectureMenu">
      <div className="lMheading">
      <i class='fa fa-hand-o-right handI'></i><br></br>
      <h2> Upload Quizes and Marking Schemes from here </h2>
        
        </div>
      <div className="lecBtn">
        <button
          type="button"
          className="btn btn-light btn-lg btn-block"
          onClick={() => {
            navigate("/uploadQuiz");
          }}
        >
          <div className="lectureMenuBtns"> Upload Quiz</div>
        </button>

        <button
          type="button"
          className="btn btn-light btn-lg btn-block"
          onClick={() => {
            navigate("/viewAllQuizzes");
          }}
        >
          <div className="lectureMenuBtns"> View Quiz</div>
        </button>

        <button
          type="button"
          className="btn btn-light btn-lg btn-block"
          onClick={() => {
            navigate("/upload-marking");
          }}
        >
          <div className="lectureMenuBtns"> Upload Marking Scheme</div>
        </button>

        <button
          type="button"
          className="btn btn-light btn-lg btn-block"
          onClick={() => {
            navigate("/view-marking");
          }}
        >
          <div className="lectureMenuBtns"> View Marking Scheme</div>
        </button>
        
      </div>
      <div class="lecture-img handI">
        <img src={theNextYou} alt="nextYou"/>
      </div>
    </div>
    </div> 
      
  </div>
    
  );
};

