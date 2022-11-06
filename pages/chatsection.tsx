import { Head } from "next/document";
import React from "react";
import ChatSideBar from "../components/ChatSideBar";
import UserChat from "../components/UserChat";
import { useAuth } from "../context/AuthContext";

function ChatSection() {
  const { logout } = useAuth();
  return (
    <div className="flex flex-row">
      <Head>
        <title>Babble</title>
      </Head>
      <ChatSideBar />
      <UserChat />
    </div>
  );
}

export default ChatSection;
