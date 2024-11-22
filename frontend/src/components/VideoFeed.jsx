import React, { useState, useEffect } from 'react';

const VideoFeed = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch('/videos');
      const data = await response.json();
      setVideos(data);
    };

    fetchVideos();
  }, []);

  return (
    <div>
      {videos.map((video, index) => (
        <video key={index} src={video.url} controls width="400" />
      ))}
    </div>
  );
};

export default VideoFeed;
