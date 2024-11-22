import React from 'react';
import UploadVideo from './components/UploadVideo';
import VideoFeed from './components/VideoFeed';

const App = () => {
  return (
    <div>
      <h1>PenVideo - Rede Social de Vídeos Curtos</h1>
      <UploadVideo />
      <VideoFeed />
    </div>
  );
};

export default App;
