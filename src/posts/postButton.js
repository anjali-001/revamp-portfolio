import React from "react";
import { Link } from "react-router-dom";

const post = () => {
  return (
    <div className="post">
      <h1>Button with gradient border</h1>
      <div className="post-cred">
        <p><strong>- Anjali</strong></p>
        <p>June 2, 2020 | 2m read</p>
      </div>
      <div className="post-content">
        <p>
          <strong>Disclaimer</strong>: This is basically me just explaining myself how to make a
          CSS button with a gradient border(more details below). If you want to
          understand that(or maybe want the code for it) feel free to go
          further.
        </p>
        <p>
          Backstory(for anyone who is interested): I wanted to make a Button for
          a website with border-gradient and transparent background with curved
          border and I wasn’t able to find fuss-free code for it, so here’s me
          making one for myself. Once again this is as useless as it sounds, so
          don’t tell me I didn’t warn you.
        </p>
        <br />
        <img
          src="https://miro.medium.com/max/2000/1*Oq_ne-B1RWvfpHIiGniPpw.png"
          alt="code"
        />
        <br />
        <p>
          So basically the border is transparent as evident from the code.
          Instead there is a white background and kind of an outline of a colour
          gradient which is a part of the background itself which is overlaying
          the real transparent background and all this is being done with
          background-image. Then to make sure that the image that we have made
          for the background extends up to the content as well as the border we
          use:
        </p>
        <p>background-clip: content-box, border-box;</p>
        <p>
          And we are applying background origin so that the background image
          starts from the border. Rest of it is just some basic CSS.
        </p>
        <p>
          Also, for a similar gradient hover effect just change the colours from
          white to the gradient colours of the border.
        </p>
        <p>
          In case you are interested, read more about{" "}
          <a className="link-word" href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip">
            bacground clip
          </a>{" "}
          and{" "}
          <a className="link-word" href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin">
            background origin
          </a>
        </p>
        <p>Thnaks fro reading!</p>
      </div>
      <Link className="back" to="/blog">
      <p >cd ..</p>
      </Link>
    </div>
  );
};

export default post;
