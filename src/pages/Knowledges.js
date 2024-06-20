import React from "react";
import Navigation from "../components/Navigation";
import Languages from "../components/knowledges/Languages";
import Experience from "../components/knowledges/Experience";
import OthersSkill from "../components/knowledges/OthersSkill";
import Hobbies from "../components/knowledges/Hobbies";

const Knowledges = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <Experience />
        <OthersSkill />
        <Hobbies />
      </div>
    </div>
  );
};

export default Knowledges;
