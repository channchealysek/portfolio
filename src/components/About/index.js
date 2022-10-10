import React from "react";
import coverImage from "../../assets/cover/aboutme.jpg";
function About() {
  return (
    <div className="">
          <div className="grid grid-cols-1 gap-3 ">
      <div className="text-4xl">
        <h1 id="about">About me</h1>
      </div>
      <div>
        <img
          src={coverImage}
          className=" p-1 w-[130px] h-[140px] rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          alt="cover"
        />
      </div>
      <div>
        <p>
          <span className=" text-lg text-orange-400">
            LET ME INTRODUCE MY SELF &nbsp;
          </span>
          I fell in love with programming and I have at least learnt something,
          I think… 🤷‍♂️ My field of Interest's are building new Web Technologies
          and Products A passionate Full Stack Software Developer 🚀 I have an
          experience of building Web and Mobile applications with JavaScript,
          Reactjs, Nodejs, React Native and some other cool libraries
        </p>
        <p>
          <br />I know about problems solving for domains and hosting, backup
          and management maintenances database on server side.
        </p>
      </div>
    </div>
    </div>
  );
}

export default About;
