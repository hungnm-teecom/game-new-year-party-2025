import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TEECOM New Year Celebration Games 2025",
  description: "Welcome to the TEECOM New Year Celebration Games!",
};

import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-screen text-center h-screen">
        <h1>
          🎉 Welcome to the{" "}
          <span
            className="text-blue-500"
            style={{
              fontWeight: "bold",
              textShadow: "0 0 10px #fff",
            }}
          >
            TEECOM
          </span>{" "}
          New Year Celebration Games! 🎉
        </h1>
        <div className="buttons">
          <Link href="/games/card">
            <button className="button">Flip Card</button>
          </Link>
          <Link href="/games/spinning-wheel">
            <button className="button">Spinning Wheel</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
