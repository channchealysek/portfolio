import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
function SocialLink({ linkGitHub, linkLinkedin, linkTwitter }) {
  return (
    <div className="flex w-full justify-center align-middle pt-5">
      <div className="w-[230px] p-2 rounded-full grid grid-flow-col justify-center items-center gap-2 bg-slate-300">
        <div className="iconLink">
          <a href={linkGitHub} target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="iconLink">
          <a href={linkLinkedin} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="iconLink">
          <a href={linkTwitter} target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialLink;
