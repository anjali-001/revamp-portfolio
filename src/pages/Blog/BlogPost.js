import React from 'react'
import './BlogPost.css'

function BlogPost({title,date}) {
    return (
        <div className="blogpost">
           <h3 className="title-bp">{title}</h3>
           <p className="date-bp">{date}</p>
        </div>
    )
}

export default BlogPost
