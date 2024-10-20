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

{
  const team1 = { alias: "CHE" };
  const team2 = { alias: "MUN" };
  const matches = [
    [
      {
        alias: "MUN",
      },
      {
        alias: "TOT",
      },
    ],
    [
      {
        alias: "CHE",
      },
      {
        alias: "WBA",
      },
    ],
    [
      {
        alias: "ARS",
      },
      {
        alias: "WHU",
      },
    ],
    [
      {
        alias: "LIV",
      },
      {
        alias: "MCI",
      },
    ],
  ];
  // const containTeam = () => {
  //   return matches.some((match) =>
  //     match.some((team) => {
  //       console.log(team.alias !== team1.alias || team.alias !== team2.alias);
  //       // team.alias !== team1.alias || team.alias !== team2.alias;
  //     })
  //   );
  // };
  // const flat = matches.flat();
  // console.log(flat, matches);
}
