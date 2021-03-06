// src/actions/game.js
import { randomWord } from '../lib/game'

export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'

export function newGame() {
  return {
    type: 'NEW_GAME',
    payload: randomWord()
  }
}

export function makeGuess(letter) {
  return {
    type: 'MAKE_GUESS',
    payload: letter
  }
}
