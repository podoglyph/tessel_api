import React from 'react';

const LedListItem = ({led}) => {
  const color = led.color;
  const status = () => {
    if (led.isOn === true) {
      return "ON";
    } else {
      return "OFF";
    }
  }

  console.log(led)
  return (
    <li className="list-group-item">
      <div className="led-list">
        <div className="led-left">
          <div className="led-color">
            {color}
          </div>
        </div>
        <div className="led-right">
          <div className="led-status">
            {status()}
          </div>
        </div>
      </div>
    </li>
  )
}

export default LedListItem;
