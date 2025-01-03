import React, { useRef } from "react";
import { Fireworks } from "@fireworks-js/react";
import type { FireworksHandlers } from "@fireworks-js/react";

const FireworksComponent = () => {
  const ref = useRef<FireworksHandlers>(null);

  return (
    <>
      <Fireworks
        ref={ref}
        options={{ opacity: 0.5 }}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
          background: "#000",
        }}
      />
    </>
  );
};

export default FireworksComponent;
