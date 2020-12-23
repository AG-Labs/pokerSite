const values = {
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  jack: 11,
  queen: 12,
  king: 13,
  ace: 14,
};
const suits = { spade: 1, club: 2, heart: 4, diamond: 8 };

const filterer = (card) => Object.keys(card).length > 1;

const duplicates = (cards) => {
  for (let card in cards) {
    let testCard = cards[card];
    for (let underTest in cards) {
      if (card !== underTest) {
        let underTestCard = cards[underTest];
        if (
          testCard.face === underTestCard.face &&
          testCard.suit === underTestCard.suit
        ) {
          return true;
        }
      }
    }
  }
  return false;
};

const hands = [
  { name: "4 of a Kind", rank: 8 },
  { name: "Straight Flush", rank: 9 },
  { name: "Straight", rank: 5 },
  { name: "Flush", rank: 6 },
  { name: "High Card", rank: 1 },
  { name: "1 Pair", rank: 2 },
  { name: "2 Pair", rank: 3 },
  { name: "Royal Flush", rank: 10 },
  { name: "3 of a Kind", rank: 4 },
  { name: "Full House", rank: 7 },
];

exports.handler = async (event) => {
  let cards = JSON.parse(event.body).cards;

  let filteredCards = Object.values(cards).filter(filterer);
  if (
    filteredCards.length === 5 ||
    filteredCards.length === 6 ||
    filteredCards.length === 7
  ) {
    let allowedCards = duplicates(filteredCards);

    if (allowedCards) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Invalid card supplied to calculator",
        }),
      };
    }
    /**
     * return the best with the name and the cards that are needed
     */
    let combinations = generateCombinations(filteredCards, 5);
    let results = [];
    for (let combo of combinations) {
      results = [...results, rankPokerHand(combo)];
    }
    let bestResult = calculateBest(results);

    return { statusCode: 200, body: JSON.stringify(bestResult) };
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "waiting until table cards are dealt" }),
    };
  }
};

function generateCombinations(sourceArray, comboLength) {
  const sourceLength = sourceArray.length;
  if (comboLength > sourceLength) return [];
  const combos = [];

  const makeNextCombos = (workingCombo, currentIndex, remainingCount) => {
    const oneAwayFromComboLength = remainingCount == 1;

    for (
      let sourceIndex = currentIndex;
      sourceIndex < sourceLength;
      sourceIndex++
    ) {
      const next = [...workingCombo, sourceArray[sourceIndex]];

      if (oneAwayFromComboLength) {
        combos.push(next);
      } else {
        makeNextCombos(next, sourceIndex + 1, remainingCount - 1);
      }
    }
  };

  makeNextCombos([], 0, comboLength);
  return combos;
}

function rankPokerHand(hand) {
  //maths taken from https://www.codeproject.com/Articles/569271/A-Poker-hand-analyzer-in-JavaScript-using-bit-math
  var v,
    i,
    o,
    s =
      (1 << values[hand[0].face]) |
      (1 << values[hand[1].face]) |
      (1 << values[hand[2].face]) |
      (1 << values[hand[3].face]) |
      (1 << values[hand[4].face]);
  for (
    i = -1, v = o = 0;
    i < 5;
    i++, o = Math.pow(2, values[hand[i]?.face] * 4)
  ) {
    v += o * (((v / o) & 15) + 1);
  }
  v = (v % 15) - (s / (s & -s) == 31 || s == 0x403c ? 3 : 1);
  v -=
    (suits[hand[0].suit] ==
      (suits[hand[1].suit] |
        suits[hand[2].suit] |
        suits[hand[3].suit] |
        suits[hand[4].suit])) *
    (s == 0x7c00 ? -5 : 1);

  return { result: hands[v].name + (s == 0x403c ? " (Ace low)" : ""), hand };
}

let calculateBest = (results) => {
  let bestRank = { rank: 0 };
  let bestHand = [];

  for (let result of results) {
    let foundRank = hands.find((rank, index) => {
      if (rank.name == result.result) return true;
    });
    if (foundRank.rank > bestRank.rank) {
      bestRank = foundRank;
      bestHand = [result];
    } else if (foundRank.rank === bestRank.rank) {
      bestHand.push(result);
    }
  }

  return bestHand;
};
