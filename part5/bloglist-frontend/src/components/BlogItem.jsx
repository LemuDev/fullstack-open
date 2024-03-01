import React, { useEffect, useState } from "react";
import { deleteBlog, getAll, editBlog, LikeBlog } from "../services/blogs";

export function BlogItem({ blog, setBlogs }) {
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [editMode, setEditMode] = useState(false);


  const [values, setValues] = useState({        
    title: blog.title,
    url: blog.url,
    likes: blog.likes
    }
  );



  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleEdit = async(e) => {
    e.preventDefault()

    await editBlog(blog.id, values)

    const data = await getAll()
    setBlogs(data.data)

    setEditMode(false)
  }


  const Delete = async () => {
    setLoading(true);
    setDeleting(true);
    await deleteBlog(blog.id);

    const data = await getAll().finally(() => setLoading(false));
    setBlogs(data.data);
  };

  const Like = async (id)=>{
    await LikeBlog(id)
    const data = await getAll().finally(()=> setLoading(false))
    
    const newData = [...data.data]

    setBlogs(newData);

    console.log(data)
  }

  return (
    <div
      className="alert alert-secondary d-flex justify-content-between align-items-center"
      style={
        deleting
          ? { transition: "400ms", transform: "translateX(900px)" }
          : null
      }
    >
      <div className="flex-grow-1">
        <h3 className="h6 d-block">author: {blog.author.name}</h3>
        {editMode ? (
          <form id="form-edit">
            <div className="form-group d-flex my-1">
              <label htmlFor="">Title: </label>
              <input
                type="text"
                className="form-control form-control-sm"
                value={values.title}
                onChange={handleChange}

                name="title"
              />
            </div>
            <div className="form-group d-flex my-1">
              <label htmlFor="">Url: </label>
              <input
                type="text"
                className="form-control form-control-sm"
                value={values.url}
                onChange={handleChange}

                name="url"
              />
            </div>
            <div className="form-group d-flex my-1">
              <label htmlFor="">Likes: </label>
              <input
                type="number"
                className="form-control form-control-sm"
                value={values.likes}
                onChange={handleChange}
                name="likes"
              />
            </div>

            <div className="row px-2">
              <button
                className="btn btn-danger d-block my-1 mx-1 col-sm-3"
                onClick={() => setEditMode(false)} type="button"
              >
                Cancel
              </button>
              <button
                className="btn btn-warning d-block my-1 mx-1 col-sm-3"
                onClick={handleEdit} type="submit"
              >
                Edit
              </button>
            </div>
          </form>
        ) : (
          <div>
            <span className="d-block">Title: {blog.title}</span>
            <span className="d-block">Url: {blog.url}</span>
            <span className="d-block">
              Likes: {blog.likes}

              <button className="btn btn-dark" onClick={()=> Like(blog.id)}>+like</button>
            </span>

          </div>
        )}
      </div>
      {!editMode ? (
        <div>
          <button
            className="d-inline-block btn btn-warning mx-2"
            onClick={() => setEditMode(true)}
            id="EditModeBtn"
          >
            Edit
          </button>
          {loading ? (
            <button className="d-inline-block btn btn-danger disabled">
              Delete
            </button>
          ) : (
            <button
              className="d-inline-block btn btn-danger"
              onClick={(e) => Delete()}
              id="deleteBtn"
            >
              Delete
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}

