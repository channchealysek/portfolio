import React from "react";
import Card from "../Card";
import { capitalizeFirstLetter } from "../../utils/helpers";

import coverFam_Food_Finds from "../../assets/images/fam-food-finds.png";
import cs_movie_info_db_ from "../../assets/images/cs-movie-info-db_.png";
import cs_pizza_hunt_ from "../../assets/images/cs-pizza-hunt.herokuapp.com_.png";
import employee_manager530_ from "../../assets/images/employee-manager530-450.png";
import team_profile_generator_ from "../../assets/images/team_profile_generator_.png";
import note_taker from "../../assets/images/note-taker.png";
import deep_thoughts from "../../assets/images/deep_thoughts.png";

function Portfolio() {
  return (
    <div>
      <div className="pr-3 underline lg:text-4xl">Portfolio</div>
      <div className="project-area">
        <Card
          imageURL={coverFam_Food_Finds}
          title={capitalizeFirstLetter("Fam-Food-Finds")}
          description="Tired of sifting through thousands of reviews to find somewhere good to eat? Picked a restaurant based on reviews and been horribly disappointed? Enter My Food Finds, a small app for just family and friends to share restaurant recommendations from people you know to people you know."
          gitHubURL="https://github.com/DouglasRed/fam-food-finds"
          urlLive="https://fam-food-finds.herokuapp.com/"
        />
        <Card
          imageURL={employee_manager530_}
          title={capitalizeFirstLetter("Employee Manager")}
          description="Employee Manager is an application using command-line let user to manage a company's employee with full functionlities. This application using Node.js, Inquirer, console.table, Express, and MySQL2."
          gitHubURL="https://github.com/channchealysek/cs-employee-manager"
          urlLive="https://bit.ly/3Su6FSF"
        />
        <Card
          imageURL={note_taker}
          title={capitalizeFirstLetter("Note Taker")}
          description="Note taker is an application with technology using NodeJs, express and storage in JSON format. This application will help user to add and manage on dailys activies without missing, because when they are using the application the user can addnew, delete, and view information just only at on one screen."
          gitHubURL="https://github.com/channchealysek/cs-note-taker"
          urlLive="https://csnote-taker.herokuapp.com/"
        />
        <Card
          imageURL={team_profile_generator_}
          title={capitalizeFirstLetter("Team Profile Generator")}
          description="A command-line application let user to input requirement information related to employee information for position, office, Github, e-mail to generate profile as a team. This application using framework and technologies as Node.js, inquirer, and jest for user input and test function to verify these are working correctly. The informations from user inputs will generate and view to web browser and manage to group by positions."
          gitHubURL="https://github.com/channchealysek/cs-team-profile-generator"
          urlLive="https://bit.ly/3Kc4uPZ"
        />
        <Card
          imageURL={cs_movie_info_db_}
          title={capitalizeFirstLetter("Movie Info Database")}
          description="#fecth data using API Call User can search movie and get movie information by input title of movie in to Search Box Enter Movie Name and click on button get GET MOVIES, and it will gethering all information related to the movies also with image gif too."
          gitHubURL="https://github.com/channchealysek/cs-movie-info-db"
          urlLive="https://channchealysek.github.io/cs-movie-info-db/"
        />
        <Card
          imageURL={cs_pizza_hunt_}
          title={capitalizeFirstLetter("Pizza Hunt")}
          description="It is the small application web for user can make an order pizza and leave their comments and do replay for the pizza too.
          Build with: NodeJs, Javascript, MongoDB, HTML and CSS. "
          gitHubURL="https://github.com/channchealysek/pizza-hunt"
          urlLive="https://cs-pizza-hunt.herokuapp.com/"
        />
                <Card
          imageURL={deep_thoughts}
          title={capitalizeFirstLetter("Deep Thoughts")}
          description="The social media use to share an idea with people you known comments and react for post. It is build with server-side and client-side usnign Node.js Express MongoDB GraphQL, API for Back-end and React for Front-end."
          gitHubURL="https://github.com/channchealysek/deep-thoughts"
          urlLive="https://deepthougth123456.herokuapp.com/"
        />
      </div>
    </div>
  );
}
export default Portfolio;
