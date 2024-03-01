import React, { useState } from "react";
import { Login } from "../services/login";
import { getJWT, setJWT } from '../utils/jwt'

function FormLogin({setLogIn}) {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null)


  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    Login(values)
    .then(r =>{
      const token = r.access_token
      setJWT(token)
      setLogIn(true)
    })
    .catch(r => {
      const error = r.response.data.error
      setError(error)
    })
  
  }

  return (
    <form
      className="container shadow-sm border p-4 rounded"
      style={{ maxWidth: "500px" }}
      onSubmit={handleSubmit}
      method="POST" id="form-login"
    >
      <h2 className="display-4 text-center mb-4">Log In</h2>

      <div className="form-group my-2">
        <label htmlFor="username" id="username ">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={values.username}
          className="form-control"
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group my-2">
        <label htmlFor="username" id="username">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={values.password}
          className="form-control"
          onChange={handleChange}
          required
        />
      </div>
      {
        error&&
        <div>
          <span className="d-block text-danger text-sm">{error}</span>
        </div>
    
      }
      <input type="submit" className="btn btn-primary w-100 mt-1" />
    </form>
  );
}

export default FormLogin;
