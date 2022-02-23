import React from "react";
import Header from "./Components/Header/header.js";
import "./App.css";

import TopContainer from "./Components/topContainer/topContainer";

import SkillContainer from "./Components/skillContainer/skilContainer";

import ProjectContainer from "./Components/projectContainer/projectContainer";

import ContactContainer from "./Components/contactcontainer/contactContainer.js";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <TopContainer />
        <SkillContainer />
        <ProjectContainer />
        <ContactContainer />
      </div>
    </>
  );
};

export default App;
