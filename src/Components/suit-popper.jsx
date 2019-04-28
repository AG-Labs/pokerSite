import React from 'react'

import club from '../Images/suits/club.png';
import diamond from '../Images/suits/diamond.png';
import heart from '../Images/suits/heart.png';
import spade from '../Images/suits/spade.png';

const SuitPopper = props => {
    return(
        <div id = {'popup'+ props.idAddition} className="popper" style = {{display: 'none'}}>
            <img src = {heart} id = {'popheart'+ props.idAddition}  alt = 'heart suit' className = 'suitPopper' onClick = {(e)=>props.suitHandler(e,'heart')}></img>
            <img src = {club} id = {'popclub'+ props.idAddition} alt = 'club suit' className = 'suitPopper' onClick = {(e)=>props.suitHandler(e,'club')}></img>
            <img src = {diamond} id = {'popdiamond'+ props.idAddition} alt = 'diamond suit' className = 'suitPopper' onClick = {(e)=>props.suitHandler(e,'diamond')}></img>
            <img src = {spade} id = {'popspade'+ props.idAddition} alt = 'spade suit' className = 'suitPopper' onClick = {(e)=>props.suitHandler(e, 'spade')}></img>
            <div className="popper__arrow" x-arrow = 'true'></div>
        </div>
    )

}

export default SuitPopper;
