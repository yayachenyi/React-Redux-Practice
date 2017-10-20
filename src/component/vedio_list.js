import React from 'react';
import VideoListItem from './vedio_list_item';
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem onSelectVideo = {props.onSelectVideo} key = {video.etag} video = {video} / >
  });
  return (
    <ul className = "col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
