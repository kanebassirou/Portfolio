import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
      <main className="content">
          <h1>Bassirou Kane</h1>
          <h2>Développeur Full Stack</h2>
          <h5>
            Bienvenue sur mon portfolio. Je suis Bassirou Kane, un développeur
            passionné avec une expertise en développement web et mobile.
            Découvrez mes compétences, mes expériences et mes projets.
          </h5>
          <div className="pdf">
            <a
              href={`${process.env.PUBLIC_URL}/media/CV.pdf`}
              download="CV_Bassirou_Kane.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Télécharger cv
            </a>
          </div>
          </main> 
        </div>
     
      
    </div>
  );
};

export default Home;
