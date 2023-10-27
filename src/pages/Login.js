import "../styles/Login.css";
import { Link } from "react-router-dom";
import { CgFacebook } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [emaiil, setEmaiil] = useState("");
  const [passworrd, setPassworrd] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/login",
      data: {
        email: emaiil,
        password: passworrd,
      },
    })
      .then((Response) => {
        localStorage.setItem("token", Response.data.access_token);
        navigate("/dashboard");
        toast.success("Logged in suceesfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("user doesn't exist");
      });
  };

  return (
    <div className="l-container">
      <form className="l-form">
        <h1>Login</h1>
        <p className="l-p">
          Dons't have an account yet?{" "}
          <Link to="/signup" className="l-span">
            Sign Up
          </Link>
        </p>
        <div className="flex-column">
          <label>Email Adress</label>
        </div>

        <div className="l-inputForm">
          <input
            onChange={(e) => {
              e.preventDefault();
              setEmaiil(e.target.value);
            }}
            type="text"
            className="l-input"
            placeholder="you@example.com"
          />
        </div>
        <div className="flex-column">
          <label>Password </label>
          <Link className="l-spanp">Forgot password?</Link>
        </div>
        <div className="l-inputForm">
          <input
            onChange={(e) => {
              e.preventDefault();
              setPassworrd(e.target.value);
            }}
            type="password"
            className="l-input"
            placeholder="Enter 6 character or more"
          />
        </div>

        <button onClick={(e) => handleSignin(e)} className="l-button-submit">
          LOGIN
        </button>

        <div className="flex-row">
          <button className="l-btn google">
            <FcGoogle />
            Google
          </button>
          <button className="l-btn facebook">
            <CgFacebook />
            Facebook
          </button>
        </div>
      </form>
      <div className="pic-side">
        <img src="woman-png.png" alt="" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
