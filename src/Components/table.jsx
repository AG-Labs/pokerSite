import React, { Component } from 'react';
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

    const tableClickHandler = (event) => {
        switch (event.target.id){
            case 'flop1':
                changePhoto('flop1')
                break
            case 'flop2':
                changePhoto('flop2')
                break
            case 'flop3':
                changePhoto('flop3')
                break
            case 'turn':
                changePhoto('turn')
                break
            case 'river':
                changePhoto('river')
                break
        }
        let ref = document.querySelector('#' + event.target.id)
        let popperRef = document.querySelector('#popup' + event.target.id)
        popperRef.style.display = 'block'
        console.log('references',ref, popperRef)
        let popper = new Popper(ref, popperRef, {
            placement: 'bottom'
        });
    }

    const changePhoto = (photoID) => {
        mergeImages([
          {src: cardFront, x: 0, y: 0},
          {src: club, x: 62, y: 100}
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
                         <SuitPopper id = 'flop1'></SuitPopper>               
                </div>

                <div className='tableCards'>
                    <img src={cardBack} 
                         alt="emptyCard" 
                         className='tableCard'
                         id = 'flop2'
                         onClick = {(e) => tableClickHandler(e)}></img>
                         <SuitPopper id = 'flop2'></SuitPopper>
                </div>
                <div className='tableCards'>
                    <img src={cardBack} 
                         alt="emptyCard" 
                         className='tableCard'
                         id = 'flop3'
                         onClick = {(e) => tableClickHandler(e)}></img>
                         <SuitPopper id = 'flop3'></SuitPopper>
                </div>
                <div className='tableCards'>
                    <img src={cardBack} 
                         alt="emptyCard" 
                         className='tableCard'
                         id = 'turn'
                         onClick = {(e) => tableClickHandler(e)}></img>
                         <SuitPopper id = 'turn'></SuitPopper>
                </div>
                <div className='tableCards'>
                    <img src={cardBack} 
                         alt="emptyCard" 
                         className='tableCard'
                         id = 'river'
                         onClick = {(e) => tableClickHandler(e)}></img>
                         <SuitPopper id = 'river'></SuitPopper>
                </div>                
            </div>
 )
}

export default pokerTable;