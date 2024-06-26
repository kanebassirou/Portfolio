import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Course à pied</span>
        </li>
        <li className="hobby">
          <i className="fas fa-chalkboard-teacher"></i>
          <span>Apprentissage</span>
        </li>
        <li className="hobby">
          <i className="fas fa-code"></i>
          <span>La programmation</span>
        </li>
        <li className="hobby">
          <i className="fab fa-bitcoin"></i>
          <span>Cryto-monnaies</span>
        </li>
        <li className="hobby">
          <i className="fas fa-search"></i>
          <span>Googler</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
