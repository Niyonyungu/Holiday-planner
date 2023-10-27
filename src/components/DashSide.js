import "../styles/Dashboard.css";
import React from "react";
import { PiAirplaneTiltThin } from "react-icons/pi";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { TbLayoutDashboard } from "react-icons/tb";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import emug from "../assets/mg.jpg";
import { Link } from "react-router-dom";

const SideBar = () => {
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
          </Link>
        </li>

        <li className="sidebar-list-item">
          <Link to="tourdashboard">
            <PiAirplaneTiltThin className="icon" /> Tours
          </Link>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsJournalBookmarkFill className="icon" /> Bookings
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <FaUsers className="icon" /> Users
          </a>
        </li>
      </ul>
      <div className="sidebar-list-item dwn">
        <Link to="/login">
          <HiOutlineLogout className="icon" />
          LOG OUT
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
