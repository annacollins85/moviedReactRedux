import { combineReducers } from 'redux';

const objectifyArray = (array, idKey = 'id') => {
 return array.reduce((accum, item) => {
   accum[item[idKey]] = item

   return accum;
 }, {})
};

const entitiesDefaultState = {
  movies: {}
}

const entitiesReducer = (state = entitiesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DISCOVER_MOVIES':
    case 'ADD_CATEGORY_MOVIES':
      return {
          ...state,
          movies: {
            ...state.movies,
            ...objectifyArray(action.movies)
          }
        }
    case 'SEEN_MOVIE':
      return {
        ...state,
        movies: {
          ...state.movies,
          [action.id]: {
            ...state.movies[action.id],
            seen: true
          }
        }
      }
    default:
      return state;
  }
  return state;
}

const pagesDefaultState = {
  dashboard: {
    boxOfficeList: [],
    actionList: [],
    searchedList: []
  },
  moviePage: {}
}

const idPlease = (array) => {
  return array.map(movie => movie.id)
}

const pagesReducer = (state = pagesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DISCOVER_MOVIES':
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          boxOfficeList: idPlease(action.movies)
        }
      }
    case 'ADD_CATEGORY_MOVIES':
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          actionList: idPlease(action.movies)
        }
      }
    case 'ADD_TO_SEARCHED_LIST':
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          searchedList: action.arr,
        }
      }
    default:
      return state;
  }
  return state;
}

const reducers = combineReducers({
  entities: entitiesReducer,
  pages: pagesReducer
})

export default reducers;
