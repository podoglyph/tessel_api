import React from 'react';
import Time from './Time.js';



function Video() {

  return (

    <div className="col-sm-6">
      <div className="image-overlay">
        <div className="image-overlay-data">
          <Time />
          <img alt="Camera feed" src="https://65.128.75.135:43333/camera"/>
        </div>
      </div>
    </div>

  )
}

export default Video;
