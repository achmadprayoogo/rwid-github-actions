function replaceIDLocalDateToDate(indonesianDate) {
  if (new Date(Date.UTC(indonesianDate)) != "Invalid Date") {
    console.log(indonesianDate + " is valid date");
    return new Date(Date.UTC(indonesianDate));
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

    console.log(
      indonesianDate +
        " is invalid date, convert to " +
        day +
        " " +
        month[monthIndex] +
        " " +
        year
    );
    return new Date(Date.UTC(year, monthIndex, day));
  }
}

export default replaceIDLocalDateToDate;
