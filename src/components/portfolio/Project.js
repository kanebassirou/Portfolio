import React, { Component, createRef } from "react";

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    };
    this.infoRef = createRef();
  }

  handleInfo = () => {
    this.setState(
      (prevState) => ({
        showInfo: !prevState.showInfo
      }),
      () => {
        if (this.state.showInfo) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    );
  };

  render() {
    let { name, languagesIcons, source, info, picture } = this.props.item;
    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}>
              {" "}
            </i>
          ))}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="" onClick={this.handleInfo} />
        <span className="infos" onClick={this.handleInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>
        {this.state.showInfo && (
          <div className="showInfos" ref={this.infoRef}>
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>
                <div className="sourceCode">
                  <a
                    href={source}
                    rel="noopener noreferrer"
                    className="button"
                    target="_blank"
                  >
                    Code source
                  </a>
                </div>
              </div>
              <p className="text">{info}</p>
              <div className="button return" onClick={this.handleInfo}>
                Retourner sur la page
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
