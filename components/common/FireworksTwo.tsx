import React, { FC } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const FireworksTwo: FC<{ show: boolean }> = ({ show }) => {
  const { width, height } = useWindowSize();

  if (!show) return null;

  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={300}
      gravity={0.1}
      run={show}
    />
  );
};

export default FireworksTwo;
