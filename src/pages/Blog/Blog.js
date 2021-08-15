import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import BlogPost from "./BlogPost";

function Blog() {
  const blogs = {
    blog: [
      {
        title: "Playing with JavaScript: setTimeout()",
        id: 1,
        route: "/playing-with-javascript-settimeout",
        icon: "code",
        date: "January 21, 2021 | 5m read",
      },
      {
        title: "Chai with Mocha: Unit Testing in Node.js",
        id: 2,
        route: "/chai-with-mocha-unit-test",
        icon: "terminal",
        date: "July 4, 2021 | 8m read",
      },
      {
        title: "Button with gradient border",
        id: 3,
        route: "/button-gradient-border",
        icon: "target",
        date: "June 2, 2020 | 2m read",
      },
    //   {
    //     title: "Another JavaScript Post",
    //     id: 4,
    //     route: "blog route goes here",
    //     icon: "code",
    //     date: "March 2021",
    //   },
    //   {
    //     title: "New Blog Post",
    //     id: 5,
    //     route: "blog content goes here",
    //     icon: "code",
    //     date: "January 2021",
    //   },
    //   {
    //     title: "Another JavaScript Post",
    //     id: 6,
    //     route: "blog content goes here",
    //     icon: "code",
    //     date: "March 2021",
    //   },
    ],
  };

  return (
    <div className="blog">
      <h1 className="blog-header">Blog</h1>
      <div className="blog-post">
        {blogs.blog.map((item) => {
          return (
            <Link to={item.route}>
                <BlogPost id={item.id} title={item.title} date={item.date} icon={item.icon}/>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
