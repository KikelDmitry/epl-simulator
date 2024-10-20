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

  createAllMatches() {
    for (let i = 0; i < this.teams.length; i++) {
      for (let j = 0; j < this.teams.length; j++) {
        if (this.teams[i] === this.teams[j]) continue;
        this.matches.push([this.teams[i], this.teams[j]]);
      }
    }
  }

  createTour() {
    for (let i = 0; i < this.teamsList.length / 2; i++) {
      const randIndex = randNum(0, this.matches.length);
      const [team1, team2] = this.matches[randIndex];
      const containTeam = () => {
        const flat = this.tour.flat();
        console.log(flat);

        return flat.some(
          (team) => team.alias === team1.alias && team.alias === team2.alias
        );
      };
      // console.log(containTeam());

      if (!containTeam()) {
        this.tour.push(this.matches[randIndex]);
        this.matches.splice(randIndex, 1);
      } else {
        continue;
      }
    }
  }

  createRound() {}

  schedule() {
    this.createAllMatches();
    this.createTour();
    console.log(this.tour);
    // console.log(this.matches);
  }
}

// match data format
const match = {
  date: "19.08",
  teams: [],
};
