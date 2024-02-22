import React, { useState } from "react";
import { deleteBlog } from '../services/blogs'

function BlogItem({ blog }) {
    const [loading, setLoading] = useState(false)

    const Delete = async ()=>{
        setLoading(true)
        await deleteBlog(blog.id).finally(()=>{
            setLoading(false)
        })
        
    }

    return (
        <div className="alert alert-secondary d-flex justify-content-between align-items-center">

            <div>
                <span className="d-block">{blog.title}</span> 
                <span className="d-block">{blog.author.name}</span>
            </div>
            <div>
                <button className="d-inline-block btn btn-warning mx-2">Edit</button>
                {
                    loading?
                        <button className="d-inline-block btn btn-danger btn-disabled">D----</button>
                    :
                        <button className="d-inline-block btn btn-danger" onClick={(e)=> Delete()}>Delete</button>
                }

            </div>
        </div>
    )
}

export default BlogItem;
