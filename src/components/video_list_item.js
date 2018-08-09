import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video; // retrieves Video
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    // this entire <li> is a selector for a video
  <li onClick = { () => onVideoSelect(video)} className="list-group-item">
    <div className="video-list media">
      <div className="media-left">
        <img className="media-object" src={imageUrl} />
      </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
            <div className="media-heading"><i>{video.snippet.description}</i></div>

        </div>
    </div>

  </li>
  );
};

export default VideoListItem;
