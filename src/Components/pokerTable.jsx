import React, { useState, useContext } from "react";
import { createPopper } from "@popperjs/core";
import SuitPopper from "./suit-popper.jsx";
import NumberPopper from "./number-popper";
import Card from "./card";
import { CardContext } from "../cardStore.js";

import "../Styles/table.css";

const PokerTable = (props) => {
  const context = useContext(CardContext);
  let [selectedCard, setSelectedCard] = useState("");
  let [cardsSet, setCardsSet] = useState([false, false, false, false, false]);

  const tableClickHandler = (event) => {

    if (Object.keys(context.state.cardStore.handOne).length !==0 && Object.keys(context.state.cardStore.handTwo).length !==0) {
      if (
        event.target.id.match(/flop/g) ||
        (event.target.id.match(/turn/g) && context.state.allowTurn) ||
        (event.target.id.match(/river/g) && context.state.allowRiver)
      ) {
        if (event.target.id !== selectedCard) {
          let numPopperRef = document.querySelector("#numPopuptable");
          numPopperRef.style.display = "none";
        }
        setSelectedCard(event.target.id);

        let ref = document.querySelector("#" + event.target.id);
        let popperRef = document.querySelector("#popuptable");
        popperRef.style.display = "block";

        createPopper(ref, popperRef, {
          placement: "bottom",
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 6],
              },
            },
          ],
        });
      }
    }
  };

  const suitHandler = (event, suit) => {
    context.setSuit(selectedCard, suit);

    let suitPopperRef = document.querySelector("#" + event.target.id);
    let numPopperRef = document.querySelector("#numPopuptable");
    numPopperRef.style.display = "flex";

    createPopper(suitPopperRef, numPopperRef, {
      placement: "bottom",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 16],
          },
        },
      ],
    });
  };

  const numHandler = (event) => {
    let temp = event.target.id;
    context.setFace(selectedCard, temp);
    setTableCard(selectedCard);

    let popperRef = document.querySelector("#popuptable");
    let numPopperRef = document.querySelector("#numPopuptable");

    popperRef.style.display = "none";
    numPopperRef.style.display = "none";
  };

  let setTableCard = (inputCard) => {
    let tempCards = cardsSet;
    switch (inputCard) {
      case "flop1":
        tempCards[0] = !tempCards[0];
        setCardsSet(tempCards);
        break;
      case "flop2":
        tempCards[1] = !tempCards[1];
        setCardsSet(tempCards);
        break;
      case "flop3":
        tempCards[2] = !tempCards[2];
        setCardsSet(tempCards);
        break;
      case "turn":
        tempCards[3] = !tempCards[3];
        setCardsSet(tempCards);
        break;
      case "river":
        tempCards[4] = !tempCards[4];
        setCardsSet(tempCards);
        break;
      default:
        console.error("shouldnt have been able to get here");
        break;
    }
    if (tempCards.slice(0, 3).every(Boolean) && !context.state.allowTurn) {
      context.allowTurn(true);
    }
    if (tempCards.slice(0, 4).every(Boolean)) {
      context.allowRiver(true);
    }
  };

  return (
    <div className="Table">
      <SuitPopper suitHandler={suitHandler} idAddition="table" />
      <NumberPopper numHandler={numHandler} idAddition="table" />
      <Card
        styleGroup="tableCards"
        group="tableCard"
        id="flop1"
        suit={context.state.cardStore.flop1.suit}
        face={context.state.cardStore.flop1.face}
        clickHandler={tableClickHandler}
      />
      <Card
        styleGroup="tableCards"
        group="tableCard"
        id="flop2"
        suit={context.state.cardStore.flop2.suit}
        face={context.state.cardStore.flop2.face}
        clickHandler={tableClickHandler}
      />
      <Card
        styleGroup="tableCards"
        group="tableCard"
        id="flop3"
        suit={context.state.cardStore.flop3.suit}
        face={context.state.cardStore.flop3.face}
        clickHandler={tableClickHandler}
      />
      <Card
        styleGroup="tableCards"
        group="tableCard"
        id="turn"
        suit={context.state.cardStore.turn.suit}
        face={context.state.cardStore.turn.face}
        clickHandler={tableClickHandler}
      />
      <Card
        styleGroup="tableCards"
        group="tableCard"
        id="river"
        suit={context.state.cardStore.river.suit}
        face={context.state.cardStore.river.face}
        clickHandler={tableClickHandler}
      />
    </div>
  );
};

export default PokerTable;
