import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Lecture.css";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from '@mui/icons-material/Add';
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import xss from "xss"; // Import the xss library

function ViewMarking() {
  const [Marking, setMarking] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    function getQMarkings() {
      axios
        .get("http://localhost:5000/api/marking")
        .then((res) => {
          setMarking(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getQMarkings();
  }, []);

  const btnStyle = {
    borderRadius: 35,
    backgroundColor: "white",
    margin: "0 18px 18px",
    color: "black",
    fontWeight: "bold",
    fontFamily: "cursive"
  };

  function removeMarking(_id) {
    axios
      .delete("http://localhost:5000/api/marking/" + _id)
      .then((res) => {
        console.log(res.data);

        alert("marking deleted ");
        navigate("/view-marking");
      })
      .catch((err) => {
        alert(err);
      });

    setMarking(Marking.filter((marking) => marking._id !== _id));
  }

  function filterData(marking, searchKey) {
    const result = marking.filter((marking) => {
      return marking.moduleN.toLowerCase().includes(searchKey);
    });

    setMarking(result);
    console.log("..lll[[lo",result);
  }

  function handleSearchArea(e) {
    const searchKey = e.target.value;

    axios.get("http://localhost:5000/api/marking").then((res) => {
      filterData(res.data, searchKey);
    });
  }

  function printDiv(divName) {
    var sanitizedDivName = xss.escapeHtml(divName); // Sanitize divName
    var printContents = document.getElementById(sanitizedDivName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = xss.sanitizeHTML(printContents); // Sanitize the content

    window.print();

    document.body.innerHTML = xss.sanitizeHTML(originalContents); // Sanitize the original content
  }

  return (
    <div className="tableStyleL">
     <div className="L-header">
        <div className="header-index">
        <Button
          variant="contained"
          style={btnStyle}
          startIcon={<AddIcon />}
          onClick={() => {
            navigate("/upload-marking");
          }}
        >
          Add Marking
        </Button>
        <Button
          variant="contained"
          style={btnStyle}
          startIcon={<PictureAsPdfIcon />}
          onClick={()=>printDiv(`quiz-report`)}
        >
          Generate Marking Report
        </Button>
        </div>
        <div className="homebtn">
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
      </div>
      
      <div className="searchBarL">
        <div className="searchBarL-divLeft">
        <center><h1 className="AllVheading">All Added Markings</h1></center>
        </div>

        <div className="searchBar-divRight" >
        <input
          type="text"
          class="search-control rounded"
          placeholder=" 🔍  Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={handleSearchArea}
        />
        </div>
      </div>
      <div id="quiz-report" class="AllQTable">
      <div class="viewMain">
        {Marking.map((marking,index)=>{
           return(
            
            <div class="quizCard-content" key={marking._id} >
              <div class="label-div2">
               <div class="label-contain">
                  <h2 style={{alignSelf:"center"}} >{index + 1}</h2>
                  <h2 style={{alignSelf:"center"}}>{marking.markingNumber}</h2>
                  <center>
                        <div className="quiz-cred-M" style={{fontSize:"2px",wordBreak:"break-all", width:"inherit"}}>
                          <div className="quiz-cred">{marking.date}<br></br>
                          {marking.moduleN} <br></br>
                          {marking.Lecture} <br></br></div> <br></br>
                         
                        </div>
                        </center>
               </div>
              </div>
              <div class="link-div2">
              <a
                className="viewLink"
                href={`#${xss.escapeHtml(marking._id)}`}
              >
                View
              </a>
              </div>
            </div>
            
        );
        })}
        </div>
        {Marking.map((marking, index) => {
              return (
               
                <div class="modalDialog" id={marking._id} >
                  <div class="modal2" id="print">
                  <a class="close" title="Close" href="#close">
                  X
                  </a>
                  <div class="table-card">
                    <table className="table table-bordered table-hover quizDetails" >
                    <thead className="table-dark"> 
                    <th colspan="3" key={marking._id} >
                    <div class="L-header">
                        <div class="header-index">
                        <h1 style={{position:"fix", color:"black"}}>
                        <center>{index + 1}</center></h1>
                        <h1 style={{position:"fix", color:"black"}}><center>{marking.markingNumber}</center></h1>
                        
                      </div>
                      <div class="header-left">
                      <Button
                                variant="contained"
                                style={{
                                    borderRadius: 35,
                                    backgroundColor: "",
                                    marginRight: "18px",
                                    color: "white",
                                    fontWeight: "bold",
                                    fontFamily: "cursive",
                                    fontSize: "large"
                                }}
                                startIcon={<EditIcon />}
                                onClick={() => {
                                navigate(`/update-marking/${marking._id}`);
                                }}
                            > Update
                            </Button>
                            <Button
                              variant="contained"
                              style={{
                                  borderRadius: 35,
                                  backgroundColor: "brown",
                                  marginRight: "18px",
                                  color: "white",
                                  fontWeight: "bold",
                                  fontFamily: "cursive",
                                  fontSize: "large"
                            }}
                      startIcon={<DeleteForeverIcon />}
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you wish to delete this record?"
                          )
                        )
                        removeMarking(marking._id);
                      }}
                    >
                      Delete
                    </Button>
                    <Button  
                    variant="contained"
                    
                    style={{
                      borderRadius: 35,
                      marginRight: "18px",
                      backgroundColor:" #006d2d",
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "cursive",
                      fontSize: "large"
                }}
                    startIcon={<PictureAsPdfIcon />} onClick={()=>printDiv(`${marking._id}`)}> 
                    <b>Download Marking </b> </Button>

                      </div>
                    </div>
                    </th> 
                  </thead>
                  <tbody className="table-light">
                 
                     <tr>
                        <td><p><label>Date:</label></p></td>
                        <td colspan="2"><p style={{color:"green"}}>{marking.date}</p></td>
                     </tr>
                     <tr>
                        <td><p>Module: </p></td>
                        <td colspan="2"><p style={{color:"red"}}>{marking.moduleN}</p></td>
                     </tr>
                     <tr>
                        <td><p>Lecture:</p></td>
                        <td  colspan="2"><p style={{color:"blue"}}>{marking.Lecture}</p></td>
                     </tr>
                     <tr>
                        <td><p>Question 01:</p></td>
                        <td><p> {marking.answer1}</p></td>
                        <td><p> {marking.marking1} marks</p></td>
                     </tr>
                     <tr>
                        <td><p>Question 02:</p></td>
                        <td><p>{marking.answer2}</p></td>
                        <td><p> {marking.marking2} marks</p></td>
                     </tr>
                     <tr>
                        <td><p>Question 03:</p></td>
                        <td><p>{marking.answer3}</p></td>
                        <td><p> {marking.marking3} marks</p></td>
                     </tr>
                     <tr>
                        <td><p>Question 04:</p></td>
                        <td><p>{marking.answer4}</p></td>
                        <td><p> {marking.marking4} marks</p></td>
                     </tr>
                     <tr>
                        <td><p>Question 05: </p></td>
                        <td><p>{marking.answer5}</p></td>
                        <td><p> {marking.marking5} marks</p></td>
                     </tr>
                     <tr>
                        <td><p>Question 06: </p></td>
                        <td><p>{marking.answer6}</p></td>
                        <td><p> {marking.marking6} marks</p></td>
                     </tr>
                     <tr>
                        <td><p>Question 07:</p></td>
                        <td><p>{marking.answer7}</p></td>
                        <td><p> {marking.marking7} marks</p></td>
                     </tr>
                     <tr>
                        <td><p>Question 08:</p></td>
                        <td><p>{marking.answer8}</p></td>
                        <td><p> {marking.marking8} marks</p></td>
                     </tr>
                     <tr>
                        <td><p>Question 09:</p></td>
                        <td><p>{marking.answer9}</p></td>
                        <td><p> {marking.marking9} marks</p></td>
                     </tr>
                     <tr>
                        <td><p>Question 10:</p></td>
                        <td><p>{marking.answer10}</p></td>
                        <td><p> {marking.marking10} marks</p></td>
                     </tr>
                    
                  </tbody>
                </table>
                </div>
                </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default ViewMarking;
