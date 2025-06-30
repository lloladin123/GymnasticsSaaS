import React from "react";

const RGVideo: React.FC = () => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="object-cover w-full h-full"
    >
      <source
        src="/videos/rgf_hovedfilm.mp4"
        type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default RGVideo;
