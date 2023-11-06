import "../styles/Dashboard.css";
import React from "react";
import { PiAirplaneTiltThin } from "react-icons/pi";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { TbLayoutDashboard } from "react-icons/tb";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import emug from "../assets/mg.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SideBar = () => {
  const navigate = useNavigate();
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  const handleLogOut = () => {
    navigate("/login");
  };
  /*      =========================      */
  /*      =========================      */

  return (
    <aside className="sidebar">
      <div className="sidebar-title">
        <div className="photo-wrap">
          <img src={emug} alt="" />
        </div>
        <h3>Vainqueur</h3>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/dashboard">
            <TbLayoutDashboard className="icon" /> Dashboard
            <BiChevronRight className="go" />
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="tourdashboard">
            <PiAirplaneTiltThin className="icon" /> Tours
            <BiChevronRight className="go" />
          </Link>
        </li>

        <li className="sidebar-list-item">
          <Link to="bookings">
            <BsJournalBookmarkFill className="icon" /> Bookings
            <BiChevronRight className="go" />
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="users">
            <FaUsers className="icon" /> Users
            <BiChevronRight className="go" />
          </Link>
        </li>
      </ul>
      <div className="sidebar-list-item dwn">
        <button onClick={handleLogOut}>
          <HiOutlineLogout className="icon" />
          LOG OUT
        </button>
        <ToastContainer />
      </div>
    </aside>
  );
};

export default SideBar;
