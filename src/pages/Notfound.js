import React from "react";
import { NavLink } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="notfound">
      <div className="notfoundContent">
        <h3>Désole cette page n'existe pas</h3>
        <NavLink exact to="/">
          <i className="fas fa-home"></i>
          <span>Acceuil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Notfound;
