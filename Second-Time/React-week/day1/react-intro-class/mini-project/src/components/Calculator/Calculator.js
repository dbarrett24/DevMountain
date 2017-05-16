import React, { Component } from 'react';
import calculatorImg from '../../../../calculator.png';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      header: 'Calculator',
      display: '0',
      operator: '',
      temp: 0,
      resetDisplay: false,
    }
  }

  updateHeader(val) {
    this.setState({ header: val });
  }

  setDisplay(num) {
    var display;
    if(this.state.display === '0'){
        display = num;
    } else{
        display = this.state.display + num;
    }
    this.setState({ display: (this.state.display.length < 13) ? display : this.state.display });
  }

  setOperator(operator){
    if(!this.state.operator){
        this.setState({
            operator: operator,
            display: '0',
            temp: parseInt(this.state.display, 10)
        })
    } 
  }

  calculate(){
    
  }

  clearDisplay(){
    this.setState({
        display: '0',
        operator: '',
        temp: 0,
        resetDisplay: false,
    })
  }
  render() {
    return (
      <div id="calculator-container">
        <input id="header-input" onChange={ (e) => { this.updateHeader(e.target.value); }}/>
        <h1 id="header"> {this.state.header} </h1>
        <img className="remove-highlight" src={calculatorImg} alt="calculator" />
        <div id="calculator-mask" className="remove-highlight">

          <div className="output">
            <span className="total"> { this.state.display } </span>
          </div>

          <div className="btn clear" onClick={()=>{ this.clearDisplay(); }}></div>

          <div className="btn zero"   onClick={ () => { this.setDisplay('0'); } }></div>
          <div className="btn one"    onClick={ () => { this.setDisplay('1'); } }></div>
          <div className="btn two"    onClick={ () => { this.setDisplay('2'); } }></div>
          <div className="btn three"  onClick={ () => { this.setDisplay('3'); } }></div>
          <div className="btn four"   onClick={ () => { this.setDisplay('4'); } }></div>
          <div className="btn five"   onClick={ () => { this.setDisplay('5'); } }></div>
          <div className="btn six"    onClick={ () => { this.setDisplay('6'); } }></div>
          <div className="btn seven"  onClick={ () => { this.setDisplay('7'); } }></div>
          <div className="btn eight"  onClick={ () => { this.setDisplay('8'); } }></div>
          <div className="btn nine"   onClick={ () => { this.setDisplay('9'); } }></div>

          <div className="btn equal" onClick={()=>{this.setOperator('=')}}></div>
          <div className="btn multiply" onClick={()=>{this.setOperator('*')}}></div>
          <div className="btn divide" onClick={()=>{this.setOperator('/')}}></div>
          <div className="btn subtract" onClick={()=>{this.setOperator('-')}}></div>
          <div className="btn add" onClick={()=>{this.setOperator('+')}}></div>
        </div>
      </div>
    )
  }
}

export default Calculator;