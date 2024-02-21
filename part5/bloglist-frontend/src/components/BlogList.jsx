import React, { useEffect, useState } from "react";
import { getAll } from "../services/blogs";

function BlogList({setLogin}) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAll()
      .then((blogs) => setBlogs(blogs))
      .catch((blogs) => setLogIn(blogs.response.status === 401));
  }, []);

  return (
    <div className="col-sm-7">
      <h2>blogs</h2>
      {blogs.map((blog) => (
        <Blogs key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default BlogList;
