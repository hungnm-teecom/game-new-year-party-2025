"use client";

import React, { FC, useEffect } from "react";
import Link from "next/link";
import { Cog } from "lucide-react";

import "./index.css";

import AuthProvider from "@/context/PlayersContext";

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  useEffect(() => {
    // Press F to fullscreen
    document.addEventListener("keydown", (e) => {
      if (e.key === "f") {
        document.documentElement.requestFullscreen();
      }
    });

    // Press ESC to exit fullscreen
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.exitFullscreen();
      }
    });

    return () => {
      document.removeEventListener("keydown", (e) => {
        if (e.key === "f") {
          document.documentElement.requestFullscreen();
        }
      });

      document.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          document.exitFullscreen();
        }
      });
    };
  }, []);
  return (
    <AuthProvider>
      <div className="fixed bottom-0 right-0 m-1">
        <div className="dropdown dropdown-hover dropdown-top dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            <Cog />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <Link href="/" className="mx-1">
                Teecom
              </Link>
            </li>
            <li>
              <Link href="/settings" className="mx-1">
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-full">
        <main
          className="w-screen h-screen bg-cover bg-center overflow-auto"
          style={{
            backgroundImage: "url('/background-2.png')",
            backgroundRepeat: "no-repeat",
          }}
        >
          {children}
        </main>
      </div>
    </AuthProvider>
  );
};

export default Layout;
