import React from 'react';
import mergeImages from 'merge-images';
import Popper from 'popper.js'
import SuitPopper from './suit-popper.jsx';
import NumberPopper from './number-popper';
import Card from './card'

import cardBack from '../Images/cardBack.png';
import cardFront from '../Images/card.png';

import '../Styles/mySection.css'


const mySection = props => {
    const [selectedCard, setSelectedCard] = React.useState('')
    const [selectedSuit, setSelectedSuit] = React.useState('')
    
    const myHandClickHandler = (event) => {
        if (event.target.id !== selectedCard){
            let numPopperRef = document.querySelector('#numPopuptable')
            numPopperRef.style.display = 'none'
        }
        setSelectedCard(event.target.id)
        let ref = document.querySelector('#' + event.target.id)
        let popperRef = document.querySelector('#popuphand')
        popperRef.style.display = 'block'
        
        let popper = new Popper(ref, popperRef, {
            placement: 'top'
        });
    }
    const suitHandler = (event,suit) => {
        console.log('suit handler hand')

        setSelectedSuit(suit)
        let suitPopperRef = document.querySelector('#'+event.target.id)
        let numPopperRef = document.querySelector('#numPopuphand')
        numPopperRef.style.display = 'flex'        

        let popper = new Popper(suitPopperRef, numPopperRef, {
            placement: 'top'
        });
    }

    const numHandler = (event) => {
        console.log('number handler hand')
        changePhoto(selectedCard, selectedSuit,event.target.id )

        let popperRef = document.querySelector('#popuphand')
        let numPopperRef = document.querySelector('#numPopuphand')

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
    <>
    <div className="left">
        <div className="meter">
            <div className="power">60%</div>
        </div>

        <div className="myHand">
            <SuitPopper suitHandler = {suitHandler} idAddition = 'hand'></SuitPopper>
            <NumberPopper numHandler = {numHandler} idAddition = 'hand'></NumberPopper>
            <Card styleGroup = 'myCardHolder' group = 'myCard' id = 'handOne' clickHandler = {myHandClickHandler}/>
            <Card styleGroup = 'myCardHolder' group = 'myCard' id = 'handTwo' clickHandler = {myHandClickHandler}/>
        </div>
    </div>
    </>
    )
}
export default mySection