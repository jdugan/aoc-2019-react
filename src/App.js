import React        from "react";
import Description  from "./components/organisms/Description"
import Form         from "./components/organisms/Form"
import Header       from "./components/organisms/Header"
import Nav          from "./components/organisms/Nav"
import Result       from "./components/organisms/Result"
import "./App.css";

class App extends React.Component {
  constructor (props) {
    super(props)

    const today = new Date()
    const year  = today.getFullYear()
    const month = today.getMonth() + 1
    let   day   = today.getDate()

    if (year !== 2019 || month !== 12 || day > 25) {
      day = 1
    }

    this.state = {
      day:  "20", // day.toString(),
      env:  "test",
      part: "1"
    }
  }

  // event handlers
  handleFormSubmit = (payload) => {
    const { env, part } = payload
    this.setState({ env, part })
  }
  handleNavItemClick = (day) => {
    this.setState({ day })
  }

  // markup
  render () {
    const { day, env, part } = this.state

    return (
      <div className="app">
        <section className="app__header">
          <Header />
        </section>
        <section className="app__navigation">
          <Nav day={ day } onClick={ this.handleNavItemClick } />
        </section>
        <section className="app__description">
          <Description day={ day } />
        </section>
        <section className="app__form">
          <Form onSubmit={ this.handleFormSubmit } />
        </section>
        <section className="app__result">
          <Result day={ day } env={ env } part={ part } />
        </section>
      </div>
    );
  }
}

export default App;
