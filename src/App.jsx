import React, { Component } from 'react';
import PokerTable from './Components/table.jsx';
import MySection from './Components/mySection.jsx';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <PokerTable />
        <div className="bottom">
          <MySection />

          <div className="right">
            prediction area
          </div>

        </div>
      </div>
    );
  }
}

export default App;
