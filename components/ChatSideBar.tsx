import { setUserId } from "firebase/analytics";
import { signOut } from "firebase/auth";
import { Router, useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { useAuth } from "../context/AuthContext";
import Search from "../components/Search";
import UserTile from "./UserTile";
import { doc, onSnapshot } from "firebase/firestore";
import { ChatContext } from "../context/ChatContext";

export default function ChatSidebar() {
  const [chats, setChats] = useState([]);
  const router = useRouter();
  const { user, setUser } = useAuth();
  const { dispatch } = useContext(ChatContext);
  useEffect(() => {
    onSnapshot(doc(db, "userChats", user.uid), (doc) => {
      setChats(doc.data() as any);
    });
  }, []);

  return (
    <aside className="h-screen sticky top-0 bottom-0">
      <div className="flex overflow-auto bg-green-100 flex-col h-screen p-3 shadow w-80">
        <div className="space-y-3">
          <div className="flex items-center flex-col justify-between mb-6">
            <div className="flex flex-row my-3">
              <img src="/images/bitmap.png" className="w-8 h-8 mx-1"></img>
              <h2 className="text-2xl font-bold">BABBLE</h2>
            </div>
            <div className="flex flex-row bg-emerald-200 p-3 w-full mt-2 justify-between">
              <section className="mx-4 my-auto">
                <p>{user && user.displayName}</p>
              </section>
              <button
                className="bg-red-400 p-2 mx-2 my-auto text-white w-100 h-10 rounded-xl"
                onClick={() => {
                  signOut(auth);
                  setUser(null);
                  dispatch({ type: "USER_REMOVE", payload: null });
                  router.push("/login");
                }}
              >
                Logout
              </button>
            </div>
          </div>
          <Search />
          <div className="flex-1 flex-col">
            {Object.entries(chats).map((chat, key) => {
              return (
                <UserTile
                  key={key}
                  user={chat[1]["userinfo"]}
                  uid={chat[1]["userinfo"]["uid"]}
                  userName={chat[1]["userinfo"]["name"]}
                  lastMessage={chat[1]["lastMessage"]}
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
