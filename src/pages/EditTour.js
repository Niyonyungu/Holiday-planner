import "../styles/TourForm.css";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const EditTour = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  let tourId = params.id;
  const [destinationImage, setDestinationImage] = useState();
  const [destination, setDestination] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();
  const [groupSize, setGroupSize] = useState();
  const [price, setPrice] = useState();

  /*    ==============================      */
  const fetchTour = () => {
    let token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement?fieldName=_id&value=${tourId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setDestinationImage(response?.data?.backdropImage);
        setDestination(response?.data?.destination);
        setTitle(response?.data?.Title);
        setDescription(response?.data?.Description);
        setDuration(response?.data?.Duration);
        setGroupSize(response?.data?.GroupSize);
        setPrice(response?.data?.Price);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchTour();
  }, []);
  /*    ==============================      */

  /*    ==============================      */
  const submitNewTour = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let formdata = new FormData();
    formdata.append("backdropImage", destinationImage);
    formdata.append("Destination", destination);
    formdata.append("Title", title);
    formdata.append("Description", description);
    formdata.append("Duration", duration);
    formdata.append("GroupSize", groupSize);
    formdata.append("Price", price);

    let token = localStorage.getItem("token");

    axios({
      method: "PUT",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/update/${tourId}`,
      data: formdata,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((Response) => {
        console.log(Response);
        toast.success(Response.data.message);
        setIsLoading(false);
        navigate("/dashboard/tourdashboard");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error occured");
      });
  };
  /*    ======================================   */

  return (
    <form action="" className="addTourForm">
      <h4>EDIT</h4>
      <label htmlFor="">Destination Image</label>
      <input
        type="file"
        src=""
        alt=""
        placeholder="Enter New image"
        className="filee"
        onChange={(e) => {
          e.preventDefault();
          setDestinationImage(e.target.files[0]);
        }}
      />

      <label htmlFor="">Destination</label>
      <input
        value={destination}
        type="text"
        placeholder="mention your New destination"
        onChange={(e) => {
          e.preventDefault();
          setDestination(e.target.value);
        }}
      />

      <label htmlFor="">Title</label>
      <input
        value={title}
        type="text"
        placeholder="mention your New destination"
        onChange={(e) => {
          e.preventDefault();
          setTitle(e.target.value);
        }}
      />

      <label htmlFor="">Description</label>
      <input
        value={description}
        type="text"
        placeholder="mention your New destination"
        onChange={(e) => {
          e.preventDefault();
          setDescription(e.target.value);
        }}
      />

      <label htmlFor="">Duration</label>
      <input
        value={duration}
        type="text"
        placeholder="how long will you stay ?"
        onChange={(e) => {
          e.preventDefault();
          setDuration(e.target.value);
        }}
      />

      <label htmlFor="">Group size</label>
      <input
        value={groupSize}
        type="text"
        placeholder="let us know number of people"
        onChange={(e) => {
          e.preventDefault();
          setGroupSize(e.target.value);
        }}
      />

      <label htmlFor="">Price</label>
      <input
        value={price}
        type="number"
        placeholder="New price in dollar $"
        onChange={(e) => {
          e.preventDefault();
          setPrice(e.target.value);
        }}
      />

      <button className="addTourbu" onClick={submitNewTour}>
        {isLoading ? "Submitting New Tour..." : "Submit New Tour"}
      </button>
      <ToastContainer />
    </form>
  );
};

export default EditTour;
