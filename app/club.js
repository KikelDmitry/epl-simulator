export class Club {
	constructor(name, shortName, points) {
		this.name = name;
		this.shortName = shortName;
		this.position = null;
		this.played = 0;
		this.won = 0;
		this.drawn = 0;
		this.lost = 0;
		this.goalsFor = 0;
		this.goalsAgainst = 0;
		this.goalDiff = this.goalsFor - this.goalsAgainst;
		this.points = points || 0;
	}
}