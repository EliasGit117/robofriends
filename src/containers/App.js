import './App.css';
import React, { Component } from 'react';
import CardList from '../components/card-list/card-list';
import Scroll from '../components/scroll/scroll';
import SearchBox from '../components/search-box/search-box';
import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';

const mapToStateProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(r =>
      r.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      isPending ?
        <h3 className='tc white'>Loading</h3>
        :
        <div className="tc">
          <h1>Robofriends</h1>
          <SearchBox onChange={onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
    );
  }
}

export default connect(mapToStateProps, mapDispatchToProps)(App);
