import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "../styles/Users.css";
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

  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete This User ?")) {
      let token = localStorage.getItem("token");
      axios({
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/delete/${id}`,
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
          toast.error(error.message);
          console.log(error, "Error");
        });
    }
  };

  return (
    <div className="sidebarr-right-sidee">
      <div className="table-component">
        <table class="tablee">
          <thead>
            <tr>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Role</th>

              <th className="actionf">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>

                  <td className="right-td">
                    <td className="right-tdd">
                      <span className="actionss">
                        <BsFillTrashFill
                          className="delete-btns"
                          onClick={() => handleDeleteUser(user._id)}
                        />

                        <BsFillPencilFill
                          className="edit-buttonns"
                          onClick={() =>
                            navigate(`/dashboard/edituser/${user._id}`)
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
