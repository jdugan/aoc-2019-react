import React from 'react';
import Status from '../molecules/Status'
import store from '../../context/store'

const Header = () => {
  const count = store.starCount()

  return (
    <header className="header">
      <div className="header__label">
        <h2><a href="https://adventofcode.com/2019" target="new">2019 Advent of Code</a></h2>
        <h4>Javascript (React)</h4>
      </div>
      <div className="header__status">
        <Status count={ count } />
      </div>
    </header>
  )
}

export default Header;
