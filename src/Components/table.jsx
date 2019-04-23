import React from 'react';
import mergeImages from 'merge-images';
import Popper from 'popper.js'
import SuitPopper from './suit-popper.jsx'

import cardBack from '../Images/cardBack.png';
import cardFront from '../Images/card.png';
import club from '../Images/club.png';
import diamond from '../Images/diamond.png';
import heart from '../Images/heart.png';
import spade from '../Images/spade.png';

import '../Styles/table.css'

const pokerTable = props => {

    const suits = {
        club: club,
        diamond: diamond,
        heart: heart,
        spade: spade
    }
    const [selectedCard, setSelectedCard] = React.useState('')

    const tableClickHandler = (event) => {
        console.log(event.target)
        setSelectedCard(event.target.id)

        let ref = document.querySelector('#' + event.target.id)
        let popperRef = document.querySelector('#popup')
        popperRef.style.display = 'block'

        let popper = new Popper(ref, popperRef, {
            placement: 'bottom'
        });
    }

    const suitHandler = (event) => {
        changePhoto(selectedCard, event.target.id)

        let popperRef = document.querySelector('#popup')
        popperRef.style.display = 'none'
    }

    const changePhoto = (photoID, setSuit) => {
        
        mergeImages([
          {src: cardFront, x: 0, y: 0},
          {src: suits[setSuit], x: 62, y: 100}
        ])
          .then(b64 => {
            document.querySelector('#'+photoID).src = b64
    
          });
    }

 return(
        <div className="Table">
            <SuitPopper suitHandler = {suitHandler}></SuitPopper>
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