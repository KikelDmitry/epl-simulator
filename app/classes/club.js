export class Club {
	constructor(name, alias, strength) {
		this.name = name;
		this.alias = alias;
		this.strength = strength;
		this.position = null;
		this.played = 0;
		this.won = 0;
		this.drawn = 0;
		this.lost = 0;
		this.goalsFor = 0;
		this.goalsAgainst = 0;
		this.goalDiff = this.goalsFor - this.goalsAgainst;
		this.points = 0;
	}
}