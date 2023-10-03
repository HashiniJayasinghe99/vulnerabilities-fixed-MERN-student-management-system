import React from "react";
import "./StudentMenu.css";
import profile from "../images/StudentImages/profile.gif"
import support from "../images/StudentImages/support.gif"
import quize from "../images/StudentImages/quize.gif"
import result from "../images/StudentImages/result.gif"
import theNextYou from "../images/StudentImages/the-next-you-image.jpg"
import books from "../images/StudentImages/books.gif"
import stationery from "../images/StudentImages/stationery.gif"
import mortarboard from "../images/StudentImages/mortarboard.gif"


export default function StudentMenu() {
  return (
    <div>
      <div class="left-nav-bar">
        <a href="/StudentProfileLogin"><button className="left-nav-bar-button btn-1">
          <img className="left-nav-bar-image" src={profile} alt="Profile-image" />Profile</button>
        </a>  <br />
        <a href="#"><button className="left-nav-bar-button btn-2">
          <img className="left-nav-bar-image" src={support} alt="Support-Image" />Support Services</button>
        </a>  <br />
        <a href="#"><button className="left-nav-bar-button btn-3">
          <img className="left-nav-bar-image" src={quize} alt="Quize-Image" />Quizzes</button>
        </a>  <br />
        <a href="#"><button className="left-nav-bar-button btn-4">
          <img className="left-nav-bar-image" src={result} alt="Results_Image" />Marking Scheams</button>
        </a><br />
      </div>

      <div className="next-you-image">
        <img src={theNextYou} alt="nextYouImage" />
      </div> <br/>

      <div className="moduleMenu">
        <a href="/SPMmodulePage"><button className="spm_module_button">
          <img className="moduleMenu-image" src={books} alt="books" />Software Project Management - SE3080</button>
        </a><br />
        <a href="/SPMmodulePage"><button className="spm_module_button">
          <img className="moduleMenu-image" src={stationery} alt="stationery" />User Experience Engineering - SE3050</button>
        </a><br />
        <a href="/SPMmodulePage"><button className="spm_module_button">
          <img className="moduleMenu-image" src={mortarboard} alt="mortarboard" />Case Studies in  Engineering - SE3070</button>
        </a><br />

      </div>

    </div>
  );
}
