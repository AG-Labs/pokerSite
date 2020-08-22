import React, { useState, useContext } from "react";
import { CardContext } from "../cardStore.js";

import "../Styles/prediction-area.css";

const PredictionArea = (props) => {
  const context = useContext(CardContext);
  let [handSelector, setHandSelector] = useState(0);

  let prev = () => {
    if (handSelector - 1 < 0) {
      setHandSelector(context.state.calculations.length - 1);
    } else {
      setHandSelector(handSelector - 1);
    }
  };
  let next = () => {
    if (handSelector + 1 > context.state.calculations.length - 1) {
      setHandSelector(0);
    } else {
      setHandSelector(handSelector + 1);
    }
  };

  let message =
    context.state.calculations.length === 0
      ? "Waiting for Table Cards"
      : context.state.calculations[handSelector].result;

  let counter =
    context.state.calculations.length === 0
      ? null
      : `${handSelector + 1}/${context.state.calculations.length}`;

  return (
    <>
      <button
        onClick={() => {
          prev();
        }}
      >
        Prev
      </button>
      <p className="predictionTitle">Possible Hands</p>
      <button
        onClick={() => {
          next();
        }}
      >
        Next
      </button>
      <div>{message}</div>
      <div>{counter}</div>
    </>
  );
};

export default PredictionArea;
