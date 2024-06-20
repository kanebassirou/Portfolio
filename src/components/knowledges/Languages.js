import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

export default class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "javascript", xp: 1.8 },
      { id: 2, value: "CSS", xp: 2 },
      { id: 3, value: "PHP", xp: 0.7 },
      { id: 4, value: "Python", xp: 0.4 }
    ],
    frameworks: [
      { id: 1, value: "React", xp: 1.8 },
      { id: 2, value: "Boostrap", xp: 2 },
      { id: 3, value: "Laravel 10", xp: 0.7 },
      { id: 4, value: "Flutter", xp: 0.4 }
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
