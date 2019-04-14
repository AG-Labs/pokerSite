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
        setSelectedCard(event.target.id)

        let ref = document.querySelector('#' + event.target.id)
        let popperRef = document.querySelector('#popup' + event.target.id)
        popperRef.style.display = 'block'

        let popper = new Popper(ref, popperRef, {
            placement: 'bottom'
        });
    }

    const suitHandler = (event) => {
        changePhoto(selectedCard, event.target.id)


        let popperRef = document.querySelector('#popup' + selectedCard)
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
                <div className='tableCards'>
                    <img src={cardBack} 
                         alt="emptyCard" 
                         className='tableCard'
                         id = 'flop1'
                         onClick = {(e) => tableClickHandler(e)}></img>
                         <SuitPopper id = 'flop1' suitHandler = {suitHandler}></SuitPopper>               
                </div>

                <div className='tableCards'>
                    <img src={cardBack} 
                         alt="emptyCard" 
                         className='tableCard'
                         id = 'flop2'
                         onClick = {(e) => tableClickHandler(e)}></img>
                         <SuitPopper id = 'flop2' suitHandler = {suitHandler}></SuitPopper>
                </div>
                <div className='tableCards'>
                    <img src={cardBack} 
                         alt="emptyCard" 
                         className='tableCard'
                         id = 'flop3'
                         onClick = {(e) => tableClickHandler(e)}></img>
                         <SuitPopper id = 'flop3' suitHandler = {suitHandler}></SuitPopper>
                </div>
                <div className='tableCards'>
                    <img src={cardBack} 
                         alt="emptyCard" 
                         className='tableCard'
                         id = 'turn'
                         onClick = {(e) => tableClickHandler(e)}></img>
                         <SuitPopper id = 'turn' suitHandler = {suitHandler}></SuitPopper>
                </div>
                <div className='tableCards'>
                    <img src={cardBack} 
                         alt="emptyCard" 
                         className='tableCard'
                         id = 'river'
                         onClick = {(e) => tableClickHandler(e)}></img>
                         <SuitPopper id = 'river' suitHandler = {suitHandler}></SuitPopper>
                </div>                
            </div>
 )
}

export default pokerTable;