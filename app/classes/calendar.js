import { randNum } from "../services/random-number.js";

export class Calendar {
  constructor(teams) {
    this.teams = teams;
    this.matches = [];
  }
  createAllMatches() {
    for (let i = 0; i < this.teams.length; i++) {
      for (let j = 0; j < this.teams.length; j++) {
        if (this.teams[i] === this.teams[j]) continue;
        this.matches.push([this.teams[i], this.teams[j]]);
      }
    }
  }
  createTable() {
    for (let i = 0; i < this.teams.length - 1; i++) {
      for (let j = 0; j < this.season.length; j++) {
                
      }      
    }
  }

  schedule() {
    this.createAllMatches();
    console.log(this.matches);
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
