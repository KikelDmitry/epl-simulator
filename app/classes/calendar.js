import { randNum } from "../services/random-number.js";
import { sortByField } from "../services/sorting.js";

export class Calendar {
  constructor(teams) {
    this.teams = teams;
    this.matches = [];
    this.tour = [];
  }
  get teamsList() {
    return this.teams.map((team) => team.alias);
  }
  // createAllMatches() {
  //   for (let i = 0; i < this.teams.length; i++) {
  //     for (let j = 0; j < this.teams.length; j++) {
  //       if (this.teams[i] === this.teams[j]) continue;
  //       this.matches.push([this.teams[i], this.teams[j]]);
  //     }
  //   }
  // }

  createTour() {
    for (let i = 0; i < this.teamsList.length / 2; i++) {
      
    }
  }

  schedule() {
    console.log(sortByField(this.teams, 'name'));
    console.log(this.tour);
  }
}

// match data format
const match = {
  date: "19.08",
  teams: [],
};
