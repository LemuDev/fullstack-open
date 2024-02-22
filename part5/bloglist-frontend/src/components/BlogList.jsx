import React, { useEffect, useState } from "react";
import { getAll } from "../services/blogs";
import BlogItem from "./BlogItem";


function BlogList({setLogIn}) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAll()
      .then((blogs) => setBlogs(blogs.data))
      .catch((blogs) =>  setLogIn(blogs.response.status !== 401))
    }, [])

  return (
    <div className="col-sm-6 col-md-7">
      <h2 className="display-4 text-center">Blogs</h2>
      {
          blogs.map((b) => (
            <BlogItem key={b.id} blog={b} />
          ))
      }
    </div>
  );
}

export default BlogList;
