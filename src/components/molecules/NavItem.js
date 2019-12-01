import React from 'react';
import Star from '../atoms/Star'
import store from '../../context/store'

class NavItem extends React.Component {
  handleClick = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()

    const { onClick } = this.props
    const el = evt.target.closest("a")
    const day = el.dataset.day

    onClick(day)
  }

  render () {
    const { day, selected } = this.props

    const className = selected ? "nav-item nav-item--active" : "nav-item"
    const starCount = store.starCountForDay(day)
    const levelMap  = {
      0: ["0", "0"],
      1: ["2", "0"],
      2: ["2", "2"]
    }
    const levels = levelMap[starCount]

    return (
      <a className={ className } href={ day } data-day={ day } onClick={ this.handleClick }>
        <span className="nav-item__label">Day { day }</span>
        <div className="nav-item__status">
          <Star level={ levels[0] } />
          <Star level={ levels[1] } />
        </div>
      </a>
    )
  }
}

export default NavItem;
