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
      wordToGuess: action.payload,
      guesses: []
    }
  case MAKE_GUESS:
    return {
      ...state,
      guesses: state.guesses.concat(action.payload)
    }
  default:
    return {
      ...state
    }
  }
}

export default reducer
