import React from 'react';
import mergeImages from 'merge-images';
import Popper from 'popper.js'
import SuitPopper from './suit-popper.jsx';
import NumberPopper from './number-popper';

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

import '../Styles/table.css'

const pokerTable = props => {

    const suits = {
        club: club,
        diamond: diamond,
        heart: heart,
        spade: spade
    }
    const numbers ={
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
    const [selectedCard, setSelectedCard] = React.useState('')
    const [selectedSuit, setSelectedSuit] = React.useState('')

    const tableClickHandler = (event) => {
        setSelectedCard(event.target.id)

        let ref = document.querySelector('#' + event.target.id)
        let popperRef = document.querySelector('#popup')
        popperRef.style.display = 'block'

        let popper = new Popper(ref, popperRef, {
            placement: 'bottom'
        });
    }

    const suitHandler = (event) => {
        setSelectedSuit(event.target.id.substring(3))

        let suitPopperRef = document.querySelector('#'+event.target.id)
        let numPopperRef = document.querySelector('#numPopup')
        numPopperRef.style.display = 'flex'

        let popper = new Popper(suitPopperRef, numPopperRef, {
            placement: 'bottom'
        });
    }

    const numHandler = (event) => {
        changePhoto(selectedCard, selectedSuit,event.target.id )

        let popperRef = document.querySelector('#popup')
        let numPopperRef = document.querySelector('#numPopup')

        popperRef.style.display = 'none'
        numPopperRef.style.display = 'none'
    }

    const changePhoto = (photoID, setSuit, setNum) => {
        
        mergeImages([
          {src: cardFront, x: 0, y: 0},
          {src: suits[setSuit], x: 62, y: 100},
          {src: numbers[setNum],x:25,y:20},
          {src: numbers[setNum],x:195,y:280}
        ])
          .then(b64 => {
            document.querySelector('#'+photoID).src = b64
    
          });
    }

 return(
        <div className="Table">
            <SuitPopper suitHandler = {suitHandler}></SuitPopper>
            <NumberPopper numHandler = {numHandler}></NumberPopper>
                <div className='tableCards'>
                    <img src={cardBack} 
                         alt="emptyCard" 
                         className='tableCard'
                         id = 'flop1'
                         onClick = {(e) => tableClickHandler(e)}></img>
                </div>
                <div className='tableCards'>
                    <img src={cardBack} 
                         alt="emptyCard" 
                         className='tableCard'
                         id = 'flop2'
                         onClick = {(e) => tableClickHandler(e)}></img>
                </div>
                <div className='tableCards'>
                    <img src={cardBack} 
                         alt="emptyCard" 
                         className='tableCard'
                         id = 'flop3'
                         onClick = {(e) => tableClickHandler(e)}></img>
                </div>
                <div className='tableCards'>
                    <img src={cardBack} 
                         alt="emptyCard" 
                         className='tableCard'
                         id = 'turn'
                         onClick = {(e) => tableClickHandler(e)}></img>
                </div>
                <div className='tableCards'>
                    <img src={cardBack} 
                         alt="emptyCard" 
                         className='tableCard'
                         id = 'river'
                         onClick = {(e) => tableClickHandler(e)}></img>
                </div>                
            </div>
 )
}

export default pokerTable;