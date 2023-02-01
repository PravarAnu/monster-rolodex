import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component.jsx';


function App() {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users#")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users)
      })
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value;
    setSearchField(searchFieldString);
  };


  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search-Monster"
      />
      <CardList
        monsters={filteredMonsters}
      />
    </div>
  )
}
// class App extends Component {
//   /* 
//     Process of running of the class

//     1.constructor
//     2.render
//     3.componentDidMount
//     4.render


//     Here the constructor runs first.Now we know that there is a state named monster
//     then the render function runs which makes the skeleton of the page by using HTML.
//     then the componentDidMount runs which fetch the data from the api and setState of
//     monsters. As the setState process ends the react recognise and render the skeleton 
//     again with updated values of monsters.
//   */
//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   componentDidMount(){
// fetch("https://jsonplaceholder.typicode.com/users#")
//   .then((response) =>response.json())
//   .then((users) =>{
//     this.setState(
//       () =>{
//         return {monsters: users};
//       }
//     )
//   });
//   }

//   onSearchChange = (event)=>{
//     const searchField = event.target.value;
//     this.setState({searchField});
//   };

//   render() {
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

// const filteredMonsters = monsters.filter((monster) =>{
//   return monster.name.toLowerCase().includes(searchField);
// });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox
//           className = "search-box"
//           onChangeHandler={onSearchChange} 
//           placeholder="Search-Monster"
//         />
//         <CardList 
//           monsters={filteredMonsters}
//         />
//       </div>
//     );
//   }
// }

export default App;
