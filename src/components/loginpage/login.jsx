import React from "react";
import logo from "../../Assets/olx login logo.svg";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="login-main-parent">
        <div className="login-parent-one">
          <div className="logo_123">
            <div className="logo">
              <Link to="/"><img src={ logo } alt="olx-logo" /></Link>
            </div>
            <div className="class_3211">Login into your OLX account</div>
          </div>
          <div className="login-child-one">
            <div className="userlable">
              <label htmlFor="username">User Name</label>
            </div>
            <div className="usertext">
              <input
                type="text"
                id="username"
                placeholder="Enter your Email or Phone number"
              ></input>
            </div>
          </div>
          <div className="login-child-two">
            <div className="passLable">
              <label htmlFor="password"> Password </label>
            </div>
            <div className="password">
              <input
                type="password"
                id="password"
                placeholder="Enter your password."
              />
            </div>
          </div>

          <div className="button_setup">
            <div className="log_in">Login</div>
            <div className="crat_acc">
              New to Olx-Clone? <Link to="/signup">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
