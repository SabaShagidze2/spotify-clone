import React, { useContext } from "react";
import Sidebarcomp from "./components/Sidebarcomp";
import Playercomp from "./components/Playercomp";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebarcomp />
        <Display />
      </div>
      <Playercomp />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
