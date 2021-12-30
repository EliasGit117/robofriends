import './App.css';
import React, { Component } from 'react';
import CardList from '../components/card-list/card-list';
import Scroll from '../components/scroll/scroll';
import SearchBox from '../components/search-box/search-box';

class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    };
  }

  onSearchChange(event) {
    this.setState({ searchfield: event.target.value });
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  render() {
    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter(r =>
      r.name.toLowerCase().includes(searchfield.toLowerCase()));

    return (
      robots.length === 0 ?
        <h3 className='tc white'>Loading</h3>
        :
        <div className="tc">
          <h1>Robofriends</h1>
          <SearchBox onChange={this.onSearchChange.bind(this)} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
    );
  }
}

export default App;
