import React from 'react';
import Link from '../atoms/Link'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      env:  "test",
      part: "1"
    }
  }

  // event handlers
  handleEnvChange = (evt) => {
    const env = evt.target.value
    this.setState({ env })
  }
  handlePuzzlePartChange = (evt) => {
    const part = evt.target.value
    this.setState({ part })
  }
  handleSubmitLinkClick = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()

    const { onSubmit } = this.props
    onSubmit(this.state)
  }

  // markup
  render () {
    const { env, part } = this.state

    return (
      <section className="form">
        <p>
          Use this form to show the corresponding result
          in the content section below.
        </p>
        <div className="form__field">
          <label className="form__label">
            Puzzle Part
          </label>
          <label className="form__label form__label--radio">
            <input
              className="form__radio"
              type="radio"
              name="puzzle"
              value="1"
              checked={ part === "1" }
              onChange={ this.handlePuzzlePartChange }
            />
            One
          </label>
          <label className="form__label form__label--radio">
            <input
              className="form__radio"
              type="radio"
              name="puzzle"
              value="2"
              checked={ part === "2" }
              onChange={ this.handlePuzzlePartChange }
            />
            Two
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
