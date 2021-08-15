import React from "react";
import { Link } from "react-router-dom";

const postCwm = () => {
  return (
    <div className="post">
      <h1>Chai with Mocha: Unit Testing in Node.js</h1>
      <div className="post-cred">
        <p>
          <strong>- Anjali</strong>
        </p>
        <p>July 4, 2021 | 8m read</p>
      </div>
      <div className="post-content">
        <p>
          When we write tests for small individual components like a function or
          a file of the entire code base, that’s <strong>Unit Testing</strong>.
          For writing unit tests, we’ll pick up one functionality/logic and mock
          the bits on which that one functionality depends.
        </p>
        <br />
        <p>This might be sounding absurd.</p>
        <p>However, read along, this will make sense in just a minute.</p>
        <p>
          For understanding what I meant by mocking, we’ll have to first
          understand testing in general.
        </p>
        <br />
        <img
          src="https://miro.medium.com/max/1326/0*zjZpIWndvoRvw8v3.png"
          alt="testing pyramid"
        />
        <br />
        <p>
          This above picture is also known as what is called the testing
          pyramid. You can read about end to end tests and integration tests
          here and here. Since now we know about different types of tests, let’s
          come back to <strong>unit tests</strong> and <strong>mocking</strong>.
        </p>
        <p>
          As discussed above, unit tests are used to test the smallest functions
          or code snippets. Most of the time, the individual functions depend on
          other pieces of code.
        </p>
        <p>
          While writing unit tests, we want to focus on that one functionality
          to verify that it is working and not worry about its external
          dependencies. To do that, we use replacement code that simulate the
          working of those external dependencies. Unit tests are fast, requires
          no database and can be easily written with the help of{" "}
          <strong>mocking</strong>.
        </p>
        <br />
        <img
          src="https://miro.medium.com/max/576/0*O5IMw6rzJPi6uUid.png"
          alt="Mocking"
        />
        <br />
        <p>
          <strong>
            We saw what are unit tests? But why do we even need testing in the
            first place? Isn’t writing code just enough that we now need to test
            it?
          </strong>
          <br />
        </p>
        <li>
          Firstly, writing tests ensures that whatever code we write, it works
          and does not have any bugs.
        </li>
        <br />
        <li>
          If we go back to update our code, it makes it easy for us(or some
          other developer) to understand the logic and saves a lot of time.
        </li>
        <br />
        <li>
          For testing code we need to write code that can be tested. So, we
          might as well learn to write clean code in the process.
        </li>
        <br />
        <p>For anyone who is interested in a little back story.</p>
        <p>
          <i>Why did I decide to learn about testing?</i>
        </p>
        <p>
          <i>
            I am working on a project Deck. Me and my teammate had to demo it in
            a meeting. However, just an hour before the meeting, we encountered
            a bug, solving that led to another bug(:))and soon we realised that
            we have broken the thing beyond repair in a scope of an hour.
          </i>
        </p>
        <br />
        <img
          src="https://miro.medium.com/max/700/0*88Jp9P_6M7qNnCKs.jpeg"
          alt="Drake meme"
        />
        <br />
        <p>
          <i>
            Not to mention that we blew the meeting. :)) That’s when we decided
            upon two things:
          </i>
        </p>
        <li>
          <i>Stop debugging a few hours before important meetings :’D</i>
        </li>
        <li>
          <i>Learn about testing and write tests.</i>
        </li>
        <p>
          <i>
            So, here I am writing about writing tests for Node.js using Mocha.
          </i>
        </p>
        <h3>What is Mocha?</h3>
        <p>
          From{" "}
          <a href="https://mochajs.org/" className="link-word">
            Mocha
          </a>{" "}
          docs:
        </p>
        <blockquote cite="https://mochajs.org/">
          <p>
            Mocha is a feature-rich JavaScript test framework running on Node.js
            and in the browser, making asynchronous testing simple and fun.
            Mocha tests run serially, allowing for flexible and accurate
            reporting, while mapping uncaught exceptions to the correct test
            cases.
          </p>
        </blockquote>
        <p>
          Now, let’s have a look at the <strong>syntax</strong>
        </p>
        <p>
          <strong>describe():</strong> In Mocha, we have the global describe
          function, it takes in two parameters, a string and a callback
          function. The string is the description of the test. We group tests
          using describe. This function should tell what is it that you are
          testing. And as we can see in the code snippet below, we can further
          subdivide this by creating subgroups. So, for example, the outer
          describe is for one file then the inner describe will be for one
          function.
        </p>
        <p>
          <strong>it(): </strong>Similarly, we have the it function. It is used
          to write single tests. It takes two parameters, a string and a
          callback. The string is the description of the test and the callback
          has the actual code for the test.
        </p>
        <br />
        <img
          src="https://miro.medium.com/max/700/0*JNRvSmkWdzFsYGu3.png"
          alt="syntax of Mocha"
        />
        <br />
        <p>
          Let’s walk through the snippet above. Suppose we have a file which has
          functions to perform basic arithmetic operations.{" "}
          <strong>Level 0(outermost)</strong>describe function is for that. Then
          I have subdivided it into individual functions of add and subtract,
          level 1 describe functions. And finally, we have the it functions in
          which we test multiple cases of addition and subtraction.
        </p>
        <blockquote>
          <p>
            One thing to be noted here is that all the it statements in the
            above code begin with should.
          </p>
        </blockquote>
        <p>
          It’s not mandatory to write it like this but its a convention. So that
          when you read the entire thing together it resembles a readable
          sentence. If we take the first it() in the above example, this is how
          I would read it: “Arithmetic operations add should give sum of two
          numbers”
        </p>
        <br />
        <img
          src="https://miro.medium.com/max/700/1*pZ_oUxMmXinDtE4KOs4csA.png"
          alt="convention of Mocha Syntax"
        />
        <br />
        <p>Now, let’s see how to actually test code.</p>
        <br />
        <img
          src="https://miro.medium.com/max/700/1*UDPywYYC1XhTHzRe-ky25w.png"
          alt="actual tests"
        />
        <br />
        <p>Below is the result of above tests:</p>
        <br />
        <img
          src="https://miro.medium.com/max/700/1*Fv1GrVB7X43S5rJQ2UPzgg.png"
          alt="output of tests"
        />
        <br />
        <p>
          Quite evidently, the one with green tick is our passing test and one
          in red is the failing one.
        </p>
        <p>
          Now, the obvious question, <strong>where do we write tests</strong>?
          There are multiple conventions for the testing directory but till now
          whatever tests I wrote, they were in the same directory, alongside the
          file to be tested with the extension <strong>.spec.js</strong>. For
          example, if the file to be tested is named math.js then the test file
          is math.spec.js.
        </p>
        <p>
          So, if you are going for a similar convention to test the files when
          writing next to the actual unit, one needs to use a configuration. In
          the package.json you’d have to add something like this that works for
          your folder structure.
        </p>
        <pre>
          <code>"scripts":&#123;</code>
          <code className="tab">"test": "mocha './app/**/*.spec.js'"</code>
          <code>&#125;</code>
        </pre>
        <p>Here’s the one I created for this blog</p>
        <br />
        <img
          src="https://miro.medium.com/max/264/1*FF9e35fMQM0ds8IZzbDW-A.png"
          alt="folder structure"
        />
        <br />
        <p>Now just run the command:</p>
        <pre>
          <code>npm test</code>
        </pre>
        <p>And viola! You are all set.</p>
        <p>
          One more thing before having Chai. (Sorry, I could not stop myself
          from writing this. XD)
        </p>
        <p>
          <strong>Mocha Reporters</strong>
        </p>
        <p>
          There are many Mocha reporters for writing tests with efficiency.
          However the watch mode is what I have used till now. Running npm test
          every time to run unit tests can be tedious, a more effective way is
          using watch mode. We can put the the watch flag in package.json as
          given below.
        </p>
        <pre>
          <p className="comment-p">//we can use the watch flag<br/> like this</p>
          <code>"scripts": &#123;</code>
          <code>"test": "mocha --watch"</code>
          <code>&#125;</code>
          <p className="comment-p">//or like this</p>
          <code>"mocha":&#123; </code>
          <code>"watch":true</code>
          <code> &#125;</code>

          <p className="comment-p">
            //or we can make a separate file<br/> altogether <br />
            and write the configurations in that
          </p>
        </pre>
        <p>
          Now, let’s have{" "}
          <a href="https://www.chaijs.com/" className="link-word">
            Chai!
          </a>{" "}
          Not the beverage(though that would be good. Yes, I am lame), the
          assertion library.
        </p>
        <h3>What is Chai?</h3>
        <p>
          Mocha is a tool used for unit testing, another important thing
          required is an <strong>assertion library</strong>. In simple words, an
          assertion library lets you interrogate pieces of your code and tells
          you what and where the problem lies
          <i>(assuming there is a problem)</i>.
        </p>
        <blockquote>
          <p>
            Note: I recently came to know that there is an inbuilt assertion
            library as in Node.js as well called Assert.
          </p>
        </blockquote>
        <p>
          Install <strong>Chai</strong> with the command:
        </p>
        <pre>
          <code>npm i -D chai</code>
        </pre>
        <p>
          Let’s have a look at the <strong>syntax:</strong>
        </p>
        <p>
          There are multiple assertion styles like expect, should and assert in
          Chai and all of them have their uses. We’ll just have a look at expect
          for now. We can import <strong>expect</strong> in the file and use it
          as demonstrated below.
        </p>
        <br />
        <img
          src="https://miro.medium.com/max/700/1*hnAFP2sehtFDUCDFCKzGgQ.png"
          alt="Expect assersion in chai"
        />
        <br />
        <p>
          <strong>Now lets write some tests</strong>((and we’ll talk about a few
          bits of syntax while going through the tests):)
        </p>
        <p>Here is the file(testing.js) that we are going to test:</p>
        <br />
        <img
          src="https://miro.medium.com/max/700/1*0Ra0wVanRZYrYWD-HWRUnQ.png"
          alt="code for tests"
        />
        <br />
        <p>
          Let’s quickly walk through the code. But before that, lets keep in
          mind that we shouldn’t club pieces of code/functions that do not have
          any relation with each other whatsoever into a single file. This is
          just for demonstration purpose.
        </p>
        <p>
          Staring from the most basic function, getSum() that returns the sum of
          two numbers.
        </p>
        <p>
          isValidEmail(): uses a regex pattern to check if the email given to it
          has the correct format or not.
        </p>
        <p>
          getName(): Takes in the email id of a person and extracts the name of
          the company from it. For example: “john@mycompany.com” will return
          “mycompany”
        </p>
        <p>
          getFactorial(): I think the name is quite a good explanation that it
          returns the factorial of a given number.
        </p>
        <p>Here’s the test file(testing.spec.js)</p>
        <br />
        <img
          src="https://miro.medium.com/max/700/1*13uwzUq5pScZKAdQFaga3Q.png"
          alt="tests"
        />
        <br />
        <p>Let’s understand what is happening here</p>
        <p>
          The first describe function ‘testing’ (level 0) is representing the
          entire file testing.js. It has nested describe functions for
          individual functions of that file(level 1). And then comes the it
          functions that has the actual code testing the logic and functionality
          by creating some mock variables.
        </p>
        <p>
          Lets talk about a few of these in detail and the others will make
          sense on it’s own.
        </p>
        <p>
          ‘getSum’ describe function has two values n1 and n2 in the it
          function. We are importing the function getSum on the top of the file
          and passing values and checking if it is equal to the correct answer
          which is 11 in this case. We can even write multiple tests for this if
          we want.
        </p>
        <p>
          Similarly, we are importing the function isValidEmail on the top of
          the file, the ‘isValidEmail’ describe function is taking in a value
          which is an email id and passing it to the function. If the email is
          valid the function will be equal to true and in case it is not valid,
          it will be false and the test will fail.
        </p>
        <p>
          Here’s the picture of my terminal showing the result of these tests.
        </p>
        <br />
        <img
          src="https://miro.medium.com/max/700/1*mOPHLuNSHG_5T2wYdqj6KA.png"
          alt="terminal tests result"
        />
        <br />
        <p>
          You can see that the tests are passing. But don’t just take my word
          for it(or a picture of my terminal). Try it yourself and play around
          with the code to see if this actually works or not.
        </p>
        <p>
          <strong>
            You can view the code from this blog post in this{" "}
            <a className="link-word" href="https://gist.github.com/anjali-001/e0b01a98829fb322fd6479b1c0160c8d">
              GitHub Gist.
            </a>
          </strong>
        </p>
        <p>Here are a few resources that helped me:</p>
        <p>
          <a className="link-word" href="https://www.chaijs.com/">
            Chai
          </a>
          ,{" "}
          <a className="link-word" href="https://mochajs.org/">
            Mocha 
          </a>,
          <a
            className="link-word"
            href="https://www.telerik.com/products/mocking/unit-testing.aspx"
          >
            Unit Testing and Mocking
          </a>
          ,{" "}
          <a
            className="link-word"
            href="https://www.sitepoint.com/learn-regex/"
          >
            Regex Patterns
          </a>
          ,{" "}
          <a className="link-word" href="https://regex101.com/">
            Regex 101
          </a>
        </p>
        <p>
          I read from various resources and I have added a few above as it’s not
          possible to mention all the links. However, I will add all that I
          remember even in the future.
        </p>
        <p>
          All of the content above covers some basic elements of testing using
          Mocha and Chai. And this blog post has become quite long. There are
          other things like mocha hooks, testing async code and using mocha for
          testing REST API in Node.js and I’ll write about them in another blog
          and link it below.
        </p>
        <p>
          One can always learn more and these are my interpretations of these
          concepts. If you find that something was not explained in a correct
          way, do tell me, it will help me improve my understanding. I’ll take
          all constructive feedback(be it for the concepts or for the article)
          positively.
        </p>
        <p>
          And you can connect with me on any of the platforms mentioned(
          <i>I spend a lot of time on Twitter :')</i>)
        </p>
        <p>Thanks for reading!</p>
        {/*
      <br/> 
      <img src="" alt=""/>
      <br/> */}
      </div>
      <Link className="back" to="/blog">
      <p >cd ..</p>
      </Link>
    </div>
  );
};

export default postCwm;
