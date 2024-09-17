export const sorting = (teams) => {
  return teams.sort((a, b) =>
    a.points > b.points ? 1 : b.points > a.points ? -1 : 0
  );
};
