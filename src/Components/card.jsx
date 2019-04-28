import React from 'react'
import mergeImages from 'merge-images';


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



const Card = props => {

    const [cardPic, setCardPic] = React.useState(cardBack)

    let suits = {
        club: club,
        diamond: diamond,
        heart: heart,
        spade: spade
      }
    let numbers ={
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

      const changePhoto = (photoID, setSuit, setNum) => {
        
        mergeImages([
          {src: cardFront, x: 0, y: 0},
          {src: props.suits[setSuit], x: 62, y: 100},
          {src: props.numbers[setNum],x:25,y:20},
          {src: props.numbers[setNum],x:195,y:280}
        ])
          .then(b64 => {
            setCardPic = b64
    
          });
    }

    return(
        <div className={props.styleGroup}>
            <img    src={cardPic} 
                    alt = "empty card" 
                    className={props.group} 
                    id = {props.id}
                    onClick = {(e) => props.clickHandler(e)}>
            </img>
        </div>
    )
}


export default Card