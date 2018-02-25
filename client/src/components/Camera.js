import React from 'react';
import Time from './Time.js';
import Temperature from './Temperature.js';

const stream = '/camera';

function Video() {

  return (

    <div className="col-sm-6">
      <div className="image-overlay">
        <div className="image-overlay-data">
          <div className="overlay-data-right">
            <ul className="list-group list-group-flush">
              <Time />
              <Temperature />
            </ul>
          </div>
          <img alt="Camera feed" src={stream} />
        </div>
      </div>
    </div>

  )
}

export default Video;
