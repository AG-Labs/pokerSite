import React, { useState, useContext } from "react";
import Popper from "popper.js";
import SuitPopper from "./suit-popper.jsx";
import NumberPopper from "./number-popper";
import Card from "./card";
import { CardContext } from "../cardStore.js";

import "../Styles/table.css";

const PokerTable = props => {
  const context = useContext(CardContext);
  let [selectedCard, setSelectedCard] = useState("");

  const tableClickHandler = event => {
    console.log(event.target.id);
    if (event.target.id !== selectedCard) {
      let numPopperRef = document.querySelector("#numPopuptable");
      numPopperRef.style.display = "none";
    }
    setSelectedCard(event.target.id);

    let ref = document.querySelector("#" + event.target.id);
    let popperRef = document.querySelector("#popuptable");
    popperRef.style.display = "block";

    let popper = new Popper(ref, popperRef, {
      placement: "bottom"
    });
  };

  const suitHandler = (event, suit) => {
    context.setSuit(selectedCard, suit);

    let suitPopperRef = document.querySelector("#" + event.target.id);
    let numPopperRef = document.querySelector("#numPopuptable");
    numPopperRef.style.display = "flex";

    let popper = new Popper(suitPopperRef, numPopperRef, {
      placement: "bottom"
    });
  };

  const numHandler = event => {
    console.log("number handler table");
    let temp = event.target.id;
    context.setValue(selectedCard, temp);

    let popperRef = document.querySelector("#popuptable");
    let numPopperRef = document.querySelector("#numPopuptable");

    popperRef.style.display = "none";
    numPopperRef.style.display = "none";
  };

  return (
    <div className="Table">
      <SuitPopper suitHandler={suitHandler} idAddition="table" />
      <NumberPopper numHandler={numHandler} idAddition="table" />
      <Card
        alterCardStore={props.alterCardStore}
        styleGroup="tableCards"
        group="tableCard"
        id="flop1"
        suit={context.state.cardStore.flop1.suit}
        value={context.state.cardStore.flop1.value}
        clickHandler={tableClickHandler}
        fullSize={true}
      />
      <Card
        alterCardStore={props.alterCardStore}
        styleGroup="tableCards"
        group="tableCard"
        id="flop2"
        suit={context.state.cardStore.flop2.suit}
        value={context.state.cardStore.flop2.value}
        clickHandler={tableClickHandler}
        fullSize={true}
      />
      <Card
        alterCardStore={props.alterCardStore}
        styleGroup="tableCards"
        group="tableCard"
        id="flop3"
        suit={context.state.cardStore.flop3.suit}
        value={context.state.cardStore.flop3.value}
        clickHandler={tableClickHandler}
        fullSize={true}
      />
      <Card
        alterCardStore={props.alterCardStore}
        styleGroup="tableCards"
        group="tableCard"
        id="turn"
        suit={context.state.cardStore.turn.suit}
        value={context.state.cardStore.turn.value}
        clickHandler={tableClickHandler}
        fullSize={true}
      />
      <Card
        alterCardStore={props.alterCardStore}
        styleGroup="tableCards"
        group="tableCard"
        id="river"
        suit={context.state.cardStore.river.suit}
        value={context.state.cardStore.river.value}
        clickHandler={tableClickHandler}
        fullSize={true}
      />
    </div>
  );
};

export default PokerTable;
