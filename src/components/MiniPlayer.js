import React, { useRef, useState } from "react";
import Styles from "../styles/Miniplayer.module.css";
// import images from "../assets/img/3.jpg";
import ReactPlayer from "react-player/youtube";

function MiniPlayer({title, id}) {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  function toggleMiniPlayer() {
    if (!status) {
      buttonRef.current.classList.remove(Styles.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(Styles.floatingBtn);
      setStatus(false);
    }
  }

  return (
    <div
      className={`${Styles.miniPlayer} ${Styles.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <span className={`material-icons-outlined ${Styles.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined ${Styles.close}`}
        onClick={toggleMiniPlayer}
      >
        {" "}
        close{" "}
      </span>
      <ReactPlayer
        className={Styles.player}
        url={videoUrl}
        width="300px"
        height="168px"
        playing={status}
        controls
      />
      <p>{title}</p>
    </div>
  );
}

export default MiniPlayer;
