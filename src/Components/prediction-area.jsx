import React, { Component } from "react";
import Prediction from "./prediction.jsx";
import "../Styles/prediction-area.css";

class PredictionArea extends Component {
  constructor(props) {
    super(props);
  }

  //logic goes here

  render() {
    return (
      <>
        <p className="predictionTitle">Prediction Area</p>
        <div>
          <Prediction />
          <Prediction />
          <Prediction />
          <Prediction />
          <Prediction />
          <Prediction />
          <Prediction />
        </div>
      </>
    );
  }
}

export default PredictionArea;