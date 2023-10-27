import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "../styles/Dashboard.css";
import { Link } from "react-router-dom";

const TourDashboard = () => {
  const [tableData, setTableData] = useState([]);
  const [isfetch, setIsFetch] = useState(false);

  let token = localStorage.getItem("token");
  const fetchTours = () => {
    setIsFetch(true);
    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour",
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((Response) => {
        setTableData(Response.data);
        setIsFetch(false);
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
        alert("error found");
      });
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleDeleteRow = (targetIndex) => {
    setTableData(tableData.filter((_, idx) => idx !== targetIndex));
  };

  return (
    <div className="sidebar-right-side">
      <Link to="/dashboard/tourform">
        <button className="Add-tour-btn">+ Add Tour</button>
      </Link>
      <div className="table-component">
        <table class="table">
          <thead>
            <tr>
              <th>Destination Image</th>
              <th>Destination</th>
              <th>Duration</th>
              <th>Group Size</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((table, idx) => {
              return (
                <tr key={idx}>
                  <td>
                    <img
                      src={table.backdropImage}
                      alt="image"
                      className="image-tour"
                    />
                  </td>
                  <td>{table.destination}</td>
                  <td>{table.duration}</td>
                  <td>{table.GroupSize}</td>
                  <td>{table.Price}</td>
                  <td>
                    <td>
                      <span className="actions">
                        <BsFillTrashFill
                          className="delete-btn"
                          onClick={() => handleDeleteRow(idx)}
                        />
                        <BsFillPencilFill className="edit-buttonn" />
                      </span>
                    </td>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TourDashboard;
