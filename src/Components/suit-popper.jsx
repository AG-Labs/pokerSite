import React from 'react'

import club from '../Images/suits/club.png';
import diamond from '../Images/suits/diamond.png';
import heart from '../Images/suits/heart.png';
import spade from '../Images/suits/spade.png';

const SuitPopper = props => {
    return(
        <div id = {'popup'} className="popper" style = {{display: 'none'}}>
            <img src = {heart} id = 'popheart' alt = 'heart suit' className = 'suitPopper' onClick = {(e)=>props.suitHandler(e)}></img>
            <img src = {club} id = 'popclub' alt = 'club suit' className = 'suitPopper' onClick = {(e)=>props.suitHandler(e)}></img>
            <img src = {diamond} id = 'popdiamond' alt = 'diamond suit' className = 'suitPopper' onClick = {(e)=>props.suitHandler(e)}></img>
            <img src = {spade} id = 'popspade' alt = 'spade suit' className = 'suitPopper' onClick = {(e)=>props.suitHandler(e)}></img>
            <div className="popper__arrow" x-arrow = 'true'></div>
        </div>
    )

}

export default SuitPopper;
