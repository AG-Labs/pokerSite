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
  allowTurn: false,
  allowRiver: false,
  calculations: [],
};

function duplicateCards(currentCards, newCard) {
  for (const card in currentCards) {
    if (
      currentCards[card].face === newCard.face &&
      currentCards[card].suit === newCard.suit
    ) {
      return true;
    } else {
      return false;
    }
  }
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
    let allowTableVar =
      Object.keys(this.state.cardStore.handOne).length !== 0 &&
      Object.keys(this.state.cardStore.handTwo).length !== 0;
    if (allowTableVar || this.state.allowTurn || this.state.allowRiver) {
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
              null
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
              face
            );

            if (!duplicateCards(this.state.cardStore, newCard)) {
              console.log("setting card");
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
                }
              );
            } else {
              //animate the card
              console.log("hit the dupe bit");
            }
          },
          getLambda: this.getLambda,
          allowTurn: (input) => {
            this.setState({ allowTurn: input }, this.getLambda);
          },
          allowRiver: (input) => {
            this.setState({ allowRiver: input }, this.getLambda);
          },
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
