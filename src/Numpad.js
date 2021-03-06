import React, { Component } from "react";

export default class Keypad extends Component() {
  buttonPressed = e => {
    this.props.buttonPressed(e.target.name);
  };

  render() {
    return (
      <div>
        <button name="1" onClick={this.buttonPressed}>
          1
        </button>
        <button name="2">2</button>
        <button name="3">3</button>
        <button name="4">4</button>
        <button name="5">5</button>
        <button name="6">6</button>
        <button name="7">7</button>
        <button name="8">8</button>
        <button name="9">9</button>
        <button name="+">+</button>
        <button name="-">-</button>
        <button name="=">=</button>
      </div>
    );
  }
}
