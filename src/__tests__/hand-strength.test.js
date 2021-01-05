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

const highCard = [
  { suit: "club", face: "six" },
  { suit: "diamond", face: "two" },
  { suit: "spade", face: "three" },
  { suit: "club", face: "five" },
  { suit: "diamond", face: "nine" },
];
const onePair = [
  { suit: "club", face: "six" },
  { suit: "diamond", face: "ten" },
  { suit: "spade", face: "jack" },
  { suit: "club", face: "seven" },
  { suit: "diamond", face: "six" },
];
const twoPair = [
  { suit: "club", face: "six" },
  { suit: "spade", face: "jack" },
  { suit: "club", face: "seven" },
  { suit: "diamond", face: "jack" },
  { suit: "diamond", face: "six" },
];
const threeKind = [
  { suit: "club", face: "six" },
  { suit: "spade", face: "six" },
  { suit: "club", face: "seven" },
  { suit: "diamond", face: "jack" },
  { suit: "diamond", face: "six" },
];
const straight = [
  { suit: "club", face: "six" },
  { suit: "diamond", face: "ten" },
  { suit: "spade", face: "eight" },
  { suit: "club", face: "seven" },
  { suit: "diamond", face: "nine" },
];
const flush = [
  { suit: "club", face: "six" },
  { suit: "club", face: "ten" },
  { suit: "club", face: "eight" },
  { suit: "club", face: "two" },
  { suit: "club", face: "nine" },
];

const fullHouse = [
  { suit: "club", face: "six" },
  { suit: "spade", face: "six" },
  { suit: "heart", face: "six" },
  { suit: "diamond", face: "two" },
  { suit: "club", face: "two" },
];

const fourKind = [
  { suit: "club", face: "six" },
  { suit: "spade", face: "six" },
  { suit: "heart", face: "six" },
  { suit: "diamond", face: "six" },
  { suit: "club", face: "two" },
];

const straightFlush = [
  { suit: "club", face: "six" },
  { suit: "club", face: "ten" },
  { suit: "club", face: "eight" },
  { suit: "club", face: "seven" },
  { suit: "club", face: "nine" },
];

const royalFlush = [
  { suit: "club", face: "jack" },
  { suit: "club", face: "queen" },
  { suit: "club", face: "king" },
  { suit: "club", face: "ace" },
  { suit: "club", face: "ten" },
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

describe("Rank Hands", () => {
  test("High Card", () => {
    let rankedResult = rankPokerHand(highCard);
    expect(rankedResult.result).toBe("High Card");
  });

  test("1 pair", () => {
    let rankedResult = rankPokerHand(onePair);
    expect(rankedResult.result).toBe("1 Pair");
  });

  test("2 pair", () => {
    let rankedResult = rankPokerHand(twoPair);
    expect(rankedResult.result).toBe("2 Pair");
  });

  test("3 of a kind", () => {
    let rankedResult = rankPokerHand(threeKind);
    expect(rankedResult.result).toBe("3 of a Kind");
  });

  test("Straight", () => {
    let rankedResult = rankPokerHand(straight);
    expect(rankedResult.result).toBe("Straight");
  });

  test("Flush", () => {
    let rankedResult = rankPokerHand(flush);
    expect(rankedResult.result).toBe("Flush");
  });

  test("Full House", () => {
    let rankedResult = rankPokerHand(fullHouse);
    expect(rankedResult.result).toBe("Full House");
  });

  test("Four of a Kind", () => {
    let rankedResult = rankPokerHand(fourKind);
    expect(rankedResult.result).toBe("4 of a Kind");
  });

  test("Straight Flush", () => {
    let rankedResult = rankPokerHand(straightFlush);
    expect(rankedResult.result).toBe("Straight Flush");
  });

  test("Royal Flush", () => {
    let rankedResult = rankPokerHand(royalFlush);
    expect(rankedResult.result).toBe("Royal Flush");
  });
});
