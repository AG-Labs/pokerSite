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
const reducer = (accumulator, currentVal) => {
  if (Object.keys(currentVal).length === 0) {
    return accumulator + 1;
  } else return accumulator;
};

const filterer = (card) => Object.keys(card).length !== 0;

exports.handler = async (event) => {
  let cards = JSON.parse(event.body).cards;

  let filteredCards = Object.values(cards).filter(filterer);
  if (filteredCards.length >= 5) {
    /** generate combinations from present cards
     * work out rank of all possible combinations
     * return the best with the name and the cards that are needed
     */
    console.log(generateCombinations(filteredCards, 5).length);
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
