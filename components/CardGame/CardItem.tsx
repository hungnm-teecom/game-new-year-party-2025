import React, { FC, useState } from "react";

import "./CardItem.css";

type Props = {
  player: string;
  cardSelected?: string;
  setCardSelected?: (player: string) => void;
};

const CardItem: FC<Props> = ({ player, cardSelected, setCardSelected }) => {
  const [] = useState<string>("");

  return (
    <div
      className={`card-item bg-cover bg-center rounded-lg ${
        cardSelected && cardSelected === player
          ? ""
          : "card-select cursor-pointer"
      }`}
      style={{
        backgroundColor:
          cardSelected && cardSelected === player ? "#f3f4f6" : "",
        backgroundImage:
          cardSelected && cardSelected === player
            ? ""
            : "url(/card-item-2.jpg)",
      }}
      onClick={() => setCardSelected && setCardSelected(player)}
    ></div>
  );
};

export default CardItem;
