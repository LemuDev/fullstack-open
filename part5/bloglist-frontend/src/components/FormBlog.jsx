import React, { useState } from "react";

function FormBlog() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form className="col-sm-6 col-md-5 shadow-sm border p-4 rounded">
      <h2 className="display-4 text-center mb-4">Create Blog</h2>
      
      <div className="form-group my-1">
        <label htmlFor="username" id="username">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={values.username}
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="form-group my-1">
        <label htmlFor="username" id="username">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={values.password}
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <input type="submit" className="btn btn-primary" />
    </form>
  );
}

export default FormBlog;
