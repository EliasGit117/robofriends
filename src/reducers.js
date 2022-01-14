import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

const initialStateSearch = {
  searchField: ''
};

const initialStateRobots = {
  robots: [],
  isPending: false,
  error: ''
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
}; 

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true, error: '' };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, isPending: false, robots: action.payload, error: '' };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, isPending: false, robots: [], error: action.payload };
    default:
      return state;
  }
}