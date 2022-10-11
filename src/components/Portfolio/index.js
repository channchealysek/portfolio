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
      <div className="pr-3 underline text-4xl">Portfolio</div>
      <div className="project-area">
        <Card
          imageURL={coverFam_Food_Finds}
          title={capitalizeFirstLetter("Fam-Food-Finds")}
          description="MERN Stack"
          gitHubURL="https://github.com/DouglasRed/fam-food-finds"
          urlLive="https://fam-food-finds.herokuapp.com/"
        />
        <Card
          imageURL={employee_manager530_}
          title={capitalizeFirstLetter("Employee Manager")}
          description="MERN Stack"
          gitHubURL="https://github.com/channchealysek/cs-employee-manager"
          urlLive="https://bit.ly/3Su6FSF"
        />
        <Card
          imageURL={note_taker}
          title={capitalizeFirstLetter("Note Taker")}
          description="MERN Stack"
          gitHubURL="https://github.com/channchealysek/cs-note-taker"
          urlLive="https://csnote-taker.herokuapp.com/"
        />
        <Card
          imageURL={team_profile_generator_}
          title={capitalizeFirstLetter("Team Profile Generator")}
          description="MERN Stack"
          gitHubURL="https://github.com/channchealysek/cs-team-profile-generator"
          urlLive="https://bit.ly/3Kc4uPZ"
        />
        <Card
          imageURL={cs_movie_info_db_}
          title={capitalizeFirstLetter("Movie Info Database")}
          description="MERN Stack"
          gitHubURL="https://github.com/channchealysek/cs-movie-info-db"
          urlLive="https://channchealysek.github.io/cs-movie-info-db/"
        />
        <Card
          imageURL={cs_pizza_hunt_}
          title={capitalizeFirstLetter("Pizza Hunt")}
          description="MERN Stack"
          gitHubURL="https://github.com/channchealysek/pizza-hunt"
          urlLive="https://cs-pizza-hunt.herokuapp.com/"
        />
                <Card
          imageURL={deep_thoughts}
          title={capitalizeFirstLetter("Deep Thoughts")}
          description="MERN Stack"
          gitHubURL="https://github.com/channchealysek/deep-thoughts"
          urlLive="https://deepthougth123456.herokuapp.com/"
        />
      </div>
    </div>
  );
}
export default Portfolio;
