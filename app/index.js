import { Club } from "./classes/club.js";
import { Calendar } from "./classes/calendar.js";
import { $CONFIG } from "./config.js";
// import { sorting } from "./services/sorting.js";

const startSeason = async () => {
  // get teams
  const teams = await fetch($CONFIG.teamsUrl).then((res) => res.json());

  // set schedule
  const schedule = new Calendar(teams).schedule();
  // play matches
  // show results
};

startSeason();
