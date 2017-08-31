import React, { Component } from 'react';
import './App.css';
import { Oppurtunity } from './components/oppurtunities';
import logo from './logo.svg';
import {RaisedButton} from "material-ui";

class App extends Component {


  render() {

      const headerApp = {
          backgroundColor: "#222",
          height: "150px",
          color: "white",
      };
    return (

        <div className="App">
            <div style={headerApp}>
                <img src={logo} className="App-logo" alt="logo" />
                <h2 className="p-b-10">
                    Oppurtunities
                    {true ?
                        <RaisedButton label="Edit" style={{marginLeft:"5px"}} labelColor="white" backgroundColor="black"/>
                        :
                        <RaisedButton label="Save" style={{marginLeft:"5px"}} labelColor="white" backgroundColor="black" />
                    }
                    </h2>
                </div>
            <Oppurtunity isEdit/>
        </div>

    );
  }
}

export default App;
