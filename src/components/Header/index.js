import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Header(navs) {
  const {
    navbars = [],
    setCurrentNavbar,
    currentNavbar,
    contactSelected,
    setContactSelected,
    aboutSelected,
    setAboutSelected,
    resumeSelected,
    setResumeSelected,
  } = navs;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentNavbar.name);
  }, [currentNavbar]);

  return (
    <nav className="navContainer">
      <input type="checkbox" id="check" hidden />
      <label
        for="check"
        className="float-right text-white text-3xl leading-[80px] mr-10 mt-5 lg:hidden"
      >
        <svg viewBox="0 0 18 15" width="40px">
          <path
            fill="#424242"
            d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z"
          />
          <path
            fill="#424242"
            d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"
          />
          <path
            fill="#424242"
            d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"
          />
        </svg>
      </label>
      <label
        className="text-white leading-[80px] lg:leading-[80px] pl-12 lg:text-4xl
         font-bol drop-shadow-lg shadow-orange-200 bg-orange-400 m-10 p-3 pr-5 rounded-tl-full
         rounded-br-full shadow-md  backdrop-blur-sm"
      >
        <a data-id="link" href="">
          SEK, Channchealy
        </a>
      </label>
      <ul
        className="float-right mr-10 pt-10 lg:pt-0 lg:flex lg:leading-[80px] 
        space-x-4 text-black rounded fixed lg:relative h-[100vh] 
        lg:h-0 w-[100%] lg:w-fit top-20 lg:top-0 left-[-100%] lg:left-0 
        transition-all duration-300 lg:transition-none 
        text-center bg-slate-700 shadow-teal-900 z-10"
      >
        <li className={`${aboutSelected && "navActive"}`}>
          <label for="check">
            <a
              data-id="about"
              onClick={() => {
                setAboutSelected(true);
                setContactSelected(false);
                setResumeSelected(false);
              }}
            >
              About me
            </a>
          </label>
        </li>
        {navbars.map((navbar) => (
          <label for="check">
            <li
              className={`${
                currentNavbar.name === navbar.name &&
                !contactSelected &&
                !aboutSelected &&
                !resumeSelected &&
                "navActive"
              }`}
              key={navbar.name}
            >
              <a>
                <span
                  onClick={() => {
                    setCurrentNavbar(navbar);
                    setContactSelected(false);
                    setAboutSelected(false);
                    setResumeSelected(false);
                  }}
                >
                  {capitalizeFirstLetter(navbar.name)}
                </span>
              </a>
            </li>
          </label>
        ))}
        <label for="check">
          <li className={`${resumeSelected && "navActive"}`}>
            <a>
              <span
                onClick={() => {
                  setResumeSelected(true);
                  setContactSelected(false);
                  setAboutSelected(false);
                }}
              >
                Resume
              </span>
            </a>
          </li>
        </label>
        <label for="check" className="p-0">
          <li className={`${contactSelected && "navActive"}`}>
            <a>
              <span
                onClick={() => {
                  setContactSelected(true);
                  setAboutSelected(false);
                  setResumeSelected(false);
                }}
              >
                Contact
              </span>
            </a>
          </li>
        </label>
      </ul>
    </nav>
  );
}

export default Header;
