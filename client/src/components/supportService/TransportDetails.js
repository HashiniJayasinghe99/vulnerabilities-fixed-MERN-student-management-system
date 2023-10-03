import React, { useState, useEffect } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./Supportserviceform.css";
import xss from "xss"; // Import the xss library

function TransportDetails() {
    const [Transport, setTransport, setUsers] = useState([]);

    useEffect(() => {
        function getTransport() {
            axios
                .get("http://localhost:5000/api/transportdetails")
                .then((res) => {
                    setTransport(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getTransport();
    }, []);

    function deleteTransport(_id) {
        axios
            .delete("http://localhost:5000/api/transportdetails/" + _id)
            .then((res) => {
                console.log(res.data);

                alert("Details deleted");
            })
            .catch((err) => {
                alert(err);
            });

        setUsers(Transport.filter((transport) => transport._id !== _id));
    }

    const btnStyle = {
        borderRadius: 35,
        backgroundColor: "white",
        color: "black",
        fontWeight: "bold",
    };

    function filterData(transport, searchKey) {
        const result = transport.filter((transport) => {
            return transport.transportID.toLowerCase().includes(searchKey);
        });

        setTransport(result);
    }

    function handleSearchArea(e) {
        const searchKey = e.target.value;

        axios.get("http://localhost:5000/api/transportdetails").then((res) => {
            filterData(res.data, searchKey);
        });
    }

    return (
        <div className="">
            <center>
                {" "}
                <h2 className="transportdetails"> Transport Service Details</h2>
            </center>
            <br />
            <div className="tarnsportButton">
                <a href="/AddTransport">
                    <button type="button" className="button_getreport_transport">
                        <b> ➕ Add Transport</b>
                    </button>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/ViewTransportReport">
                    <button type="button" className="button_getreport_transport">
                        <b> 📚 Get Report &nbsp;&nbsp;</b>
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
                    backgroundColor="red"
                />
            </div>
            <br></br>
            <div className="table_search-s">
                <table className="table table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Transport ID</th>
                            <th scope="col">Vehicle Type</th>
                            <th scope="col">Owner Name</th>
                            <th scope="col">Capacity</th>
                            <th scope="col">Covering Areas</th>
                            <th scope="col">Time</th>
                            <th scope="col">Contact No</th>
                            <th scope="col">Update or delete</th>
                        </tr>
                    </thead>

                    <tbody className="table-light">
                        {Transport.map((transport, index) => {
                            return (
                                <tr key={transport._id}>
                                    <td>{index + 1}</td>
                                    <td>{transport.transportID}</td>
                                    <td>{transport.vehicleType}</td>
                                    <td>{transport.ownerName}</td>
                                    <td>{transport.capacity}</td>
                                    <td>{transport.coverage}</td>
                                    <td>{transport.time}</td>
                                    <td>{transport.contactNo}</td>

                                    <td>
                                        <a
                                            className="btn btn-warning"
                                            href={`/Updatetransport/${xss.escapeHtml(
                                                transport._id
                                            )}`}
                                        >
                                            <EditIcon />
                                            &nbsp;&nbsp; <b>Update</b>
                                        </a>
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
                                                    deleteTransport(transport._id);
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
    );
}
export default TransportDetails;
