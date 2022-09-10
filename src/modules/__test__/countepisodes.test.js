/**
 * @jest-environment jsdom
 */
import episodecounts from "../episodecountbyelement.js";
import { getepisodeData, getComment } from "./mocks/api.js";

describe("get the episodes i season 1", () => {
  test("Must return  1 like", () => {
    document.body.innerHTML = '<div id="movie">' + "</div>";
    const result = episodecounts(
      document.getElementById("movie"),
      getepisodeData()
    );
    expect(result).toBe(1);
  });
});

describe("Get episode comment", () => {
  test("return 1 comment", () => {
    document.body.innerHTML = '<div id="comment">' + "</div>";
    const result = episodecounts(
      document.getElementById("comment"),
      getComment()
    );
    expect(result).toBe(1);
  });
});
