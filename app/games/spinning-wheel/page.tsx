import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TEECOM New Year Celebration Games 2025",
  description: "Welcome to the TEECOM New Year Celebration Games!",
};

import Layout from "@/components/Layout";
import SpinningWheelGame from "@/components/SpinningWheelGame";

const page = () => {
  return (
    <Layout>
      <div className="w-full h-full">
        <SpinningWheelGame />
      </div>
    </Layout>
  );
};

export default page;
