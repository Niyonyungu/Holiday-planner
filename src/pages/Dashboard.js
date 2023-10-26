import "../styles/Dashboard.css";
import { Outlet } from "react-router-dom";
import DashSide from "../components/DashSide";
import React from "react";

const Dasboard = () => {
  return (
    <>
      <div className="wrap-da">
        <header className="header">
          <h3>Hello , Vainqueur</h3>
        </header>
        <Outlet />
        <DashSide />
      </div>
    </>
  );
};

export default Dasboard;
