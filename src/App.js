import React, { Component } from 'react';
import PokerTable from './Components/table.js';
import MySection from './Components/mySection.js';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
      <PokerTable/>
        <div className="bottom">
          <MySection/>

          <div className="right">
          </div>

        </div>
      </div>
    );
  }
}

export default App;
