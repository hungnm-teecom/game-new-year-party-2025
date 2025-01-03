"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import { PlayersContext } from "@/context/PlayersContext";

import CardItem from "./CardItem";
const Modal = dynamic(() => import("@/components/common/Modal"));
const FireworksOne = dynamic(() => import("@/components/common/FireworksOne"));
const FireworksTwo = dynamic(() => import("@/components/common/FireworksTwo"));

const CardGame = () => {
  const {
    players,
    cardGameWinner,
    updateCardGameWinner,
    updateMaximumPlayers,
  } = useContext(PlayersContext);
  const [cardSelected, setCardSelected] = useState<string>("");
  const [showWinner, setShowWinner] = useState<boolean>(false);

  if (!players || players.length === 0) {
    return (
      <div className="w-full text-xl h-full flex items-center justify-center">
        <div className="backdrop-blur-sm bg-white/30 p-4 rounded-lg">
          There are no players, please{" "}
          <Link href="/settings" className="text-amber-500 font-bold mx-2">
            add
          </Link>{" "}
          some players.
        </div>
      </div>
    );
  }

  const mixedPlayers = (): string[] => {
    const uniquePlayers: string[] = players.filter(
      (player) => !cardGameWinner.includes(player)
    );

    for (let i = uniquePlayers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [uniquePlayers[i], uniquePlayers[j]] = [
        uniquePlayers[j],
        uniquePlayers[i],
      ];
    }
    return uniquePlayers;
  };

  const onSelected = (player: string) => {
    setCardSelected(player);
    setTimeout(() => {
      setShowWinner(true);
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      // Disabled scroll
      document.body.style.overflow = "hidden";
    }, 5000);
  };

  const swapPlayers = () => {
    const newPlayers = [...players];
    for (let i = newPlayers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newPlayers[i], newPlayers[j]] = [newPlayers[j], newPlayers[i]];
    }
    updateMaximumPlayers(newPlayers);
  };

  const onClose = () => {
    // Enabled scroll
    document.body.style.overflow = "auto";
    setShowWinner(false);
    setCardSelected("");
    updateCardGameWinner([...cardGameWinner, cardSelected]);
    swapPlayers();
  };

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4 p-8">
        {[...mixedPlayers()].map((player: string) => (
          <CardItem
            key={player}
            player={player}
            cardSelected={cardSelected}
            setCardSelected={onSelected}
          />
        ))}
      </div>

      {[...mixedPlayers()].length <= 0 && (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="backdrop-blur-sm bg-white/30 p-4 rounded-lg">
            <div className="text-3xl text-center">
              There are no more players to play
            </div>
            <div className="text-center mt-4">
              <button
                onClick={() => {
                  setCardSelected("");
                  updateCardGameWinner([]);
                  setShowWinner(false);
                }}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
              >
                Play again
              </button>
            </div>
          </div>
        </div>
      )}

      <Modal show={!!cardSelected} disabledClose={showWinner} onClose={onClose}>
        <div className="flex items-center justify-center w-full h-full">
          {showWinner ? (
            <div className="w-[40%] p-2 animated-border select-none item-flip h-full bg-white rounded-xl flex items-center justify-center">
              <div
                className="w-full h-full bg-animated flex items-center justify-center"
                style={{
                  fontSize: +cardSelected >= 10 ? "20vw" : "25vw",
                  color: "#167DDD",
                  textShadow: "0 0 10px #fff",
                }}
              >
                <span className="zoom-text">{cardSelected}</span>
              </div>
            </div>
          ) : (
            <div className="w-[40%] p-2 animated-border h-full bg-white bg-cover bg-center rounded-xl flex items-center justify-center">
              <div
                className="w-full h-full bg-white bg-cover bg-center rounded-xl flex items-center justify-center"
                style={{
                  backgroundImage: "url(/card-item-2.jpg)",
                }}
              ></div>
            </div>
          )}
        </div>
      </Modal>

      {showWinner && <FireworksOne />}
      <FireworksTwo show={showWinner} />
    </div>
  );
};

export default CardGame;
