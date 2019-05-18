import React, { Component } from "react";
import Card from "./card.jsx";
import "../Styles/prediction-area.css";

class Prediction extends Component {
  predictionOne = { suit: "heart", value: "king" };
  predictionTwo = { suit: "club", value: "queen" };
  predictionThree = { suit: "spade", value: "jack" };
  predictionFour = { suit: "diamond", value: "ten" };
  predictionFive = { suit: "heart", value: "nine" };

  render() {
    return (
      <>
        <p className="suggestion">qwertyuio</p>
        <div className="predictionCards">
          <div className="predictionCard">
            <Card
              clickHandler={() => {}}
              startingVal={"avalue"}
              fullSize={false}
              initial={this.predictionOne}
            />
          </div>
          <div className="predictionCard">
            <Card
              clickHandler={() => {}}
              startingVal={"avalue"}
              fullSize={false}
              initial={this.predictionTwo}
            />
          </div>
          <div className="predictionCard">
            <Card
              clickHandler={() => {}}
              startingVal={"avalue"}
              fullSize={false}
              initial={this.predictionThree}
            />
          </div>
          <div className="predictionCard">
            <Card
              clickHandler={() => {}}
              startingVal={"avalue"}
              fullSize={false}
              initial={this.predictionFour}
            />
          </div>
          <div className="predictionCard">
            <Card
              clickHandler={() => {}}
              startingVal={"avalue"}
              fullSize={false}
              initial={this.predictionFive}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Prediction;
