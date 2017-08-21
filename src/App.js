import React, { Component } from 'react';
import './App.css';
import 'aframe';
import { Entity, Scene } from 'aframe-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Scene>

          <Entity primitive="a-sky" color="black" />

          <Entity id="camera"
                  primitive="a-camera" />

          <Entity id="box" 
                  primitive="a-box" 
                  material={{color: 'red'}} 
                  position="0 2 -5" 
                  rotation="0 45 45" 
                  scale="2 2 2" />

        </Scene>
      </div>
    );
  }
}

export default App;
