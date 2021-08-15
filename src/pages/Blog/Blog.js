import React from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from "feather-icons-react";
import './Blog.css'
import BlogPost from './BlogPost'

function Blog() {

    const blogs = {
        blog: [
            {
                title:"Playing with JavaScript: setTimeout()",
                id: 1,
                route:"/playing-with-javascript-settimeout",
                date: "January 21, 2021 | 5m read"
            },
            {
                title:"Chai with Mocha: Unit Testing in Node.js",
                id: 2,
                route: "/chai-with-mocha-unit-test",
                date: "July 4, 2021 | 8m read"
            },
            {
                title:"Button with gradient border",
                id: 3,
                route: "/button-gradient-border",
                date: "June 2, 2020 | 2m read"
            },
            {
                title:"Another JavaScript Post",
                id: 4,
                route: "blog route goes here",
                date: "March 2021"
            },
            {
                title:"New Blog Post",
                id: 5,
                route: "blog content goes here",
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
                        return <Link to={item.route}>
                        <div className="">
                        <FeatherIcon className="blog-icon" icon="pen-tool"/>
                        <BlogPost id={item.id} title={item.title} date={item.date}/>
                        </div>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default Blog
