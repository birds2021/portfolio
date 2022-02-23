import React from "react";
import { Element } from "react-scroll";
import "./projectContainer.css";

const projectContainer = () => {
  return (
    <>
      <Element id="Projects" className="projectContainer">
        <div className="projectContainer_head">
          <h2>My Projects</h2>
          <p>
            some Projects in there see all projects and very easylu explain,,,
          </p>
        </div>
        <div className="projectContainer_body">
          <h3>google</h3>

          <a href="www.google.com">
            <img
              src="https://images.unsplash.com/photo-1595514811159-b876d3e52f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VhcmNoJTIwZW5naW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="image"
              className="projectContainer_image"
            />

            <p className="projectContainer_text">
              this is sample project so not use this project
              <br />
              so its not a project this is my 1st project
              <br />
              search engine is search componet engine
              <br />
            </p>
          </a>

          <h3>whatsapp</h3>

          <a href="www.google.com">
            <img
              src="https://images.unsplash.com/photo-1587573578181-f3342274f4c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2hhdHNhcHB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="image"
              className="projectContainer_image"
            />
            <p className="projectContainer_text">
              this is sample project so not use this project
              <br />
              so its not a project this is my 1st project
              <br />
              search engine is search componet engine
              <br />
            </p>
          </a>

          <h3>instagram</h3>

          <a href="www.google.com">
            <img
              src="https://images.unsplash.com/photo-1611162618758-2a29a995354b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwYXBwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="image"
              className="projectContainer_image"
            />

            <p className="projectContainer_text">
              this is sample project so not use this project
              <br />
              so its not a project this is my 1st project
              <br />
              search engine is search componet engine
              <br />
            </p>
          </a>

          <h3>facebook</h3>

          <a href="www.google.com">
            <img
              src="https://images.unsplash.com/photo-1601141586963-f213d2575b7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZWJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="images"
              className="projectContainer_image"
            />

            <p className="projectContainer_text">
              this is sample project so not use this project
              <br />
              so its not a project this is my 1st project
              <br />
              search engine is search componet engine
              <br />
            </p>
          </a>
        </div>
      </Element>
    </>
  );
};

export default projectContainer;
