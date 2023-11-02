import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "../styles/Bookings.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Bookings = () => {
  const params = useParams();
  let detailId = params.id;

  console.log(detailId);

  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  let token = localStorage.getItem("token");
  const fetchBookings = () => {
    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/booking/view",
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((Response) => {
        setBookings(Response.data);
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleDeleteBook = (id) => {
    if (window.confirm("Are you sure you want to delete This Booking ?")) {
      let token = localStorage.getItem("token");
      axios({
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/delete/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          toast.success("User deleted successfully");
          console.log(response, "Response");
          setTimeout(() => {
            navigate("/dashboard/bookings");
          }, 2000);
        })
        .catch((error) => {
          toast.error(error.message);
          console.log(error, "Error");
        });
    }
  };

  return (
    <div className="sidebar-right-sideee">
      <div className="table-component">
        <table class="tablee">
          <thead>
            <tr>
              <th> Name</th>
              <th> Email</th>
              <th> Phone</th>
              <th> Date</th>
              <th> Number Of Tickets</th>
              <th className="actionf">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((book) => {
              return (
                <tr>
                  <td className="book-id">{book.fullname}</td>
                  <td>{book.email}</td>
                  <td>{book.phone}</td>
                  <td>{book.date}</td>
                  <td>{book.numberOfTickets}</td>
                  <td>
                    <td>
                      <span className="actionss">
                        <BsFillTrashFill
                          className="delete-btns"
                          onClick={() => handleDeleteBook(book._id)}
                        />

                        <BsFillPencilFill
                          className="edit-buttonns"
                          onClick={() =>
                            navigate(`/dashboard/editbookings/${book._id}`)
                          }
                        />
                      </span>
                    </td>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Bookings;
