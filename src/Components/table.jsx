import React from 'react';
import mergeImages from 'merge-images';
import Popper from 'popper.js'
import SuitPopper from './suit-popper.jsx';
import NumberPopper from './number-popper';

import cardBack from '../Images/cardBack.png';
import cardFront from '../Images/card.png';

import '../Styles/table.css'

const pokerTable = props => {

    const [selectedCard, setSelectedCard] = React.useState('')
    const [selectedSuit, setSelectedSuit] = React.useState('')

    const tableClickHandler = (event) => {
        if (event.target.id !== selectedCard){
            let numPopperRef = document.querySelector('#numPopuptable')
            numPopperRef.style.display = 'none'
        }
        setSelectedCard(event.target.id)

        let ref = document.querySelector('#' + event.target.id)
        let popperRef = document.querySelector('#popuptable')
        popperRef.style.display = 'block'

        let popper = new Popper(ref, popperRef, {
            placement: 'bottom'
        });
    }

    const suitHandler = (event,suit) => {
        console.log('suit handler table')

        setSelectedSuit(suit)
        let suitPopperRef = document.querySelector('#'+event.target.id)
        let numPopperRef = document.querySelector('#numPopuptable')
        numPopperRef.style.display = 'flex'

        let popper = new Popper(suitPopperRef, numPopperRef, {
            placement: 'bottom'
        });
    }

    const numHandler = (event) => {
        console.log('number handler table')
        changePhoto(selectedCard, selectedSuit,event.target.id )

        let popperRef = document.querySelector('#popuptable')
        let numPopperRef = document.querySelector('#numPopuptable')

        popperRef.style.display = 'none'
        numPopperRef.style.display = 'none'
    }

    const changePhoto = (photoID, setSuit, setNum) => {
        
        mergeImages([
          {src: cardFront, x: 0, y: 0},
          {src: props.suits[setSuit], x: 62, y: 100},
          {src: props.numbers[setNum],x:25,y:20},
          {src: props.numbers[setNum],x:195,y:280}
        ])
          .then(b64 => {
            document.querySelector('#'+photoID).src = b64
    
          });
    }

 return(
        <div className="Table">
            <SuitPopper suitHandler = {suitHandler} idAddition = 'table'></SuitPopper>
            <NumberPopper numHandler = {numHandler} idAddition = 'table'></NumberPopper>
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