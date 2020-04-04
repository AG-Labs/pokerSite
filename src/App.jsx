import React, { Component } from "react";
import ContextProvider from "./cardStore";
import PokerTable from "./Components/pokerTable.jsx";
import MySection from "./Components/mySection.jsx";
import PredictionArea from "./Components/prediction-area.jsx";
import "./App.css";

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
