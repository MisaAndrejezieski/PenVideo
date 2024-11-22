import React, { useState } from 'react';

const UploadVideo = () => {
  const [video, setVideo] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setVideo(URL.createObjectURL(file));
    setVideoFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video', videoFile);

    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Falha no upload do vídeo.');
      }

      const data = await response.json();
      console.log('Upload bem-sucedido', data);
    } catch (error) {
      console.error('Erro no upload:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="video/*" onChange={handleUpload} />
      <button type="submit">Upload</button>
      {video && <video src={video} controls width="400" />}
    </form>
  );
};

export default UploadVideo;
