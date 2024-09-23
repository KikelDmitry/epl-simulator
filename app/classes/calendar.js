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

  createTour() {
    
  }

  schedule() {
    this.createAllMatches();
    this.createTour();
    console.log(this.matches);
  }
}

// match data format
const match = {
  date: "19.08",
  teams: [],
};
