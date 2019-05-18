import React from "react";
import Popper from "popper.js";
import SuitPopper from "./suit-popper.jsx";
import NumberPopper from "./number-popper";
import Card from "./card";

import "../Styles/table.css";

const pokerTable = props => {
  const [selectedCard, setSelectedCard] = React.useState("");
  const [suits, setSuits] = React.useState({
    flop1: "",
    flop2: "",
    flop3: "",
    turn: "",
    river: ""
  });
  const [values, setvaule] = React.useState({
    flop1: "",
    flop2: "",
    flop3: "",
    turn: "",
    river: ""
  });

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
    console.log("suit handler table");

    setSuits(prevState => {
      return { ...prevState, [selectedCard]: suit };
    });

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
    setvaule(prevState => {
      return { ...prevState, [selectedCard]: temp };
    });

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
        styleGroup="tableCards"
        group="tableCard"
        id="flop1"
        suit={suits.flop1}
        value={values.flop1}
        clickHandler={tableClickHandler}
        fullSize={true}
      />
      <Card
        styleGroup="tableCards"
        group="tableCard"
        id="flop2"
        suit={suits.flop2}
        value={values.flop2}
        clickHandler={tableClickHandler}
        fullSize={true}
      />
      <Card
        styleGroup="tableCards"
        group="tableCard"
        id="flop3"
        suit={suits.flop3}
        value={values.flop3}
        clickHandler={tableClickHandler}
        fullSize={true}
      />
      <Card
        styleGroup="tableCards"
        group="tableCard"
        id="turn"
        suit={suits.turn}
        value={values.turn}
        clickHandler={tableClickHandler}
        fullSize={true}
      />
      <Card
        styleGroup="tableCards"
        group="tableCard"
        id="river"
        suit={suits.river}
        value={values.river}
        clickHandler={tableClickHandler}
        fullSize={true}
      />
    </div>
  );
};

export default pokerTable;
