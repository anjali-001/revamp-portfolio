import React from "react";
import { Link } from "react-router-dom";

const post = () => {
  return (
    <div className="post">
      <h1>Playing with JavaScript: setTimeout()</h1>
      <div className="post-cred">
        <p>- Anjali</p>
        <p>January 21, 2021 | 5m read</p>
      </div>
      <div className="post-content">
        <p>
          <strong>setTimeout()</strong> method as the name suggests calls a
          function after the specified time.
        </p>
        <p>Or does it?</p>
        <p>
          But before anything else, syntax. Below is the syntax of setTimeout()
          which is evaluating the function and logs out ‘Hello!’ after 3
          seconds(3000 milliseconds).
        </p>
        <br />
        <img
          src="https://miro.medium.com/max/700/1*_T4bW5C10RaBNOUnKVr24g.png"
          alt="syntax of setTimeout()"
        />
        <p>
          Now, let’s run a simple code and see how <strong>should</strong>{" "}
          setTimeout() work
        </p>
        <p>
          <strong>Input:</strong>
        </p>
        <br />
        <img
          src="https://miro.medium.com/max/700/1*SABEtitJgMpwB8l1v6RmnQ.png"
          alt="input"
        />
        <p>
          <strong>Output: </strong> As evident the above code logs out ‘Hey!’
          then comes ‘Adios’ and once 3 seconds have passed it logs out ‘Let’s
          play with JavaScript’
        </p>
       <br/>
        <img
          src="https://miro.medium.com/max/700/1*-shKo_5x7CRqwJmNCPNDQw.png"
          alt="output"
        /><br/>
        <p>Easy, right? Right. Now let’s take another example.</p>
        <p>
          <strong>Input:</strong> This time instead of 3 seconds, we’ll set it
          to a delay of 0 seconds.
        </p>
       <br/>
        <img
          src="https://miro.medium.com/max/700/1*hReJIl2Q8xsu939eyy_QDA.png"
          alt="code"
        /><br/>
        <p>
          <strong>Output: </strong>Technically, it should print things in the
          order, ‘Hey!’, ‘Let’s play with JavaScript’ and lastly ‘Adios’. But
          that’s not the case. Instead it logs these out in this order as given
          below
        </p>
       <br/>
        <img
          src="https://miro.medium.com/max/700/1*WzCRPdr3puMicb9Nqntueg.png"
          alt="output"
        /><br/>
        <p>
          This is because setTimeout() is <strong>non-blocking.</strong>
        </p>
        <p>
          Before explaining what that is, let’s look at another example. In the
          example below, I have used a while loop to delay ‘Adios’ from being
          logged by 5 seconds. Whereas setTimeout() has a timer for 3 seconds.
        </p>
        <p>
          <i>
            So should the browser log out ‘Lets play with JavaScript.’ before
            ‘Adios’?
          </i>
        </p>
        <p>
          <i>Let’s find out.</i>
        </p>
        <p>
          <strong>Input: </strong>
        </p>
       <br/>
        <img
          src="https://miro.medium.com/max/700/1*XWfttGbsrCSOv_RDaHlhzw.png"
          alt="input"
        /><br/>
        <p>
          The answer to the above question: In a parallel ideal universe may be
          it should log out ‘Adios’ before ‘Lets play with JavaScript’ but here
          that does not happen. Instead this does
        </p>
        <strong>Output: </strong>
       <br/>
        <img
          src="https://miro.medium.com/max/700/1*S9Yj7IdxfMY0bufLhFE-ug.png"
          alt="output"
        /><br/>
        <p>
          <i>
            So, what happened? Why did it log out ‘Adios’ playing with
            JavaScript? Why wouldn’t setTimeout() play a fair game?
          </i>
        </p>
        <p>
          <strong>Coming back to setTimeout(). </strong> Weird, isn’t it? But
          only till we don’t know what goes into the backend of all this.
        </p>
        <p>So, how the browser works?</p>
        <p>What’s the concurrency model?</p>
        <p>Why does setTimeout() behave like a brat?</p>
        <p>
          Why do I always go off track and all that jazz?
          <i>(Maybe not this one)</i>
        </p>
        <p>
          As mentioned before once, setTimeout() is{" "}
          <strong>non-blocking.</strong> It will execute only after all the
          statements outside it it have been executed as opposed to{" "}
          <strong>blocking code</strong> that blocks the further execution until
          that operation is finished.
        </p>
        <p>Read along, this will all make sense in a minute.</p>
        <p>
          <strong>Concurrency Model: </strong>We have heard one time or other
          that JavaScript is a single-threaded language. It means that it has
          one call stack and it will execute only one thing at a time till its
          completion.
        </p>
        <p>
          So, JavaScript has a concurrency model based on an event loop which
          waits synchronously for a message if there is not one already present
          or waiting to be executed.
        </p>
        <p>
          <strong>Call Stack: </strong>A call stack handles the execution
          context. As the name implies, it works on the LIFO(last in first out)
          principle. Any statement(blocking and non-blocking) or a function that
          is to be executed is pushed on top of the call stack and once it
          completes, it gets popped off from it.
        </p>
        <p>
          <strong>Callback Queue: </strong>I’ll explain callback queue via what
          might be the assumption.
        </p>
        <p>
          <i>Assumption(that one might have): </i>setTimeout() waits for the
          specified time and then calls the function for execution.
        </p>
        <p>
          <i>Reality: </i>setTimeout() registers the callback function and waits
          for the specified time(3000 milliseconds in this case). Then it is
          moved to the callback queue and waits for the call stack to be empty.
          The moment it gets empty and there is no other function waiting, the
          callback function moves from the callback queue to the call stack and
          it gets executed.
        </p>
        <p>Here’s a pictorial representation of the above explanation</p>
       <br/>
        <img
          src="https://miro.medium.com/max/700/1*3_4EyRYiPkJfxB1mX_hDPA.png"
          alt="explanation"
        /><br/>
        <p>
          Now, let’s analyze the third example once again with the help of this
          diagram
        </p>
       <br/>
        <img
          src="https://miro.medium.com/max/700/1*Oisd7snxvMXJJZo6AZ9pvw.png"
          alt="step2"
        /><br/>
        <p>
          Once the statement is executed, it gets removed from the call stack.
        </p>
       <br/>
        <img
          src="https://miro.medium.com/max/700/1*cWxBZnkH74EtENfcDJzRGg.png"
          alt="step2"
        /><br/>
       <br/>
        <img
          src="https://miro.medium.com/max/700/1*ofmb4IgtdaF1OJyTWGVOyA.png"
          alt="step2"
        /><br/>
        <p>
          And that’s how despite having setTimeout() being specified to execute
          after <strong>0 milliseconds</strong>, the function gets executed only
          after all the blocking statements have already been executed.
        </p>
        <p>
          Say there are million lines of code after a setTimeout()(Look at this
          example again where I have used a while loop to delay the process by 5
          seconds on purpose).
        </p>
       <br/>
        <img
          src="https://miro.medium.com/max/700/1*XWfttGbsrCSOv_RDaHlhzw.png"
          alt="input"
        /><br/>
        <p>
          The setTimeout() function sure has 3000 milliseconds specified in the
          argument but now we know that it will not get executed after 3
          seconds. First all the blocking statements will get completed and then
          it will get executed a little later after 5000 milliseconds. That’s
          why ‘Lets play with JavaScript.’ gets logged out after ‘Adios’.
        </p>
        <p>
          In other words, the time specified in the setTimeout() argument is not
          the time for the function execution but actually the time after which
          it moves to the callback queue.
        </p>
        <p>
          See, told you it will all make sense in a minute{" "}
          <i>(Okay, may be more than a minute)</i>. I hope this helped you
          understanding this concept a bit better.
        </p>
        <p>
          One can always learn more and these are my interpretations of these
          concepts. If you find that something was not explained in a correct
          way, do tell me, it will help me improve my understanding. I’ll take
          all constructive feedback(be it for the concepts or for the article)
          positively.
        </p>
        <p>
          If you want to delve further into these, do try it yourself and read
          more about it. Here are the links of a few resources that helped me:
        </p>
        <p>
          <a className="link-word" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop">MDN Web Docs</a>, <a className="link-word" href="https://levelup.gitconnected.com/understanding-settimeout-15c7de9e5fd6">Understanding setTimeout()</a>,{" "}
          <a className="link-word" href="https://www.w3schools.com/jsref/met_win_settimeout.asp">W3Schools</a>, <a className="link-word" href="https://youtu.be/8zKuNo4ay8E">Akshay Saini</a>
        </p>
        <p>
          I read from various resources and I have added a few above as it’s not
          possible to mention all the links. However, I will add all that I
          remember even in the future.
        </p>
        <p>If you liked this, do share it.</p>
        <p>
          And you can connect with me on any of the platforms mentioned(
          <i>I spend a lot of time on Twitter :')</i>)
        </p>
        <p>Thanks for reading!</p>
      </div>
      <Link className="back" to="/blog">
      <p >cd ..</p>
      </Link>
    </div>
  );
};

export default post;
