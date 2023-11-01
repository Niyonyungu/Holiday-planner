import React from "react";
import "../styles/Dashboard.css";
import StatsCard from "./StatsCard";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
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
        text: "Tor Bookings",
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
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
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
        <Bar options={options} data={data} />
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default DashMain;
