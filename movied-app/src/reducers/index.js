import { combineReducers } from 'redux';

const objectifyArray = (array, idKey = 'id') => {
 return array.reduce((accum, item) => {
   accum[item[idKey]] = item

   return accum;
 }, {})
};

const entitiesDefaultState = {
  entities: {
    movies: {}
  }
}

// add discover movies -> add received movies to the db
const entities = (state = entitiesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DISCOVER_MOVIES':
    case 'ADD_CATEGORY_MOVIES':
      return {
        ...state.entities,
        movies: {
          ...state.entities.movies,
          ...objectifyArray(action.movies)
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
    actionList: []
  },
  moviePage: {}
}

const idPlease = (array) => {
  return array.map(movie => movie.id)
}

// add discover movies -> setting the boxOfficeList
const pages = (state = pagesDefaultState, action) => {
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
    default:
      return state;
  }
  return state;
}

const reducers = combineReducers({
  entities,
  pages
})

export default reducers;
