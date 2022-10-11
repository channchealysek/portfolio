import React from "react";
import coverImage from "../../assets/cover/CHANNCHEALY_SEK_Resume.png";
function Resume() {
  return (
    <div className="">
      <div className="pr-3 underline lg:text-4xl text-[1.46em]">Resume</div>
      <div className="grid justify-center items-center p-10">
        <div className="flex flex-row items-baseline">
          Download
          <span
            className=" m-5 p-2 text-xl sm:text-[1.03rem] shadow-sm hover:text-sm hover:text-slate-500 text-white bg-gray-400
        rounded"
          >
            <a
              href="https://drive.google.com/file/d/10UGhDDjlyOHZsocVcAR-48Qb2Tlh7sMp/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </span>
        </div>
        <div className="text-[0.9rem]">
          <p className="font-bold">Front-end Proficiencies</p>
          <ui>
            <li  className="pl-5">
              HTML
            </li>
            <li className="pl-5">
              CSS
            </li>
            <li className="pl-5">
              JavaScript
            </li>
            <li className="pl-5">
              JQuery
            </li>
            <li className="pl-5">
              Responsive design
            </li>
            <li className="pl-5">
              React
            </li>
            <li className="pl-5">
              Bootstrap
            </li>
            <li className="pl-5">
              Tailwind CSS
            </li>
          </ui>
        </div>
        <div className="text-[0.9rem]">
          <p className="pt-5 font-bold">Back-end Proficiencies</p>
          <ui>
            <li className="pl-5">
              APIs
            </li>
            <li className="pl-5">
              Nodejs
            </li>
            <li className="pl-5">
              Express
            </li>
            <li className="pl-5">
              MySQL, Sequelize
            </li>
            <li className="pl-5">
              MongoDB, Mongoose
            </li>
            <li className="pl-5">
              REST
            </li>
            <li className="pl-5">
              GraphQL
            </li>
          </ui>
        </div>
      </div>
    </div>
  );
}

export default Resume;
