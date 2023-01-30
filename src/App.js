import { Component } from 'react';
import './App.css';

class App extends Component {
  /* 
    Process of running of the class

    1.constructor
    2.render
    3.componentDidMount
    4.render


    Here the constructor runs first.Now we know that there is a state named monster
    then the render function runs which makes the skeleton of the page by using HTML.
    then the componentDidMount runs which fetch the data from the api and setState of
    monsters. As the setState process ends the react recognise and render the skeleton 
    again with updated values of monsters.
  */
  constructor(){
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users#")
      .then((response) =>response.json())
      .then((users) =>{
        this.setState(
          () =>{
            return {monsters: users};
          }
        )
      });
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
