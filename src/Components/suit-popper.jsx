import React from 'react'

import club from '../Images/club.png';
import diamond from '../Images/diamond.png';
import heart from '../Images/heart.png';
import spade from '../Images/spade.png';

const SuitPopper = props => {

    return(
        <div id = {'popup'+props.id} className="popper" style = {{display: 'none'}}>
            <img src = {heart} className = 'suitPopper'></img>
            <img src = {club} className = 'suitPopper'></img>
            <img src = {diamond} className = 'suitPopper'></img>
            <img src = {spade} className = 'suitPopper'></img>
            <div className="popper__arrow"></div>
        </div>
    )

}

export default SuitPopper;
