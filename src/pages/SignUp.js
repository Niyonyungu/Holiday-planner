import "../styles/SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { CgFacebook } from "react-icons/cg";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sign = () => {
  const navigate = useNavigate();
  const [fullNames, setFullNames] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup",
      data: {
        email: email,
        fullname: fullNames,
        password: password,
      },
    })
      .then((Response) => {
        localStorage.setItem("token", Response.data.access_token);
        navigate("/dashboard");
        toast.success("User registered succesfully");
      })
      .catch((error) => {
        toast.error("Error Occured");
      });
  };

  return (
    <div className="sl-container">
      <form className="sl-form">
        <h1>Sign Up</h1>

        <div className="flex-column">
          <label>Full Names</label>
        </div>
        <div className="sl-inputForm">
          <input
            onChange={(e) => {
              e.preventDefault();
              setFullNames(e.target.value);
            }}
            type="text"
            className="sl-input"
            placeholder="kabalisa john"
          />
        </div>

        <div className="flex-column">
          <label>Email Adress</label>
        </div>
        <div className="sl-inputForm">
          <input
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
            type="email"
            className="sl-input"
            placeholder="you@example.com"
          />
        </div>
        <div className="flex-column">
          <label>Password </label>
        </div>
        <div className="sl-inputForm">
          <input
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            type="password"
            className="sl-input"
            placeholder="Enter 6 character or more"
          />
        </div>

        <button onClick={(e) => handleSignup(e)} className="sl-button-submit">
          SIGN UP
        </button>

        <div className="flex-row">
          <button className="sl-btn google">
            <FcGoogle />
            Google
          </button>
          <button className="sl-btn facebook">
            <CgFacebook />
            Facebook
          </button>
        </div>
      </form>
      <div className="spic-side">
        <img src="woman-png.png" alt="" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Sign;
