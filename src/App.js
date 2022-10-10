import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [navbars] = useState([
    {
      name: "portfolio",
    },
  ]);

  const [currentNavbar, setCurrentNavbar] = useState(navbars[0]);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);

  return (
    <div>
      <Header
        navbars={navbars}
        currentNavbar={currentNavbar}
        contactSelected={contactSelected}
        aboutSelected={aboutSelected}
        resumeSelected={resumeSelected}
        setAboutSelected={setAboutSelected}
        setContactSelected={setContactSelected}
        setCurrentNavbar={setCurrentNavbar}
        setResumeSelected={setResumeSelected}
      />
      <main>
        {contactSelected ? (
          <>
            <ContactForm />
            <Footer />
          </>
        ) : (
          <>
            {aboutSelected ? (
              <>
                <About />
                <Footer />
              </>
            ) : (
              <>
                {resumeSelected ? (
                  <Resume />
                ) : (
                  <Portfolio currentNavbar={currentNavbar}></Portfolio>
                )}
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
