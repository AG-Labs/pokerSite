import React, { Component } from 'react';
import cardBack from '../Images/cardBack.png';
import '../Styles/mySection.css'


const mySection = props => (
    <>
    <div className="left">
    <div className="meter">
        <div className="power">60%</div>
    </div>

    <div className="myHand">
    <div className="myCardHolder"><img src={cardBack} alt = "empty card" className="myCard"></img></div>
    <div className="myCardHolder"><img src={cardBack} alt = "empty card" className="myCard"></img></div>
    </div>

    </div>
    </>
)
export default mySection