import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: "Jay",
          id: "123dswfaf"
        },
        {
          name: "Tay",
          id: "321dasa"
        },
        {
          name: "Uljulul",
          id: "dqa12fca"
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
