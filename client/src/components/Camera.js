import React from 'react';
import Time from './Time.js';

const stream = '/camera';

function Video() {

  return (

    <div className="col-sm-6">
      <div className="image-overlay">
        <div className="image-overlay-data">
          <Time />
          <img alt="Camera feed" src={stream} />
        </div>
      </div>
    </div>

  )
}

export default Video;
