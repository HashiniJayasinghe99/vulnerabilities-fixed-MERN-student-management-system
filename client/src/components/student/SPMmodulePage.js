import React from "react";
import "./SPMmodulePage.css";
import ABCblackboard from "../images/StudentImages/ABCblackboard.gif"
import note from "../images/StudentImages/note.gif"
import PDF from "../images/StudentImages/pdf.png"
import group from "../images/StudentImages/group.gif"
import project from "../images/StudentImages/project.gif"

export default function SPMmodulePage() {
    return (
        <div>

            <div className="SPM__page_layout">
                <div>
                    <div className="SPM__intro">
                        <br />
                        <h2 ><p className="SPM__Module-Heading"><img className="left-nav-bar-image" src={ABCblackboard} alt="ABCblackboard-image" />
                            Welcome to Software Project Management - SE3080!</p>  </h2><br />
                        <p><b><pre>      • LIC: </pre></b>
                            <pre>          Mr.Deshan De Silva</pre>
                            <pre>          Email - deshan.d@my.sliit.lk</pre>
                            <b><pre>      • Instructor: </pre></b>
                            <pre>          Ms. Karthiga Rajendran</pre>
                            <pre>          Email - karthiga.r@sliit.lk</pre>
                        </p>
                    </div>

                    <div>
                        <hr className="spm__hr1" />
                    </div>

                    <div>
                        <h3><img className="note-image" src={note} alt="note-image" />Notice: Weekday and Weekend Students</h3>

                        <p><pre>          As mentioned in the module introduction recording, there will be no live delivery of lectures, tutorials, or practical sessions.</pre>

                            <pre>          You are required to be available for lectures, tutorials, or practical sessions only when evaluations or discussion sessions are conducted at those time slots.</pre>

                            <pre>          However, make sure that the time allocated for the above sessions is used to do the work related to the project and module assessments.</pre>
                        </p>
                    </div><br />

                    <div className="spm__projectGuidance_menu">
                        <h3>&nbsp;&nbsp;&nbsp;Project Guidance</h3>
                        <a href="https://drive.google.com/file/d/1vxmtgIup86X6bQ0LOfJpJKaqdBaQqIum/view?usp=sharing">
                            <button type="button" className="button8">
                                <pre>    <img className="pdf-image" src={PDF} alt="pdf-image" /> Project Milestone Document</pre>
                            </button>
                        </a><br />
                        <a href="https://drive.google.com/file/d/1yPGEkafHTo_w_jy4_2gRZzWjX_8pOkwE/view?usp=sharing">
                            <button type="button" className="button8">
                                <pre>    <img className="pdf-image" src={PDF} alt="pdf-image" /> Project 1 - Pdf</pre>
                            </button><br />
                        </a>
                        <a href="https://drive.google.com/file/d/1J-1_FNLZkc8ZmHyfxW9ZVNZDMDTYzDgb/view?usp=sharing">
                            <button type="button" className="button8">
                                <pre>    <img className="pdf-image" src={PDF} alt="pdf-image" /> Project 2 - Pdf</pre>
                            </button>
                        </a>
                    </div>

                    <div>
                        <div class="SPMRightNavBar">
                            <div class="SPMRightNavBarBody">
                                <div className="navItem">
                                    <a href="/StudentGroup">
                                        <button type="button" className="SPMRightNavBarButtons button1">
                                            <pre><img className="right-navbar-image" src={group} alt="group-image" />Student Groups</pre>
                                        </button>
                                    </a>
                                </div><br />
                                <div className="navItem">
                                    <a href="/StudentProject">
                                        <button type="button" className="SPMRightNavBarButtons button1">
                                            <pre><img className="right-navbar-image" src={project} alt="project-image" />Student Projects</pre>
                                        </button>
                                    </a>
                                </div><br />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}