export const sorting = (teams) => {
  // sort by:
  // 1. points
  // 2. goalDiff
  return teams.sort((a, b) =>
    a.points > b.points ? 1 : b.points > a.points ? -1 : 0
  );
};

export const sortByField = (arr, field) => {
  return arr.sort((a, b) => (a[field] > b[field] ? 1 : -1));
};
