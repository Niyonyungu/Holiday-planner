import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "../styles/Users.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  let token = localStorage.getItem("token");
  const fetchUsers = () => {
    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users",
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((Response) => {
        setUsers(Response.data);
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
        toast.error(Response.data.message);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete This User ?")) {
      let token = localStorage.getItem("token");
      axios({
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/delete?fieldName=_id&value=${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          toast.success("User deleted successfully");
          console.log(response, "Response");
          setTimeout(() => {
            navigate("/dashboard/users");
          }, 2000);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
          console.log(error, "Error");
        });
    }
  };

  return (
    <div className="sidebar-right-side">
      <Link to="/dashboard/userform">
        <button className="Add-tour-btn">+ Add User</button>
      </Link>

      <div className="table-component">
        <table class="table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.destination}</td>
                  <td>{user.Duration}</td>
                  <td>{user.GroupSize}</td>
                  <td>
                    <td>
                      <span className="actions">
                        <BsFillTrashFill
                          className="delete-btn"
                          onClick={() => handleDelete(user._id)}
                        />

                        <BsFillPencilFill
                          className="edit-buttonn"
                          onClick={() =>
                            navigate(`/dashboard/edittour/${user._id}`)
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

export default Users;
