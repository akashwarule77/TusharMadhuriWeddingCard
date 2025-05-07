import React, { useEffect, useRef, useState } from "react";

const ScrollPlayVideo = () => {
  const videoRef = useRef(null);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    // Handle manual pause
    const handlePause = () => {
      if (!videoRef.current) return;
      // If the video is paused AND it’s visible, it means user paused it manually
      if (videoRef.current.currentTime > 0 && !videoRef.current.paused && !videoRef.current.ended) {
        return; // ignore non-user pauses
      }
      setIsManuallyPaused(true);
    };

    const handlePlay = () => {
      setIsManuallyPaused(false);
    };

    video.addEventListener("pause", handlePause);
    video.addEventListener("play", handlePlay);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!isManuallyPaused) {
            video.play();
          }
        } else {
          video.pause();
          // Reset manual pause when user scrolls out
          setIsManuallyPaused(false);
        }
      },
      { threshold: 0.5 }
    );

    if (video) observer.observe(video);

    return () => {
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("play", handlePlay);
      if (video) observer.unobserve(video);
    };
  }, [isManuallyPaused]);

  return (
    <video
      className="wedding-video"
      ref={videoRef}
      src="/videos/w3.mp4"
      controls
      playsInline
      preload="metadata"
      style={{ width: "100%", maxWidth: "800px" }}
    />
  );
};

export default ScrollPlayVideo;
