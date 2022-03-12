import './App.css';
import React, { Component } from 'react';
import FirstComponent from './components/examples/FirstComponent';
import SecondClassComponent from './components/examples/SecondClassComponent';
import ThirdFunctionComponent from './components/examples/ThirdFunctionComonent';
import Counter from './Counter/Counter';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
class LearningComponent extends Component {
  render() {
    return (
      <div className="App">
        Hello World
        <FirstComponent></FirstComponent>
        <SecondClassComponent></SecondClassComponent>
        <ThirdFunctionComponent></ThirdFunctionComponent>

      </div>
    );
  }
}



export default App;
