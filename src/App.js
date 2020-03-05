import React, { Component, useState } from "react";
import "./App.css";

import Output from "./Output";
import Numpad from "./Numpad";

class App extends Component() {
  state = {
    result: ""
  };

  buttonPressed = buttonName => {
    this.setState({
      result: buttonName
    });
  };

  render() {
    return (
      <div className="App">
        <Output result={this.state.result} />
        <Numpad buttonPressed={this.buttonPressed} />
      </div>
    );
  }
}

export default App;
