import { randNum } from "../services/random-number.js";

export class Calendar {
  constructor(teams) {
    this.teams = teams;
    this.season = new Array(2); // 2 rounds
    this.round = new Array(this.teams.length - 1); // 19 tours
    this.tour = []; // 10 matches
    this.match = []; // 2 teams
  }
  createMatch() {
    const pair = [];

    for (let i = 0; i < 2; i++) {
      const randomTeam = randNum(0, this.teams.length - 1);
      pair.push(this.teams[randomTeam]);
      this.teams.splice(randomTeam, 1);
    }

    this.match = pair;
  }

  createTour() {
    for (let i = 0; i < 10; i++) {
      this.createMatch();
      this.tour.push(this.match);
    }
  }
  createRound() {}
  createSchedule() {}

  comparePair(pair) {
    if (!Array.isArray(pair)) throw new Error("pair should be an Array");
    pair[0].shortName === pair[1].shortName ? true : false;
  }
  schedule() {
    this.createTour();
    console.log(this.tour);
  }
}

// const schedule = [
//   // first round
//   [
//     //first tour
//     [
//       [team1, team2],
//       [team3, team4],
//     ],
//     //second tour
//     [
//       [team1, team2],
//       [team3, team4],
//     ],
//   ],
//   // second round
//   [
//     [team3, team1],
//     [team4, team7],
//   ],
// ];
