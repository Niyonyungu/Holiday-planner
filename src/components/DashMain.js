import React from "react";
import "../styles/Dashboard.css";
import StatsCard from "./StatsCard";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  ArcElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DashMain = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Tour Bookings",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Number Of Booking",
        data: [20, 42, 43, 10, 54, 8, 23, 40],
        backgroundColor: "rgb(194,157,89)",
      },
      {
        label: "Number of Users",
        data: [10, 40, 13, 13, 54, 18, 43, 20],
        backgroundColor: "rgb(43,40,40)",
      },
    ],
  };

  const dataPie = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],

    datasets: [
      {
        label: " Number Of Tours",
        data: [12, 19, 3, 5, 2, 3, 5],
        backgroundColor: [
          "#B9A943",
          "#23556C",
          "#6D5322",
          "#303436",
          "#C39B46",
          "#005236",
          "#D0D8B2",
        ],

        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard-center">
      <div className="stat-card">
        <StatsCard title="Tours" amount="40" />
        <StatsCard title="Booking" amount="200" />
        <StatsCard title="users" amount="100" />
      </div>

      <div className="charts">
        <div className="left-chart">
          {" "}
          <Bar options={options} data={data} />
        </div>
        <div className="right-chart">
          <Pie data={dataPie} />
        </div>
      </div>
    </div>
  );
};

export default DashMain;
