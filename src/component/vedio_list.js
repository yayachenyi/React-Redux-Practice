import React from 'react';
import VedioListItem from './vedio_list_item';
const VideoList = (props) => {
  return (
    <ul className = "col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
};

export default VideoList;
