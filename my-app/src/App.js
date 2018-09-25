import React, { Component } from 'react';
import './App.css';
import Padre from './components/padre/index'
import Hijo from './components/hijo';

class App extends Component {
  render() {
    let hola = [<Hijo></Hijo>, <Hijo></Hijo>, <Hijo></Hijo>]
    return (
      <div>
        <Padre hijos={3}>
          <Hijo oculto={true}/>
        </Padre>
      </div>
    );
  }
}

export default App;
