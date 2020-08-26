import React from "react";
import Card from "./card.jsx";
import "../Styles/prediction-area.css";

let Prediction = (props) => {
  return (
    <>
      <div className="predictionCards">
        <div className="predictionCard">
          <Card
            clickHandler={() => {}}
            fullSize={false}
            initial={props.predictions[0]}
          />
        </div>
        <div className="predictionCard">
          <Card
            clickHandler={() => {}}
            fullSize={false}
            initial={props.predictions[1]}
          />
        </div>
        <div className="predictionCard">
          <Card
            clickHandler={() => {}}
            fullSize={false}
            initial={props.predictions[2]}
          />
        </div>
        <div className="predictionCard">
          <Card
            clickHandler={() => {}}
            fullSize={false}
            initial={props.predictions[3]}
          />
        </div>
        <div className="predictionCard">
          <Card
            clickHandler={() => {}}
            fullSize={false}
            initial={props.predictions[4]}
          />
        </div>
      </div>
    </>
  );
};

export default Prediction;
