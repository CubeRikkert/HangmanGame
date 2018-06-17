// src/containers/HangmanContainer.js
import React, {PureComponent} from 'react'
import { showGuess, wrongGuessCount, wrongGuessLimit, isWinner } from '../lib/game'
import { newGame } from '../actions/game'
import {connect} from 'react-redux'
import MakeGuessInput from '../components/MakeGuessInput'
import PropTypes from 'prop-types'

class HangmanContainer extends PureComponent {

  static propTypes = {
    wordToGuess: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  componentDidMount() {
    this.props.newGame()
  }

  otherWord(event) {
    this.props.newGame()
  }

  render() {
    const currentWord = this.props.wordToGuess
    const currentGuesses = this.props.guesses
    const faultCount = wrongGuessCount(currentWord, currentGuesses)
    const wordSeen = showGuess(currentWord, currentGuesses)
    const limit = wrongGuessLimit(currentWord, currentGuesses)
    const win = isWinner(currentWord, currentGuesses)

    if (currentGuesses.length < 1) return (
      <div>
        <MakeGuessInput newGuess={this.newGuess} /><br />
        <button onClick={this.otherWord.bind(this)}>New Game</button>
      </div>
    )

    if (currentGuesses.length >= 1 && !limit) return (
      <div>
        <div>{ wordSeen }</div><br />
        <div>
          wrong guesses: { faultCount }
        </div><br />
        <MakeGuessInput newGuess={this.newGuess} /><br />
        <button onClick={this.otherWord.bind(this)}>New Game</button>
      </div>
    )

    if (limit) return (
      <div>
        You lose!<br />
        <button onClick={this.otherWord.bind(this)}>Try again!</button>
      </div>
    )

    if (win) return (
      <div>
        You win!!
        <p>{ wordSeen }</p><br />
        <button onClick={this.otherWord.bind(this)}>One more time!</button>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    wordToGuess: store.wordToGuess,
    guesses: store.guesses
  }
}

export default connect(mapStateToProps, { newGame, wrongGuessCount, wrongGuessLimit, isWinner })(HangmanContainer)










//
