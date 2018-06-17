// src/components/MakeGuessInput.js
import * as React from 'react'
import { connect } from 'react-redux'
import { makeGuess } from '../actions/game'

class MakeGuessInput extends React.PureComponent {

  handleSubmit(event) {
    event.preventDefault()
    const guess = this.refs.guess.value
    this.props.makeGuess(guess)
    document.getElementById("guessForm").reset()
  }

  render() {
    return (
      <div className="guess">
        <form id="guessForm" onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Enter a letter: <br />
            <input type="text" ref="guess" />
          </label>
          <input type="submit" value="Guess" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ wordToGuess, guesses }) => ({ wordToGuess, guesses })
const mapDispatchToProps = { makeGuess }

export default connect(mapStateToProps, mapDispatchToProps)(MakeGuessInput)








//
