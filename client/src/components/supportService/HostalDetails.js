import React, { useState, useEffect } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import xss from "xss"; // Import the xss library
import "./Supportserviceform.css";

function HostalDetails() {
  const [Hostal, setHostal] = useState([]);

  useEffect(() => {
    function getHostals() {
      axios
        .get("http://localhost:5000/api/hostaldetails")
        .then((res) => {
          setHostal(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getHostals();
  }, []);

  function deleteHostal(_id) {
    axios
      .delete("http://localhost:5000/api/hostaldetails/" + _id)
      .then((res) => {
        console.log(res.data);

        alert("Details deleted");
      })
      .catch((err) => {
        alert(err);
      });

    setHostal(Hostal.filter((hostal) => hostal._id !== _id));
  }
  const btnStyle = {
    borderRadius: 35,
    backgroundColor: "white",
    color: "black",
    fontWeight: "bold",
  };

  function filterData(hostal, searchKey) {
    const result = hostal.filter((hostal) => {
      return hostal.hostalID.toLowerCase().includes(searchKey);
    });
    console.log("..hostolooo", result);
    setHostal(result);
  }

  function handleSearchArea(e) {
    const searchKey = e.target.value;

    axios.get("http://localhost:5000/api/hostaldetails").then((res) => {
      filterData(res.data, searchKey);
    });
  }

  return (
    <div>
      <br></br>
      <div>
        <h2 className="availableHostel"> Available Hostels Details </h2>
        <br />
      </div>
      <div className="add-get-btn">
        <a href="/Addhostal">
          <button type="button" className="button_getreport">
            <b> ➕ Add Hostel &nbsp;&nbsp;</b>
          </button>
        </a>

        <a href="/ViewHostelReport">
          <button type="button" className="button_getreport">
            <b> 📚 Get Report </b>
          </button>
        </a>
      </div>

      <div className="searchBar-hostal">
        <input
          type="text"
          class="form-s-control rounded"
          placeholder=" 🔍 Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={handleSearchArea}
        />
      </div>
      <br></br>
      <div className="table_search-s">
        <div className="table table-success table-striped">
          <table className="table table-bordered">
            <thead className="">
              <tr>
                <th scope="col"></th>
                <th className="table-secondary" scope="col">
                  Hostal ID
                </th>
                <th className="table-danger" scope="col">
                  Hostal Name
                </th>
                <th className="table-warning" scope="col">
                  Address
                </th>
                <th className="table-info" scope="col">
                  Bedrooms
                </th>
                <th className="table-primary" scope="col">
                  Bathrooms
                </th>
                <th className="table-secondary" scope="col">
                  Persons
                </th>
                <th className="table-success" scope="col">
                  Charge per person
                </th>
                <th className="table-danger" scope="col">
                  Contact No
                </th>
                <th className="table-light" scope="col">
                  Update or delete
                </th>
              </tr>
            </thead>

            <tbody className="table-light">
              {Hostal.map((hostal, index) => {
                return (
                  <tr key={hostal._id}>
                    <td>{index + 1}</td>
                    <td>{hostal.hostalID}</td>
                    <td>{hostal.hostalName}</td>
                    <td>{hostal.address}</td>
                    <td>{hostal.bedRooms}</td>
                    <td>{hostal.bathrooms}</td>
                    <td>{hostal.persons}</td>
                    <td>{hostal.charge}</td>
                    <td>{hostal.contactNo}</td>

                    <td>
                      <Link
                        className="btn btn-warning"
                        to={`/UpdateHostal/${xss.escape(hostal._id)}`}
                      >
                        <EditIcon />
                        &nbsp;&nbsp; <b>Update</b>
                      </Link>
                      &nbsp;&nbsp;
                      <a
                        className="btn btn-danger"
                        href="#"
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you wish to delete this record?"
                            )
                          )
                            deleteHostal(hostal._id);
                        }}
                      >
                        <DeleteForeverIcon />
                        <b> Delete </b>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default HostalDetails;
