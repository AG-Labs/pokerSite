import React, { Component } from 'react';
import cardBack from './Images/cardBack.png';
import PokerTable from './Components/table.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <PokerTable/>
        <div className="bottom">
          
          <div className="left">
            <div className="meter">
                <div className="power">60%</div>
            </div>

            <div className="myHand">
              <div className="myCardHolder"><img src={cardBack} alt = "empty card" className="myCard"></img></div>
              <div className="myCardHolder"><img src={cardBack} alt = "empty card" className="myCard"></img></div>
            </div>
          
          </div>

          <div className="right">
          </div>

        </div>
      </div>
    );
  }
}

export default App;
