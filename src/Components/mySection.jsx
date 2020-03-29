import React, { useState, useContext } from "react";
import Popper from "popper.js";
import SuitPopper from "./suit-popper.jsx";
import NumberPopper from "./number-popper";
import Card from "./card";
import { CardContext } from "../cardStore.js";

import "../Styles/mySection.css";

const MySection = props => {
  const context = useContext(CardContext);
  let [selectedCard, setSelectedCard] = useState("");

  const myHandClickHandler = event => {
    if (event.target.id !== selectedCard) {
      let numPopperRef = document.querySelector("#numPopuptable");
      numPopperRef.style.display = "none";
    }
    setSelectedCard(event.target.id);
    let ref = document.querySelector("#" + event.target.id);
    let popperRef = document.querySelector("#popuphand");
    popperRef.style.display = "block";

    let popper = new Popper(ref, popperRef, {
      placement: "top"
    });
  };
  const suitHandler = (event, suit) => {
    console.log("suit handler hand");
    context.setSuit(selectedCard, suit);

    let suitPopperRef = document.querySelector("#" + event.target.id);
    let numPopperRef = document.querySelector("#numPopuphand");
    numPopperRef.style.display = "flex";

    let popper = new Popper(suitPopperRef, numPopperRef, {
      placement: "top"
    });
  };

  const numHandler = event => {
    console.log("number handler hand");
    let temp = event.target.id;

    context.setValue(selectedCard, temp);

    let popperRef = document.querySelector("#popuphand");
    let numPopperRef = document.querySelector("#numPopuphand");

    popperRef.style.display = "none";
    numPopperRef.style.display = "none";
  };

  return (
    <>
      <div className="left">
        <div className="meter">
          <div className="power">60%</div>
        </div>

        <div className="myHand">
          <SuitPopper suitHandler={suitHandler} idAddition="hand" />
          <NumberPopper numHandler={numHandler} idAddition="hand" />
          <Card
            alterCardStore={props.alterCardStore}
            styleGroup="myCardHolder"
            group="myCard"
            id="handOne"
            suit={context.state.cardStore.handOne.suit}
            value={context.state.cardStore.handOne.value}
            clickHandler={myHandClickHandler}
            fullSize={true}
          />
          <Card
            alterCardStore={props.alterCardStore}
            styleGroup="myCardHolder"
            group="myCard"
            id="handTwo"
            suit={context.state.cardStore.handTwo.suit}
            value={context.state.cardStore.handTwo.value}
            clickHandler={myHandClickHandler}
            fullSize={true}
          />
        </div>
      </div>
    </>
  );
};
export default MySection;
