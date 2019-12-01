import React from 'react';

const Link = (props) => {
  const { onClick, text } = props

  return (
    <a className="link" href="/" onClick={ onClick }>
      { text }
    </a>
  )
}

export default Link;
