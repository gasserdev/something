import React, { useRef } from "react";

function RectangleBG({ styles = "" }) {
  const style = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "0",
    objectFit: "cover",
    filter: "brightness(60%)",
  };
  const vid = useRef(null);

  React.useEffect(() => {
    vid.current.playbackRate = 0.5;
  }, []);

  return (
    <video
      src="wallpaper.mp4"
      ref={vid}
      autoPlay
      muted
      loop
      style={{ ...style, ...styles }}
    ></video>
  );
}

export default RectangleBG;
