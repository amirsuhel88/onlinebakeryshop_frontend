import React, { useState } from "react";
import loginImage from "../../assets/data/images/login.png";
import "../../assets/data/styles/style.css";
import validation from "../Login/Validation/loginValidation.js";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({
      ...prev,
      [event.target.name]: [event.target.value]
    }))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    if (

      errors.email === "" &&
     
      errors.password === ""
    ) {
      axios
        .post("http://localhost:8081/api/v1/login", values)
        .then(res => {
          if(res.data==="success"){
            navigate('/home');
          }else{
            alert("No record found in database")
          }
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-7"
          style={{ backgroundImage: `url(${loginImage})`, height: "100vh" }}
        >
          {/* this part is left side of the division */}
        </div>
        <div
          className="col-5 d-flex align-items-center justify-content-center "
          style={{ height: "100vh" }}
        >
          {/* this part is right side of the division. All the login form will stay here */}

          <form action="" onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <p className="opacity-75">
              Please enter your login details to sign in
            </p>

            {/* Email input */}
            <div className="mb-3 ">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                onChange={handleInput}
              />
                {errors.email && <span className="text-danger">{errors.email}</span>}
             
            </div>

            {/* password field */}
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                name="password"
                onChange={handleInput}
              />
              {errors.password && <span className="text-danger">{errors.password}</span>}
            </div>

            {/* terms and policies */}
            <p className="opacity-75">
              You are agree to our terms and policies
            </p>

            {/* login button */}
            <div class="d-grid gap-2">
              <button type="submit" class="login-button">
                Login
              </button>
              <p>
                New User?
                <a href="/signup"> Sign Up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default Login;
