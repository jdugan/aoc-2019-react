import React from 'react';
import Link from '../atoms/Link'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      env:    "test",
      puzzle: "1"
    }
  }

  handleEnvChange = (evt) => {
    const env = evt.target.value
    this.setState({ env })
  }
  handlePuzzleChange = (evt) => {
    const puzzle = evt.target.value
    this.setState({ puzzle })
  }
  handleSubmitLinkClick = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()

    const { onSubmit } = this.props
    onSubmit(this.state)
  }

  render () {
    const { env, puzzle } = this.state

    return (
      <section className="form">
        <div className="form__field">
          <label className="form__label">
            Puzzle
          </label>
          <label className="form__label form__label--radio">
            <input
              className="form__radio"
              type="radio"
              name="puzzle"
              value="1"
              checked={ puzzle === "1" }
              onChange={ this.handlePuzzleChange }
            />
            First
          </label>
          <label className="form__label form__label--radio">
            <input
              className="form__radio"
              type="radio"
              name="puzzle"
              value="2"
              checked={ puzzle === "2" }
              onChange={ this.handlePuzzleChange }
            />
            Second
          </label>
        </div>
        <div className="form__field">
          <label className="form__label">
            Environment
          </label>
          <label className="form__label form__label--radio">
            <input
              className="form__radio"
              type="radio"
              name="env"
              value="test"
              checked={ env === "test" }
              onChange={ this.handleEnvChange }
            />
            Test
          </label>
          <label className="form__label form__label--radio">
            <input
              className="form__radio"
              type="radio"
              name="env"
              value="prod"
              checked={ env === "prod" }
              onChange={ this.handleEnvChange }
            />
            Prod
          </label>
        </div>
        <div className="form__button-bar">
          <Link text="[Submit]" onClick={ this.handleSubmitLinkClick } />
        </div>
      </section>
    )
  }
}

export default Form;
