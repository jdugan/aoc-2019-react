import React from 'react';
import Item from '../molecules/NavItem'
import store from '../../context/store'

const Nav = (props) => {
  const { onClick, selectedDay } = props
  const days = store.days()

  return (
    <ul className="nav">
      {
        days.map(day => {
          return <Item
                    key={ day }
                    day={ day }
                    selected={ day === selectedDay }
                    onClick={ onClick }/>
        })
      }
    </ul>
  )
}

export default Nav;
