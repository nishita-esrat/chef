import React from "react";
import { useRef } from "react";
import generatePDF from "react-to-pdf";

const Blog = () => {
  const targetRef = useRef();

  return (
    <div className="container">
      <div className="mt-24 min-h-screen flex flex-col gap-8 md:gap-14 ">
        <div className="flex flex-col gap-5" ref={targetRef}>
          <h1 className="text-3xl font-semibold mb-10 text-yellow-700">Blog</h1>
          <div>
            <p>
              <span className="font-bold">question :</span>
              Tell us the differences between uncontrolled and controlled
              components.?
            </p>
            <p>
              <span className="font-bold">ans : </span>
              In React, Controlled components refer to the components where the
              state and behaviors are controlled by Parent components while
              Uncontrolled components are the ones having control of their own
              state and manage the behaviors on themselves
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold">question :</span>
              How to validate React props using PropTypes?
            </p>
            <p>
              <span className="font-bold">ans : </span>
              App. propTypes is used for props validation in react component.
              When some of the props are passed with an invalid type, you will
              get the warnings on JavaScript console. After specifying the
              validation patterns, you will set the App. defaultProps.
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold">question :</span>
              Tell us the difference between nodejs and express js.?
            </p>
            <p>
              <span className="font-bold">ans : </span>
              Node JS is a platform for building i/o applications that are
              server-side event-driven and made using JavaScript. Express JS is
              a framework based on Node JS which is used for building web
              applications using approaches and principles of Node JS
              event-driven architecture.
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold">question :</span>
              What is a custom hook, and why will you create a custom hook?
            </p>
            <p>
              <span className="font-bold">ans : </span>
              custom Hooks in React allows developers to encapsulate and reuse
              logic within functional components. It promotes code reusability,
              readability, and maintainability by abstracting away complex logic
              into reusable units
            </p>
          </div>
        </div>
        <button
          className="btn-common w-fit"
          onClick={() => generatePDF(targetRef, { filename: "blog.pdf" })}
        >
          download as PDF
        </button>
      </div>
    </div>
  );
};

export default Blog;
