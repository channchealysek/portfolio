import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Portfolio(props) {
  const { currentNavbar } = props;
  return (
    <div className="project-area" data-id="h1tag">
      <div className="single-project">
        <img src="1.png" alt=""></img>
        <div className="project-title">
          <h2>Project Title 1<span>GitHub</span></h2>
        </div>
      </div>
      <div className="single-project">
        <img src="1.png" alt=""></img>
        <div className="project-title">
          <h2>Project Title 1<span>GitHub</span></h2>
        </div>
      </div>
      <div className="single-project">
        <img src="1.png" alt=""></img>
        <div className="project-title">
          <h2>Project Title 1<span>GitHub</span></h2>
        </div>
      </div>
      <div className="single-project">
        <img src="1.png" alt=""></img>
        <div className="project-title">
          <h2>Project Title 1<span>GitHub</span></h2>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
