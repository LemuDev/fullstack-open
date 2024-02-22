import React from "react";

function BlogItem({ blog }) {
  console.log(blog);
  return (
    <div className="alert alert-secondary d-flex justify-content-between align-items-center">

        <div>
            <span className="d-block">{blog.title}</span> 
            <span className="d-block">{blog.author.name}</span>
        </div>
        <div>
            <button className="d-inline-block btn btn-warning mx-2">Edit</button>
            <button className="d-inline-block btn btn-danger">Delete</button>
        </div>
    </div>
  )
}

export default BlogItem;
