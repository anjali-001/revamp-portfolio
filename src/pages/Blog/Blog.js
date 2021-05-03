import React from 'react'
import './Blog.css'
import BlogPost from './BlogPost'

function Blog() {

    const blogs = {
        blog: [
            {
                title:"New Blog Post",
                id: 1,
                content: "blog content goes here",
                date: "January 2021"
            },
            {
                title:"Another JavaScript Post",
                id: 2,
                content: "blog content goes here",
                date: "March 2021"
            },
            {
                title:"New Blog Post",
                id: 3,
                content: "blog content goes here",
                date: "January 2021"
            },
            {
                title:"Another JavaScript Post",
                id: 4,
                content: "blog content goes here",
                date: "March 2021"
            },
            {
                title:"New Blog Post",
                id: 5,
                content: "blog content goes here",
                date: "January 2021"
            },
            {
                title:"Another JavaScript Post",
                id: 6,
                content: "blog content goes here",
                date: "March 2021"
            }
        ]
        
    }

    return (
        <div className="blog">
            <h1 className="blog-header">Blog</h1>
            <div className="blog-post">
                {
                    blogs.blog.map(item => {
                        return <BlogPost id={item.id} title={item.title} date={item.date}/>
                    })
                }
            </div>
        </div>
    )
}

export default Blog
