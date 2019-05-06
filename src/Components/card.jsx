import React, {Component} from 'react'
import mergeImages from 'merge-images';
import '../Styles/card.css'

import cardBack from '../Images/cardBack.png';
import cardFront from '../Images/card.png';
import club from '../Images/suits/club.png';
import diamond from '../Images/suits/diamond.png';
import heart from '../Images/suits/heart.png';
import spade from '../Images/suits/spade.png';

import one from '../Images/numbers/one.png'
import two from '../Images/numbers/two.png'
import three from '../Images/numbers/three.png'
import four from '../Images/numbers/four.png'
import five from '../Images/numbers/five.png'
import six from '../Images/numbers/six.png'
import seven from '../Images/numbers/seven.png'
import eight from '../Images/numbers/eight.png'
import nine from '../Images/numbers/nine.png'
import ten from '../Images/numbers/ten.png'
import jack from '../Images/numbers/Jack.png'
import queen from '../Images/numbers/Queen.png'
import king from '../Images/numbers/King.png'

class Card extends Component {

  constructor(props){
    super(props)
    this.props.startingVal 
      ? this.state = ({cardPic: cardFront})
      : this.state = ({cardPic: cardBack})
    this.changePhoto = this.changePhoto.bind(this)
  }

  componentWillMount(){
    if(!this.props.fullSize){
      this.changePhoto(this.props.initial.suit,this.props.initial.value)
    }
  }

  componentDidUpdate(oldProps){
    if (oldProps !== this.props){
      this.checkTypes()
    }
  }

  suits = {
    club: club,
    diamond: diamond,
    heart: heart,
    spade: spade
  }
  numbers ={
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

  checkTypes(){
    if((this.props.suit != false)&&(this.props.value != false)){
      this.changePhoto(this.props.suit,this.props.value)
    }
  }

  changePhoto = (setSuit, setNum) => {
    mergeImages([
      {src: cardFront, x: 0, y: 0},
      {src: this.suits[setSuit], x: 62, y: 100},
      {src: this.numbers[setNum],x:25,y:20},
      {src: this.numbers[setNum],x:195,y:280}
    ])
    .then(b64 => {
      this.setState({cardPic: b64})
    });
  }

  render(){
    return(
        <div className={this.props.styleGroup}>
            <img    src={this.state.cardPic} 
                    alt = "empty card" 
                    className='aCard' 
                    id = {this.props.id}
                    onClick = {(e) => this.props.clickHandler(e)}>
            </img>
        </div>
    )
  }
}


export default Card