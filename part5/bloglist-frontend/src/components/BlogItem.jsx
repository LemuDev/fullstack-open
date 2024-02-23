import React, { useState } from "react";
import { deleteBlog, getAll } from '../services/blogs'

function BlogItem({ blog, setBlogs}) {
    const [loading, setLoading] = useState(false)
    const [deleting, setDeleting] = useState(false)
    
    const Delete = async ()=>{
        setLoading(true)
        setDeleting(true)
        await deleteBlog(blog.id)
        
        const data = await getAll().finally(()=>setLoading(false))
        setBlogs(data.data)
    }

    return (
        <div className="alert alert-secondary d-flex justify-content-between align-items-center"
            style={deleting?{transition:'400ms', transform:"translateX(900px)"}:null}
        >

            <div>
                <span className="d-block">{blog.title}</span> 
                <span className="d-block">{blog.author.name}</span>
            </div>
            <div>
                <button className="d-inline-block btn btn-warning mx-2">Edit</button>
                {
                    loading?
                        <button className="d-inline-block btn btn-danger disabled">Delete</button>
                    :
                        <button className="d-inline-block btn btn-danger" onClick={(e)=> Delete()}>Delete</button>
                }

            </div>
        </div>
    )
}

export default BlogItem;
