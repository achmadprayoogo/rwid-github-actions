/**
 * @param {string} date in indonesian format, example: 1 januari 2021
 */
export function replaceIDLocalDateToDate(date) {
  if (new Date(Date.UTC(date)) != "Invalid Date") {
    return new Date(Date.UTC(date));
  }

  const month = [
    "januari",
    "februari",
    "maret",
    "april",
    "mei",
    "juni",
    "juli",
    "agustus",
    "september",
    "oktober",
    "november",
    "desember",
  ];

  date = date.split(" ");
  const day = date[0];
  const monthIndex = month.indexOf(date[1].toLowerCase());
  const year = date[2];

  return new Date(Date.UTC(year, monthIndex, day));
}
