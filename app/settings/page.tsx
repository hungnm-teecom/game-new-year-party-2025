import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TEECOM New Year Celebration Games 2025",
  description: "Welcome to the TEECOM New Year Celebration Games!",
};

import Layout from "@/components/Layout";
import Settings from "@/components/Settings";

const page = () => {
  return (
    <Layout>
      <div className="w-screen h-screen">
        <Settings />
      </div>
    </Layout>
  );
};

export default page;
