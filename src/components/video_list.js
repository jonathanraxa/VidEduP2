// plain functional components
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  // an array of components
  const videoItems = props.videos.map((video) => {
    return (
    <VideoListItem
      onVideoSelect = {props.onVideoSelect}
      key={video.etag}
      video={video} />

  );
  });

  // return the HTML
  return (
    <ul className="list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
