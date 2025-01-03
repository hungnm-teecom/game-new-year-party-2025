"use client";
import React, { useContext } from "react";

import { PlayersContext } from "@/context/PlayersContext";

const SpinningWheelGame = () => {
  const { players } = useContext(PlayersContext);

  return <div>SpinningWheelGame - {players}</div>;
};

export default SpinningWheelGame;
