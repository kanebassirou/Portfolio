import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Bassirou Kane</h1>
          <h2>Développeur Full Stack</h2>
          <h5>
            Bienvenue sur mon portfolio. Je suis Bassirou Kane, un développeur
            passionné avec une expertise en développement web et mobile.
            Découvrez mes compétences, mes expériences et mes projets.
          </h5>
          <div className="pdf">
            <a href="./media/cv.pdf" target="_blank" rel="noopener">
              Télécharger cv
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
