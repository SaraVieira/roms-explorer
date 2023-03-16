export const getOnlyNonRepeatedGames = (games: any) =>
  games.filter((v, i, a) => a.findIndex((v2) => v2.$.id === v.$.id) === i);

export const getNavItems = (games) =>
  games.map(({ data }) => ({
    console: data.provider.System,
  }));

export const getDate = (date) => {
  const { year, month, day } = date.match(
    /(?<year>\d{4})(?<month>\d{2})(?<day>\d{2})/,
    "ig"
  ).groups;
  return `${day}/${month}/${year}`;
};
