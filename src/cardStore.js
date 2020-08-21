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
};

class ContextProvider extends Component {
  state = initState;

  getLambda = () => {
    Axios.post("/.netlify/functions/hand-strength", {
      cards: this.state.cardStore,
    })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
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
            this.setState((prevState) => {
              let newCard = Object.assign(
                {},
                prevState.cardStore[selectedCard]
              );
              newCard.face = face;
              return {
                cardStore: { ...prevState.cardStore, [selectedCard]: newCard },
              };
            });
          },
          getLambda: this.getLambda,
          setTable: (input) => {
            this.setState({ allowTable: input }, this.getLambda);
          },
          setTurn: (input) => {
            this.setState({ allowTurn: input }, this.getLambda);
          },
          setRiver: (input) => {
            this.setState({ allowRiver: input }, this.getLambda);
          },
          reset: () => {
            this.setState(initState);
          },
        }}
      >
        {this.props.children}
      </CardContext.Provider>
    );
  }
}

export default ContextProvider;
