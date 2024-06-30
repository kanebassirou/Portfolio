import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

export default class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "C,javascript ,HTML, CSS ,PHP", xp: 2 },
      { id: 2, value: "JAVA , PYTHON", xp: 1.8 },
      { id: 3, value: "Sql, Nosql", xp: 1.9 },
      { id: 4, value: "Ocaml", xp: 0.7 }
    ],
    frameworks: [
      { id: 1, value: "Laravel , Boostrap ", xp: 2 },
      { id: 2, value: "Tailwind CSS ,React ,Node js", xp: 1 },
      { id: 3, value: "Angular , Flutter", xp: 0.9 },
      { id: 4, value: "Sprint Boot", xp: 0.5 }
    ]
  };
  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          title="frameworks & bibliothèques "
          className="frameworksDisplay"
        />
      </div>
    );
  }
}
