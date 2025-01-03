"use client";
import React, { useState, useEffect, useMemo } from "react";
import { redirect } from "next/navigation";

const Settings = () => {
  const [maximumPlayers, updateMaximumPlayers] = useState<number | "">("");

  const validMaximumPlayers = useMemo(() => {
    return maximumPlayers !== "" && maximumPlayers > 0;
  }, [maximumPlayers]);

  const onUpdate = () => {
    if (!validMaximumPlayers) {
      return;
    }

    const listPlayer = JSON.stringify(
      [...Array(maximumPlayers).keys()].map((i) => i + 1)
    );

    if (localStorage) {
      localStorage.setItem("cardGameWinner", JSON.stringify([]));
      localStorage.setItem("spinningWheelWinner", JSON.stringify([]));
      localStorage.setItem("maximumPlayers", listPlayer);
    }

    redirect("/");
  };

  useEffect(() => {
    return () => {
      updateMaximumPlayers("");
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold text-center">
            Maximum number of players
          </h2>

          <div className="my-4">
            <input
              type="text"
              name="maximumPlayers"
              placeholder="Input here..."
              className="input input-bordered w-full"
              autoComplete="off"
              value={`${maximumPlayers}`}
              onChange={(e) => {
                if (isNaN(+e.target.value)) {
                  return;
                }

                updateMaximumPlayers(+e.target.value);
              }}
            />
          </div>

          <div className="card-actions justify-center">
            <button
              className="btn btn-primary"
              disabled={!validMaximumPlayers}
              onClick={onUpdate}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
