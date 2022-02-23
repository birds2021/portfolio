import React from "react";
import { Element } from "react-scroll";
import "./topContent.css";

function topContent() {
  return (
    <>
      <Element name="About" className="topContent">
        <h2 className="topContent_name">MR Vignesh B</h2>
        <p className="topContent_about">I am a developer for begining,,,</p>

        <div>
          <button className="topContent_buttonA">
            <a href="www.google.com" className="topContent_button">
              Download CV
            </a>
          </button>
        </div>
      </Element>
    </>
  );
}

export default topContent;
