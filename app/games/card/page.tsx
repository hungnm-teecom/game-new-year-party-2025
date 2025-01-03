import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TEECOM New Year Celebration Games 2025",
  description: "Welcome to the TEECOM New Year Celebration Games!",
};

import Layout from "@/components/Layout";
import CardGame from "@/components/CardGame";

const page = () => {
  return (
    <Layout>
      <div className="w-full h-full">
        <CardGame />
      </div>
    </Layout>
  );
};

export default page;
