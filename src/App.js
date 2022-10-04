import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  const [navbars] = useState([
    {
      name: 'portfolio',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'resume', description: 'Portraits of people in my life' },
  ]);

  const [currentNavbar, setCurrentNavbar] = useState(navbars[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
          navbars={navbars}
          setCurrentNavbar={setCurrentNavbar}
          currentNavbar={currentNavbar}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}>
      </Nav>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio currentNavbar={currentNavbar}></Portfolio>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
