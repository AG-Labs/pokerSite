import React, { Component } from 'react';
import PokerTable from './Components/table.jsx';
import MySection from './Components/mySection.jsx';
import './App.css';


import cardBack from './Images/cardBack.png';
import cardFront from './Images/card.png';
import club from './Images/suits/club.png';
import diamond from './Images/suits/diamond.png';
import heart from './Images/suits/heart.png';
import spade from './Images/suits/spade.png';

import one from './Images/numbers/one.png'
import two from './Images/numbers/two.png'
import three from './Images/numbers/three.png'
import four from './Images/numbers/four.png'
import five from './Images/numbers/five.png'
import six from './Images/numbers/six.png'
import seven from './Images/numbers/seven.png'
import eight from './Images/numbers/eight.png'
import nine from './Images/numbers/nine.png'
import ten from './Images/numbers/ten.png'
import jack from './Images/numbers/Jack.png'
import queen from './Images/numbers/Queen.png'
import king from './Images/numbers/King.png'


class App extends Component {

  suits2 = {
    club: club,
    diamond: diamond,
    heart: heart,
    spade: spade
  }
  numbers2 ={
      one:one,
      two:two,
      three:three,
      four:four,
      five:five,
      six:six,
      seven:seven,
      eight:eight,
      nine:nine,
      ten:ten,
      jack:jack,
      queen:queen,
      king:king
  }

  render() {
    return (
      <div className="App">
      <PokerTable suits = {this.suits2} numbers={this.numbers2}/>
        <div className="bottom">
          <MySection suits = {this.suits2} numbers={this.numbers2}/>

          <div className="right">
            prediction area
          </div>

        </div>
      </div>
    );
  }
}

export default App;
