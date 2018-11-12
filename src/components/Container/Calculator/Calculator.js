import React, { Component } from "react";

import "./Calculator.css";
import Display from "../../Presentational/Display";
import Operators from "../../Presentational/Operators";
import Numbers from "../../Presentational/Numbers";

class Calculator extends Component {
  state = {
    operand1: "",
    operand2: "",
    mode: 1,
    operator: "",
    display: 0
  };

  resetCalculator = () => {
    this.setState({
      operand1: "",
      operand2: "",
      mode: 1,
      operator: "",
      display: 0
    });
  };

  handleNumberClicks = e => {
    if (this.state.mode === 1) {
      this.setState({
        operand1: this.state.operand1 + e.target.innerHTML,
        display: this.state.operand1 + e.target.innerHTML
      });
    } else {
      this.setState({
        operand2: this.state.operand2 + e.target.innerHTML,
        display: this.state.operand2 + e.target.innerHTML
      });
    }
  };

  handleEqualsClick = () => {
    this.evaluate();
    this.setState({
      mode: 1,
      operand1
    });
  };

  evaluate = e => {
    this.setState({
      display: eval(
        this.state.operand1 + this.state.operator + this.state.operand2
      ),
      mode: 2,
      operand1: eval(
        this.state.operand1 + this.state.operator + this.state.operand2
      ),
      operand2: "",
      operator: e ? e.target.innerHTML : ""
    });
  };
}
