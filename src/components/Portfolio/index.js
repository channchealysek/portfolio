import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
  const { currentNavbar } = props;
  return (
    <section>
      <h1 data-id="h1tag">{capitalizeFirstLetter(currentNavbar.name)}</h1>
      <p>{currentNavbar.description}</p>
    </section>
  );
}
export default Portfolio;
