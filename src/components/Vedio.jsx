import React from "react";

const YouTubeVideo = () => {
  const videoUrl =
    "https://www.youtube.com/watch?v=JjdNGtORUjo&pp=ygULaXR3aXphcmQgdHY%3D";

  // Extract the video ID from the URL
  const videoId = videoUrl.split("v=")[1];

  return (
    <div>
      <iframe
        width="700"
        height="400"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
        style={{ borderRadius: "20px" }}
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
