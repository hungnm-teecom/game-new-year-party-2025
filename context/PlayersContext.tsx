"use client";

import React, { FC, useState, useEffect, createContext } from "react";

interface PlayersContextType {
  players: string[];
  cardGameWinner: string[];
  spinningWheelWinner: string[];
  updateMaximumPlayers: (players: string[]) => void;
  updateCardGameWinner: (cardGameWinner: string[]) => void;
  updateSpinningWheelWinner: (spinningWheelWinner: string[]) => void;
}

export const PlayersContext = createContext<PlayersContextType>({
  players: [],
  cardGameWinner: [],
  spinningWheelWinner: [],
  updateMaximumPlayers: () => {},
  updateCardGameWinner: () => {},
  updateSpinningWheelWinner: () => {},
});

type Props = {
  children: React.ReactNode;
};

const PlayersProvider: FC<Props> = ({ children }) => {
  const [players, setPlayers] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("maximumPlayers") || "[]");
    }
    return [];
  });

  const [cardGameWinner, setCardGameWinner] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("cardGameWinner") || "[]");
    }
    return [];
  });

  const [spinningWheelWinner, setSpinningWheelWinner] = useState<string[]>(
    () => {
      if (typeof window !== "undefined") {
        return JSON.parse(localStorage.getItem("spinningWheelWinner") || "[]");
      }
      return [];
    }
  );

  const updateMaximumPlayers = (players: string[]) => {
    setPlayers(players);
  };

  const updateCardGameWinner = (winners: string[]) => {
    setCardGameWinner(winners);
  };

  const updateSpinningWheelWinner = (winners: string[]) => {
    setSpinningWheelWinner(winners);
  };

  useEffect(() => {
    if (localStorage) {
      localStorage.setItem("maximumPlayers", JSON.stringify(players));
      localStorage.setItem("cardGameWinner", JSON.stringify(cardGameWinner));
      localStorage.setItem(
        "spinningWheelWinner",
        JSON.stringify(spinningWheelWinner)
      );
    }
  }, [players, cardGameWinner, spinningWheelWinner]);

  return (
    <PlayersContext.Provider
      value={{
        players,
        cardGameWinner,
        spinningWheelWinner,
        updateMaximumPlayers,
        updateCardGameWinner,
        updateSpinningWheelWinner,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

export default PlayersProvider;
