import React, { useState, useContext } from "react";
import { CardContext } from "../cardStore.js";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import Prediction from "./prediction.jsx";

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
      : `- ${handSelector + 1}/${context.state.calculations.length}`;

  let prediction =
    context.state.calculations.length === 0 ? null : (
      <Prediction predictions={context.state.calculations[handSelector].hand} />
    );

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div>
          <button
            onClick={() => {
              prev();
            }}
          >
            <AiOutlineLeftCircle size="1.5em" />
          </button>
        </div>
        <p className="predictionTitle">Possible Hands {counter}</p>
        <div>
          <button
            onClick={() => {
              next();
            }}
          >
            <AiOutlineRightCircle size="1.5em" />
          </button>
        </div>
      </div>
      <div>{message}</div>
      {prediction}
    </>
  );
};

export default PredictionArea;
