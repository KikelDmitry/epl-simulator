import { Club } from "./club.js";
import {sorting} from './services/sorting.js'

// todo. temp functions


const randNum = (max) => Math.floor(Math.random() * max);

const createTable = (teams) => {
  if (!Array.isArray(teams)) throw Error("not an array");

  const root = document.getElementById("app");
  const table = document.createElement("table");

  // create table header
  const fields = Object.keys(new Club());
  const headingRow = document.createElement("tr");

  for (let i = 0; i < fields.length; i++) {
    const headingCol = document.createElement("th");
    headingCol.innerHTML = fields[i];
    headingRow.append(headingCol);
  }

  table.append(headingRow);
  root.append(table);

  for (let i = 0; i < teams.length; i++) {
    const team = new Club(teams[i].name, teams[i].shortName, teams[i].points);
    const values = Object.values(team);
    const row = document.createElement("tr");
    table.append(row);

    for (let j = 0; j < values.length; j++) {
      const col = document.createElement("td");
      col.innerHTML = values[j];
      row.append(col);
    }
  }
};

fetch("/_data/clubs.json")
  .then((res) => res.json())
  .then((clubs) => sorting(clubs))
  .then((sorted) => createTable(sorted));
