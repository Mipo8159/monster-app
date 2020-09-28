import React from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'


class App extends React.Component{
constructor(){
  super();

  this.state = {
    monsters: [],
    searchField: ''
  }
}

//this command fetches data, translates it into JSON and inserts in monsters.
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(Evil => this.setState({monsters:Evil}))
}

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }


  render(){
    const monsters = this.state.monsters;
    const searchField = this.state.searchField;

    const filteredMonsters = monsters.filter(monster=>
      monster.name.includes(searchField)
      );


    return(
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder ='search monster'
          handleChange = {this.handleChange}
        />
        <CardList monsters = {filteredMonsters}/> 
      </div>
    )
  }
}



export default App;
