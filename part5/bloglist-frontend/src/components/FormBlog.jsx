import React, { useState } from "react";
import { createBlog, getAll } from "../services/blogs"

function FormBlog({setLogIn, setBlogs}) {
  const [editing, setEditing] = useState(false)

  const [values, setValues] = useState({
    title: "",
    url: "",
    likes: ""
  });
  
  
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()  

    if(!editing){
      const res = await createBlog(values)
      const data = await getAll()
      setBlogs(data.data)
      setValues({
        title: "",
        url: "",
        likes: ""
      })
    }
  }  

  return (
    <form className="col-sm-6 col-md-5 shadow-sm border p-4 rounded"
      onSubmit={handleSubmit}
      method="POST" id="Form-Blog"
    >
      <h2 className="display-4 text-center mb-4">Create Blog</h2>
      
      <div className="form-group my-1">
        <label htmlFor="title" id="title">
          Title
        </label>
        <input
          type="text"
          name="title" id="title"
          value={values.title}
          className="form-control"
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group my-1">
        <label htmlFor="url" id="url">
          Url
        </label>
        <input
          type="text"
          name="url" id="url"
          value={values.url}
          className="form-control"
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group my-1">
        <label htmlFor="likes" id="likes">
          Likes
        </label>
        <input
          type="number"
          name="likes" id="likes"
          value={values.likes}
          className="form-control"
          onChange={handleChange}
          required
        />
      </div>

      <input type="submit" className="btn btn-primary btn-block w-100 mt-2" />
    </form>
  );
}

export default FormBlog;
