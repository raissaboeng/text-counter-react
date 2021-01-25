import React, {Component} from 'react';
import TextCounter from './components/TextCounter';
import './App.css';
import logo from './assets/logo.svg';

class App extends Component {
  render(){
    return (
      <div className="Container">
        <img className="logo" src={logo} alt="logo"></img>
        <div className="App">
          <TextCounter limit={20} />
        </div>
      </div>
      
    );
  }
  
}

export default App;
