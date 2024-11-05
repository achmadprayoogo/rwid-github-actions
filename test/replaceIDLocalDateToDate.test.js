import replaceIDLocalDateToDate from "../src/replaceIDLocalDateToDate.js";

describe("replaceIDLocalDateToDate", () => {
  it("return date 2021-1-1", () => {
    const indonesianDate = replaceIDLocalDateToDate("1 januari 2021");
    const date = new Date("2021-01-01");
    expect(indonesianDate).toStrictEqual(date);
  });
});
