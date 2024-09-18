import { randNum } from "../services/random-number.js";

export class Calendar {
  constructor(teams) {
    this.teams = teams;
	this.matchesAmount = 0;
  }
  schedule() {
    const teams = this.teams;
    const schedule = [];
    console.log(this.teams);
    // creating rounds (2)
    for (let r = 0; r < 2; r++) {
      const round = [];
      for (let i1 = 0; i1 < teams.length; i1++) {
        for (let i2 = 0; i2 < teams.length; i2++) {
          if (i1 !== i2) {
			this.matchesAmount++;
            const match = [teams[i1], teams[i2]];
            round.push(match);
          } else {
            continue;
          }
        }
      }
      schedule.push(round);
    }
    console.log(this.matchesAmount);
  }
}

// const teams = [
// 	{
// 		name: "Manchester",
// 		short: "MUN",
// 	}
// ]

// const schedule = [
//   // first round
//   [
//     [team1, team2],
//     [team2, team3],
//   ],
//   // second round
//   [
//     [team3, team1],
//     [team4, team7],
//   ],
// ];
