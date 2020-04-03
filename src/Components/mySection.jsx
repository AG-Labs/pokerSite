import React, { useState, useContext } from "react";
import { createPopper } from "@popperjs/core";
import SuitPopper from "./suit-popper.jsx";
import NumberPopper from "./number-popper";
import Card from "./card";
import { CardContext } from "../cardStore.js";

import "../Styles/mySection.css";

const MySection = props => {
  const context = useContext(CardContext);
  let [selectedCard, setSelectedCard] = useState("");
  let [cardsSet, setCardsSet] = useState([false, false]);

  const myHandClickHandler = event => {
    if (event.target.id !== selectedCard) {
      let numPopperRef = document.querySelector("#numPopuptable");
      numPopperRef.style.display = "none";
    }
    setSelectedCard(event.target.id);
    let ref = document.querySelector("#" + event.target.id);
    let popperRef = document.querySelector("#popuphand");
    popperRef.style.display = "block";

    const popper = createPopper(ref, popperRef, {
      placement: "top",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 6]
          }
        }
      ]
    });
  };
  const suitHandler = (event, suit) => {
    console.log("suit handler hand");
    context.setSuit(selectedCard, suit);

    let suitPopperRef = document.querySelector("#" + event.target.id);
    let numPopperRef = document.querySelector("#numPopuphand");
    numPopperRef.style.display = "flex";

    const popper = createPopper(suitPopperRef, numPopperRef, {
      placement: "top",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 16]
          }
        }
      ]
    });
  };

  const numHandler = event => {
    console.log("number handler hand");
    let temp = event.target.id;

    context.setValue(selectedCard, temp);

    if (selectedCard == "handOne") {
      let tempCards = cardsSet;
      tempCards[0] = !tempCards[0];
      setCardsSet(tempCards);
      if (tempCards.every(Boolean)) {
        context.setTable(true);
      }
    } else {
      let tempCards = cardsSet;
      tempCards[1] = !tempCards[1];
      setCardsSet(tempCards);
      if (tempCards.every(Boolean)) {
        context.setTable(true);
      }
    }

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
