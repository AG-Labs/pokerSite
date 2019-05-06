import React from 'react';
import Popper from 'popper.js'
import SuitPopper from './suit-popper.jsx';
import NumberPopper from './number-popper';
import Card from './card'

import '../Styles/mySection.css'


const mySection = props => {
    const [selectedCard, setSelectedCard] = React.useState('')

    const [suits, setSuits] = React.useState({handOne:'',handTwo:''})
    const [values, setvaule] = React.useState({handOne:'',handTwo:''})
    
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
        setSuits(prevState => {
            return { ...prevState, [selectedCard]: suit }
          });

        let suitPopperRef = document.querySelector('#'+event.target.id)
        let numPopperRef = document.querySelector('#numPopuphand')
        numPopperRef.style.display = 'flex'        

        let popper = new Popper(suitPopperRef, numPopperRef, {
            placement: 'top'
        });
    }

    const numHandler = (event) => {
        console.log('number handler hand')
        let temp = event.target.id
        setvaule(prevState => {
            return { ...prevState, [selectedCard]: temp }
          });

        let popperRef = document.querySelector('#popuphand')
        let numPopperRef = document.querySelector('#numPopuphand')

        popperRef.style.display = 'none'
        numPopperRef.style.display = 'none'
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
            <Card styleGroup = 'myCardHolder' group = 'myCard' id = 'handOne' suit = {suits.handOne} value ={values.handOne} clickHandler = {myHandClickHandler} fullSize = {true}/>
            <Card styleGroup = 'myCardHolder' group = 'myCard' id = 'handTwo' suit = {suits.handTwo} value ={values.handTwo} clickHandler = {myHandClickHandler} fullSize = {true}/>
        </div>
    </div>
    </>
    )
}
export default mySection