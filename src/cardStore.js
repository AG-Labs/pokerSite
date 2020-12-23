import React, { Component } from "react";
import Axios from "axios";

export const CardContext = React.createContext();

const initState = {
  cardStore: {
    handOne: {},
    handTwo: {},
    flop1: {},
    flop2: {},
    flop3: {},
    turn: {},
    river: {},
  },
  calculations: [],
};

function duplicateCards(currentCards, newCard) {
  for (const card in currentCards) {
    if (
      currentCards[card].face === newCard.face &&
      currentCards[card].suit === newCard.suit
    ) {
      return true;
    }
  }
  return false;
}

function createCard(oldCard, newSuit, newFace) {
  let newCard = Object.assign({}, oldCard);
  if (newSuit) {
    newCard.suit = newSuit;
  }
  if (newFace) {
    newCard.face = newFace;
  }
  return newCard;
}

class ContextProvider extends Component {
  state = initState;

  getLambda = () => {
    Axios.post("/.netlify/functions/hand-strength", {
      cards: this.state.cardStore,
    })
      .then((resp) => {
        if (!resp.data.hasOwnProperty("message")) {
          this.setState({ calculations: resp.data });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  updateAny = () => {
    let noSet = Object.values(this.state.cardStore).reduce(
      (cumulative, current) => {
        if (Object.keys(current).length > 1) {
          return cumulative + 1;
        } else {
          return cumulative;
        }
      },
      0,
    );

    if (noSet === 2 || noSet === 5 || noSet === 6 || noSet === 7) {
      this.getLambda();
    }
  };

  render() {
    return (
      <CardContext.Provider
        value={{
          state: this.state,
          setSuit: (selectedCard, suit) => {
            let newCard = createCard(
              this.state.cardStore[selectedCard],
              suit,
              null,
            );

            this.setState((prevState) => {
              return {
                cardStore: { ...prevState.cardStore, [selectedCard]: newCard },
              };
            });
          },
          setFace: (selectedCard, face) => {
            let newCard = createCard(
              this.state.cardStore[selectedCard],
              null,
              face,
            );

            if (!duplicateCards(this.state.cardStore, newCard)) {
              this.setState(
                (prevState) => {
                  return {
                    cardStore: {
                      ...prevState.cardStore,
                      [selectedCard]: newCard,
                    },
                  };
                },
                () => {
                  this.updateAny();
                },
              );
            } else {
              //animate the card
            }
          },
          getLambda: this.getLambda,
          reset: () => {
            this.setState(initState);
          },
          updateAny: this.updateAny,
        }}
      >
        {this.props.children}
      </CardContext.Provider>
    );
  }
}

export default ContextProvider;
