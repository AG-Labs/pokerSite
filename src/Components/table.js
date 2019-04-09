import React, { Component } from 'react';
import mergeImages from 'merge-images';

import cardBack from '../Images/cardBack.png';
import cardFront from '../Images/card.png';
import club from '../Images/club.png';
import diamond from '../Images/club.png';
import heart from '../Images/club.png';
import spade from '../Images/club.png';

import '../Styles/table.css'

const pokerTable = props => {

    const tableClickHandler = (event) => {
        console.log(event.target.id)
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