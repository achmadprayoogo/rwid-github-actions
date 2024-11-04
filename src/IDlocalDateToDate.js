function replaceIDLocalDateToDate(indonesianDate) {
  if (new Date(indonesianDate) != "Invalid Date") {
    return new Date(indonesianDate);
  } else {
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

    indonesianDate = indonesianDate.split(" ");
    const day = indonesianDate[0];
    const monthIndex = month.indexOf(indonesianDate[1].toLowerCase());
    const year = indonesianDate[2];

    return new Date(year, monthIndex, day);
  }
}

export default replaceIDLocalDateToDate;
