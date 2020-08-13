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

const filterer = (card) => Object.keys(card).length !== 0;

const hands = [
  { name: "4 of a Kind", rank: 3 },
  { name: "Straight Flush", rank: 2 },
  { name: "Straight", rank: 6 },
  { name: "Flush", rank: 5 },
  { name: "High Card", rank: 10 },
  { name: "1 Pair", rank: 9 },
  { name: "2 Pair", rank: 8 },
  { name: "Royal Flush", rank: 1 },
  { name: "3 of a Kind", rank: 7 },
  { name: "Full House", rank: 4 },
];

exports.handler = async (event) => {
  let cards = JSON.parse(event.body).cards;

  let filteredCards = Object.values(cards).filter(filterer);
  if (filteredCards.length >= 5) {
    /**
     * return the best with the name and the cards that are needed
     */
    let combinations = generateCombinations(filteredCards, 5);
    let results = [];
    for (let combo of combinations) {
      results = [
        ...results,
        rankPokerHand(
          [
            values[combo[0].face],
            values[combo[1].face],
            values[combo[2].face],
            values[combo[3].face],
            values[combo[4].face],
          ],
          [
            suits[combo[0].suit],
            suits[combo[1].suit],
            suits[combo[2].suit],
            suits[combo[3].suit],
            suits[combo[4].suit],
          ]
        ),
      ];
    }
    console.log(results);

    return { statusCode: 200, body: JSON.stringify(results) };
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "waiting until table cards are dealt" }),
    };
  }

  return { statusCode: 200, body: "hello" };
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

function rankPokerHand(cs, ss) {
  var v,
    i,
    o,
    s =
      (1 << cs[0]) | (1 << cs[1]) | (1 << cs[2]) | (1 << cs[3]) | (1 << cs[4]);
  for (i = -1, v = o = 0; i < 5; i++, o = Math.pow(2, cs[i] * 4)) {
    v += o * (((v / o) & 15) + 1);
  }
  v = (v % 15) - (s / (s & -s) == 31 || s == 0x403c ? 3 : 1);
  v -= (ss[0] == (ss[1] | ss[2] | ss[3] | ss[4])) * (s == 0x7c00 ? -5 : 1);

  return hands[v].name + (s == 0x403c ? " (Ace low)" : "");
}

let calculateBest = () => {
  let bestHand = { name: "good", cards: ["some cards"] };
  return bestHand;
};
