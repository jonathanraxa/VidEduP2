import React, { Component } from 'react';



// CLASS based component - needs to be aware of "state"
const VideoDetail = ({video}) => {
  if(!video){
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = 'https://www.youtube.com/embed/' + videoId;

  return (
    <div className="video-detail col-md-8">


      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>

      <div className="details">
        <div><strong>{video.snippet.title}</strong></div>
        <div><i>{video.snippet.description}</i></div>
      </div>

    </div>
  );
};
export default VideoDetail;
