import { setUserId } from "firebase/analytics";
import { signOut } from "firebase/auth";
import { Router, useRouter } from "next/router";
import React from "react";
import { auth } from "../config/firebase";
import { useAuth } from "../context/AuthContext";
import Search from "./Search";
import UserTile from "./UserTile";

export default function ChatSidebar() {
  const router = useRouter();
  const { setUser } = useAuth();
  return (
    <aside className="h-screen sticky top-0 bottom-0">
      <div className="flex overflow-auto bg-green-100 flex-col h-screen p-3 bg-white shadow w-80">
        <div className="space-y-3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">BABBLE</h2>
            <button
              className="bg-red-400 p-2 mx-2 my-auto text-white w-100 h-10 rounded-xl"
              onClick={() => {
                signOut(auth);
                setUser(null);
                router.push("/");
              }}
            >
              Logout
            </button>
          </div>
          {/* <Search /> */}
          <div className="flex-1 flex-col">
            {[1, 2, 3, 1, 2, 3, 4, 5, 6].map(() => {
              return (
                <UserTile
                  userName="Zara Abraham"
                  lastMessage="How're u?"
                  userProfile="https://i.imgflip.com/2ft03l.jpg"
                />
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
