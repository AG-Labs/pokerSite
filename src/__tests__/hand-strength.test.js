import {
  handler,
  generateCombinations,
  rankPokerHand,
  calculateBest,
  duplicates,
} from "../../netlify-lambda/hand-strength";

const duplicateCardsFiltered = [
  { suit: "club", face: "six" },
  { suit: "diamond", face: "ten" },
  { suit: "spade", face: "jack" },
  { suit: "club", face: "six" },
  { suit: "diamond", face: "jack" },
];
const flopCardsFiltered = [
  { suit: "club", face: "six" },
  { suit: "diamond", face: "ten" },
  { suit: "spade", face: "jack" },
  { suit: "club", face: "seven" },
  { suit: "diamond", face: "jack" },
];

const turnCardsFiltered = [
  { suit: "club", face: "six" },
  { suit: "diamond", face: "ten" },
  { suit: "spade", face: "jack" },
  { suit: "club", face: "seven" },
  { suit: "diamond", face: "jack" },
  { suit: "diamond", face: "five" },
];

describe("Duplication of cards", () => {
  test("Non duplicate cards", () => {
    let isDuplicated = duplicates(flopCardsFiltered);
    expect(isDuplicated).toBe(false);
  });

  test("Duplicate cards", () => {
    let isDuplicated = duplicates(duplicateCardsFiltered);
    expect(isDuplicated).toBe(true);
  });

  test("No cards", () => {
    let isDuplicated = duplicates([]);
    expect(isDuplicated).toBe(false);
  });
});

describe("Generate Combination of hands", () => {
  test("Generate combo from 5", () => {
    let combo5 = generateCombinations(flopCardsFiltered, 5);
    expect(combo5.length).toBe(1);
  });

  test("Generate combo from 6", () => {
    let combo6 = generateCombinations(turnCardsFiltered, 5);
    expect(combo6.length).toBe(6);
  });
});
