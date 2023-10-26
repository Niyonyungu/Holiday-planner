import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";

const TourDashboard = () => {
  return (
    <div className="sidebar-right-side">
      <button className="Add-tour-btn">+ Add Tour</button>
      <div className="table-component">
        <table class="table">
          <thead>
            <tr>
              <th>Destination</th>
              <th>Duration</th>
              <th>Group Size</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Italy</td>
              <td>$1300</td>
              <td>Ullyse kabalisa</td>
              <td>
                <div className="action-icons">
                  <BsFillTrashFill className="dele-btn" />
                  <BsFillPencilFill className="edt-btn" />
                </div>
              </td>
            </tr>
            <tr>
              <td>Greece</td>
              <td>$1200</td>
              <td>safaree pierre</td>
              <td>
                <div className="action-icons">
                  <BsFillTrashFill className="dele-btn" />
                  <BsFillPencilFill className="edt-btn" />
                </div>
              </td>
            </tr>
            <tr>
              <td>cicilly</td>
              <td>$1000</td>
              <td>jean de die sibo</td>
              <td>
                <div className="action-icons">
                  <BsFillTrashFill className="dele-btn" />
                  <BsFillPencilFill className="edt-btn" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TourDashboard;
