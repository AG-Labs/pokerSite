import React, { Component } from "react";
import ContextProvider from "./cardStore";
import PokerTable from "./Components/table.jsx";
import MySection from "./Components/mySection.jsx";
import PredictionArea from "./Components/prediction-area.jsx";
import "./App.css";

let suits = {
  club: 0,
  diamond: 1,
  heart: 2,
  spade: 3
};

let cardDesc = {
  value: null,
  suit: null
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardStore: {
        handOne: cardDesc,
        handTwo: cardDesc,
        flopOne: cardDesc,
        flopTwo: cardDesc,
        flopThree: cardDesc,
        turn: cardDesc,
        river: cardDesc
      }
    };
    this.alterCardStore = this.alterCardStore.bind(this);
  }

  alterCardStore(cardType, card) {
    console.log("alter card store", cardType, card);
  }

  handValue = () => {};

  render() {
    return (
      <ContextProvider>
        <div className="App">
          <PokerTable alterCardStore={this.alterCardStore} />
          <div className="bottom">
            <MySection alterCardStore={this.alterCardStore} />

            <div className="right" style={{ overflow: "auto" }}>
              <PredictionArea />
            </div>
          </div>
        </div>
      </ContextProvider>
    );
  }
}

export default App;
