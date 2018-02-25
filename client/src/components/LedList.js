import React from 'react';
import LedListItem from './LedListItem';

const LedList = (props) => {

  const ledItems = props.leds.map((led) => {
    return <LedListItem key={led._id} led={led} />
  })

  return (
    <ul className="list-group">
      {ledItems}
    </ul>
  )
}

export default LedList;
