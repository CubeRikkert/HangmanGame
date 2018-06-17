// src/reducers/reducer.js
import { NEW_GAME, MAKE_GUESS } from '../actions/game'

const initialState = {
  wordToGuess: '',
  guesses: []
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case NEW_GAME:
    return {
      ...state,
      wordToGuess: action.payload
    }
  case MAKE_GUESS:
    return {
      guesses: state.guesses.concat(action.payload)
    }
  default:
    return {
      ...state
    }
  }
}

export default reducer
