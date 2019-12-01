import React from 'react';
import Description from './components/organisms/Description'
import Form from './components/organisms/Form'
import Header from './components/organisms/Header'
import Nav from './components/organisms/Nav'
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      day:    "1",
      env:    "test",
      puzzle: "1"
    }
  }

  handleFormSubmit = (payload) => {
    const { env, puzzle } = payload
    this.setState({ env, puzzle })
  }
  handleNavItemClick = (day) => {
    this.setState({ day })
  }

  render () {
    const { day } = this.state

    return (
      <div className="app">
        <section className="app__header">
          <Header />
        </section>
        <section className="app__navigation">
          <Nav selectedDay={ day } onClick={ this.handleNavItemClick } />
        </section>
        <section className="app__description">
          <Description selectedDay={ day } />
        </section>
        <section className="app__form">
          <Form selectedDay={ day } onSubmit={ this.handleFormSubmit } />
        </section>
        <section className="app__result">
          Result
        </section>
      </div>
    );
  }
}

export default App;
