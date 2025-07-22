/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++ (Execute File when changes occur)
 * BUNDLING
 * MINIFY
 * Cleaning our Code (Example - Remove Console.log)
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev [Example - npx parcel index.html --https]
 * Port Number [Example - If port number using in localhost then it will change in port number in another project running on localhost]
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */

// imported react and reactdom from nodemodule folder
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "title", key: "heading0" },
  "Hi, My Name is Abhishek Srivastava"
);
const headingOne = React.createElement(
  "h1",
  { id: "subTitle", key: "heading1" },
  "I am a Frontend Developer Using ReactJs"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, headingOne]
);
//React Functional Components
//component composition 
const HeadingComponent = () => {
    return <h1 className="subHeading">I am Learning React</h1>;
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(container);
//root.render(<HeadingComponent />);
