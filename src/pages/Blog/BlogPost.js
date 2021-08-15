import React from "react";
import "./BlogPost.css";
import FeatherIcon from "feather-icons-react";

function BlogPost({ title, date, icon }) {
  return (
    <div className="blogpost">
      <FeatherIcon className="blog-icon" icon={icon} />
      <div>
        <p className="title-bp">{title}</p>
        <p className="date-bp">{date}</p>
      </div>
    </div>
  );
}

export default BlogPost;
