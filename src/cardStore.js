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
  allowTable: false,
  allowTurn: false,
  allowRiver: false,
  calculations: [],
};

function duplicateCards(cards) {
  /* loop over cards
  loop again and check for duplicate
  */
  console.log("-----HERE-------");
  console.log(cards);
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
    if (
      this.state.allowTable ||
      this.state.allowTurn ||
      this.state.allowRiver
    ) {
      this.getLambda();
    }
  };

  render() {
    return (
      <CardContext.Provider
        value={{
          state: this.state,
          setSuit: (selectedCard, suit) => {
            this.setState((prevState) => {
              let newCard = createCard(
                prevState.cardStore[selectedCard],
                suit,
                null
              );
              return {
                cardStore: { ...prevState.cardStore, [selectedCard]: newCard },
              };
            });
          },
          setFace: (selectedCard, face) => {
            duplicateCards(this.state.cardStore);

            this.setState(
              (prevState) => {
                let newCard = createCard(
                  prevState.cardStore[selectedCard],
                  null,
                  face
                );
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
          },
          getLambda: this.getLambda,
          allowTable: (input) => {
            this.setState({ allowTable: input }, this.getLambda);
          },
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
