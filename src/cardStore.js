import React, { Component } from "react";
import Axios from "axios";

export const CardContext = React.createContext();

let cardDesc = {
  value: "",
  suit: ""
};

class ContextProvider extends Component {
  state = {
    cardStore: {
      handOne: cardDesc,
      handTwo: cardDesc,
      flop1: cardDesc,
      flop2: cardDesc,
      flop3: cardDesc,
      turn: cardDesc,
      river: cardDesc
    }
  };

  getLambda = () => {
    Axios.post("/.netlify/functions/hand-strength", {
      cards: this.state.cardStore
    })
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <CardContext.Provider
        value={{
          state: this.state,
          setSuit: (selectedCard, suit) => {
            this.setState(prevState => {
              let newCard = Object.assign(
                {},
                prevState.cardStore[selectedCard]
              );
              newCard.suit = suit;
              return {
                cardStore: { ...prevState.cardStore, [selectedCard]: newCard }
              };
            });
          },
          setValue: (selectedCard, value) => {
            this.setState(prevState => {
              let newCard = Object.assign(
                {},
                prevState.cardStore[selectedCard]
              );
              newCard.value = value;
              return {
                cardStore: { ...prevState.cardStore, [selectedCard]: newCard }
              };
            });
          },
          getLambda: this.getLambda
        }}
      >
        {this.props.children}
      </CardContext.Provider>
    );
  }
}

export default ContextProvider;
