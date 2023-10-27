import "../styles/TourForm.css";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TourForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [destinationImage, setDestinationImage] = useState();
  const [destination, setDestination] = useState();
  const [duration, setDuration] = useState();
  const [groupSize, setGroupSize] = useState();
  const [price, setPrice] = useState();

  const submitTour = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let data = new FormData();
    data.append("backdropImage", destinationImage);
    data.append("destination", destination);
    data.append("Duration", duration);
    data.append("GroupSize", groupSize);
    data.append("Price", price);

    let token = localStorage.getItem("token");

    axios({
      method: "POST",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((Response) => {
        console.log(Response);
        toast.success("Tour created");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error occured");
      });
  };

  return (
    <form action="" className="addTourForm">
      <label htmlFor=""> Destination Image</label>
      <input
        type="file"
        src=""
        alt=""
        placeholder="Enter the image"
        className="file"
        onChange={(e) => {
          e.preventDefault();
          setDestinationImage(e.target.files[0]);
        }}
      />

      <label htmlFor="">destination</label>
      <input
        type="text"
        placeholder="mention your  destination"
        onChange={(e) => {
          e.preventDefault();
          setDestination(e.target.value);
        }}
      />

      <label htmlFor="">duration</label>
      <input
        type="text"
        placeholder="how long will you stay ?"
        onChange={(e) => {
          e.preventDefault();
          setDuration(e.target.value);
        }}
      />

      <label htmlFor="">group size</label>
      <input
        type="text"
        placeholder="let us know number of people"
        onChange={(e) => {
          e.preventDefault();
          setGroupSize(e.target.value);
        }}
      />

      <label htmlFor="">price</label>
      <input
        type="number"
        placeholder="price in dollar$"
        onChange={(e) => {
          e.preventDefault();
          setPrice(e.target.value);
        }}
      />

      <button className="addTourbu" onClick={submitTour}>
        {isLoading ? "Creating Tour..." : "Create Tour"}
      </button>
      <ToastContainer />
    </form>
  );
};

export default TourForm;
