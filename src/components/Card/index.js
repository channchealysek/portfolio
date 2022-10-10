import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Card({ title, imageURL, gitHubURL, urlLive, description }) {
  return (
    <div className="single-project">
    <div>
      <img src={imageURL} alt=""></img>
    </div>
    <div className="project-title">
      <div className="grid grid-flow-row justify-start w-full items-baseline mt-2">
        <div className="_title">{title}</div>
        <div className="h-[390px]">{description}</div>
        <div className="w-[160px] p-2 rounded-full grid grid-flow-col justify-end items-end gap-2 bg-slate-300">
          <div className="iconLink">
            <a href={gitHubURL} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="iconLink">
            <a href={urlLive} target="_blank">
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Card;
