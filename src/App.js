import { Component } from 'react';

import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
    // console.log('1 Constucted');
  }

  componentDidMount() {
    // console.log('3 Mounted');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
          return { monsters: users, filteredMonsters: users };
        })
      );
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }

  render() {
    // console.log('2 Rendered');
    console.log('render from AppJS');

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          className='monsters-search-box'
          onChange={onSearchChange}
          placeholder='search monsters'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
