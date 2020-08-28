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
              let newCard = Object.assign(
                {},
                prevState.cardStore[selectedCard]
              );
              newCard.suit = suit;
              return {
                cardStore: { ...prevState.cardStore, [selectedCard]: newCard },
              };
            });
          },
          setFace: (selectedCard, face) => {
            this.setState(
              (prevState) => {
                let newCard = Object.assign(
                  {},
                  prevState.cardStore[selectedCard]
                );
                newCard.face = face;
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
