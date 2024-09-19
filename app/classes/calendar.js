import { randNum } from "../services/random-number.js";

export class Calendar {
  constructor(teams) {
    this.teams = teams;
    this.season = new Array(2); // 2 rounds
    this.round = new Array(this.teams.length - 1); // 19 tours
    this.tour = new Array(this.teams.length / 2); // 10 matches
    this.match = new Array(2); // 2 teams
    this.matchesAmount = 0;
  }
  createMatch() {
    for (let i = 0; i < teams.length; i++) {
      this.match.push();
    }
  }

  createTour() {}
  createRound() {}
  createSchedule() {}

  
  schedule() {
    this.season.push(this.round);
    console.log(this.season);
  }
  // schedule() {
  //   const teams = this.teams;
  //   const season = [];
  //   console.log(this.teams);
  //   // creating rounds (2)
  //   for (let r = 0; r < 2; r++) {
  //     const round = [];
  //     for (let t = 0; t < teams.length - 1; t++) {
  //       const tour = [];
  //       for (let i = 0; i < teams.length / 2; i++) {
  //         const match = [teams[i], teams[i + 1]];
  //         tour.push(match);
  //       }
  //       round.push(tour);
  //     }
  //     season.push(round);
  //   }
  //   console.log(season);
  //   console.log("matches: ", this.matchesAmount);
  // }
}
// for (let t1 = 0; t1 < teams.length; t1++) {
//   for (let t2 = 0; t2 < teams.length; t2++) {
//     if (t1 !== t2) {
//       this.matchesAmount++;
//       const match = [teams[t1], teams[t2]];
//       tour.push(match);
//     } else {
//       continue;
//     }
//   }
// }

// const teams = [
// 	{
// 		name: "Manchester",
// 		short: "MUN",
// 	}
// ]

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
