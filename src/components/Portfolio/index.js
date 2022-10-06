import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Portfolio(props) {
  const { currentNavbar } = props;
  return (
    <section>
      <div class="flex space-x-6" data-id="h1tag">
        <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md lg:max-w-md shadow-purple-500/50">
          <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {capitalizeFirstLetter(currentNavbar.name)}
          </h2>
          <p class="mb-3 font-normal text-gray-700">
            {currentNavbar.description}
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:outline-none"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
