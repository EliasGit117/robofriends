import './App.css';
import React, { useEffect, useState } from 'react';
import CardList from '../components/card-list/card-list';
import Scroll from '../components/scroll/scroll';
import SearchBox from '../components/search-box/search-box';
import { setSearchField, requestRobots } from '../actions';
import { useSelector, useDispatch,} from 'react-redux';

const App = () => {

  const [searchResults, setSearchResults] = useState([]);
  const searchField = useSelector(state => state.searchRobots.searchField)
  const robosUsers = useSelector(state => state.requestRobots.robots)
  const isPending = useSelector(state => state.requestRobots.isPending)
  
  const dispatch = useDispatch();  
  useEffect(() =>  {
    dispatch(requestRobots());
  }, [dispatch])

  useEffect(() => {
    let filteredRobots = robosUsers?.filter(robots => {
      return (
        robots.name.toLowerCase().includes(searchField.toLowerCase())
      );
    });
    setSearchResults(filteredRobots);
  }, [searchField, robosUsers])

  const onSearchChange = (e) => {
    dispatch(setSearchField(e.target.value))
  };

  return (
    isPending ?
      <h3 className='tc white'>Loading</h3>
      :
      <div className="tc">
        <h1>Robofriends</h1>
        <SearchBox onChange={onSearchChange} />
        <Scroll>
          <CardList robots={searchResults} />
        </Scroll>
      </div>
  );
}

export default App;
