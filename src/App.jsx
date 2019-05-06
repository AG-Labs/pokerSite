import React, { Component } from 'react';
import PokerTable from './Components/table.jsx';
import MySection from './Components/mySection.jsx';
import PredictionArea from "./Components/prediction-area.jsx";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <PokerTable />
        <div className="bottom">
          <MySection />

          <div className="right" style={{overflow:'auto'}}>
            <PredictionArea />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
