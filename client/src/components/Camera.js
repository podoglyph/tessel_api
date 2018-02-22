import React from 'react';
import Time from './Time.js';

// const stream = '/camera';

function Video() {
  const stream = '';
  
  fetch('/camera').then(function(response) {
    return response.blob();
  }).then(function(camBlob) {
    const objectURL = URL.createObjectURL(camBlob);
    const stream = objectURL;
  });

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
