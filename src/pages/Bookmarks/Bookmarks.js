import React from "react";
import "./Bookmarks.css";

function Bookmarks() {
  return (
    <div className="main-container">
      <h2>Bookmarks</h2>
      <p className="recommend">
        <i>
          Some stuff here are ones that I make use of during developement and
          some that I found on the internet which is just too good to not share.
        </i>
      </p>
      <div className="bookmark-content">
        {/* Font Bookmarks */}
        <h3>Fonts</h3>
        <blockquote>
          <p>
            <a href="https://play.typedetail.com/" className="link-word bm-a ">
              Font playground
            </a>
          </p>
          <p>
            <a href="https://www.typewolf.com/" className="link-word bm-a">
              Typewolf
            </a>
          </p>
        </blockquote>

        {/* Color Bookmarks */}
        <h3>Colors Palletes</h3>
        <p className="recommend">
          <i>
            The pain of finding a good color pallete for the next project is
            often reduced by these
          </i>
        </p>
        <blockquote>
          <p>
            <a href="https://www.culrs.com/" className="link-word bm-a">
              Culrs
            </a>
          </p>
          <p>
            <a href="https://www.happyhues.co/" className="link-word bm-a">
              Happy Hues
            </a>
          </p>
          <p>
            <a
              href="https://color.adobe.com/create/color-wheel"
              className="link-word bm-a"
            >
              Adobe Color Wheel
            </a>
          </p>
        </blockquote>

        {/* Misc */}
        <h3>Miscellaneous cool stuff</h3>
        <blockquote>
          <p>
            <a href="https://cmd.to/" className="link-word bm-a">
              Cmd.to: CLI OS
            </a>
          </p>
          <p>
            <a href="https://draw.io/" className="link-word bm-a">
              Draw.io
            </a>
          </p>
          <p>
            <a href="https://shields.io/" className="link-word bm-a">
              Badges
            </a>
          </p>
          <p>
            <a href="https://stackedit.io/" className="link-word bm-a">
              Stack Edit
            </a>
          </p>
        </blockquote>
      </div>
    </div>
  );
}

export default Bookmarks;
