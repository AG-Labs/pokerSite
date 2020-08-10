import React, { Component } from "react";
import Card from "./card.jsx";
import "../Styles/prediction-area.css";

class Prediction extends Component {
  predictionOne = { suit: "heart", face: "king" };
  predictionTwo = { suit: "club", face: "queen" };
  predictionThree = { suit: "spade", face: "jack" };
  predictionFour = { suit: "diamond", face: "ten" };
  predictionFive = { suit: "heart", face: "nine" };

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
