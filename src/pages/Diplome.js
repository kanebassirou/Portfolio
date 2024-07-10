import React from "react";
import Navigation from "../components/Navigation";

const Diplome = () => {
  return (
    <div className="diplome">
      <Navigation />
      <div className="diplomeContent">
        <h2>
          <i className="fas fa-user-graduate "></i> DIPLOME
        </h2>
        <br />
        <div className="diplome-item ">
          <h3>BACCALAURÉAT</h3> <br />
          <p>
            <i className="fas fa-dot-circle"> Baccalauréat Scientifique</i>
          </p>
          <span>Lycee Cheikh Mouhamadou Moustapha Mbacke de Diourbel</span>{" "}
          <br />
          <span>2019 - 2020</span>
          <br />
          {/* </div>
        <div className="diplome-item"> */}
          <br />
          <h3>LICENCE INFORMATIQUE </h3>
          <br />
          <p>
            <i className="fas fa-dot-circle">
              {"    "}
              Licence informatique option génie Logiciel{"  "}
            </i>

            <span> de l'universite Iba Der Thiam de thiés</span>
          </p>
          <span>2022 - 2023</span>
        </div>
        <h2>
          <i className="fas fa-graduation-cap"></i> Mes Certifications
        </h2>
        <br />
        <div className="diplome-item">
          <p>
            {" "}
            <i className="fas fa-dot-circle">
              <a
                href="https://endpoint.educrak.com/certification/652a9ab6f0daa/generate-certificate"
                target="_blank"
                rel="noreferrer"
              >
                {"  "} Certification Laravel ( <span>educrak</span>)
              </a>
            </i>
          </p>
          <p>
            {" "}
            <i className="fas fa-dot-circle">
              {" "}
              <a
                href="https://formation.force-n.sn/mod/customcert/verify_certificate.php?contextid=139090&code=zZGp3Gtzst&qrcode=1"
                target="_blank"
                rel="noreferrer"
              >
                Certification en Informatique et Internet ( <span>FORCE N</span>
                )
              </a>
            </i>
          </p>
          <p>
            {" "}
            <i className="fas fa-dot-circle">
              {" "}
              <a
                href="https://endpoint.educrak.com/certification/652a96b6cdc92/generate-certificate"
                target="_blank"
                rel="noreferrer"
              >
                Certification Angular ( <span>educrak</span>)
              </a>
            </i>
          </p>
          <p>
            {" "}
            <i className="fas fa-dot-circle">
              {"   "}
              <a
                href="https://endpoint.educrak.com/certification/652a9ab6f0daa/generate-certificate"
                target="_blank"
                rel="noreferrer"
              >
                Certification React ( <span>educrak</span>)
              </a>{" "}
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Diplome;
