import React from "react";
import { Element } from "react-scroll";
import Develop from "../asset/developer.jfif";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./skillContainer.css";

const skilContainer = () => {
  return (
    <>
      <div>
        <Element id="Skill" className="skillContainer">
          <div className="skillContainer_image">
            <img src={Develop} alt="images"></img>
          </div>

          <div className="skillContainer_skillset">
            <h3>Skill Set</h3>

            <div className="skillContainer_slider skillContainer_slider1">
              <h5>html</h5>
              <LinearProgress variant="determinate" value={80} />
            </div>

            <div className="skillContainer_slider skillContainer_slider2">
              <h5>css</h5>
              <LinearProgress variant="determinate" value={75} />
            </div>

            <div className="skillContainer_slider skillContainer_slider3">
              <h5>java script</h5>
              <LinearProgress variant="determinate" value={60} />
            </div>

            <div className="skillContainer_slider skillContainer_slider4">
              <h5>react</h5>
              <LinearProgress variant="determinate" value={50} />
            </div>
          </div>
        </Element>
      </div>
    </>
  );
};

export default skilContainer;
