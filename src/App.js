import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: "Jay"
        },
        {
          name: "Tay"
        },
        {
          name: "Uljulul"
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster, index) => {
            return <h1>{monster.name}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
