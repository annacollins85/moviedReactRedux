export const addDiscoverMovies = (movies) => ({
  type: 'ADD_DISCOVER_MOVIES',
  movies
})

export const addCategoryMovies = (movies) => ({
  type: 'ADD_CATEGORY_MOVIES',
  movies
})

export const seenMovie = (id) => ({
  type: 'SEEN_MOVIE',
  id
})

export const addToSearchedList = (arr) => ({
  type: 'ADD_TO_SEARCHED_LIST',
  arr
})
