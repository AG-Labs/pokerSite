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

class App extends Component {
  render() {
    return (
      <ContextProvider>
        <div className="App">
          <PokerTable />
          <div className="bottom">
            <MySection />
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
