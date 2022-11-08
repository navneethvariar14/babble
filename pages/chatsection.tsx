import { Head } from "next/document";
import React, { useContext } from "react";
import ChatSideBar from "../components/ChatSideBar";
import UserChat from "../components/UserChat";
import { useAuth } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import Login from "./login";

ChatSection.title = "Babble";
function ChatSection() {
  const { user } = useAuth();
  const { data } = useContext(ChatContext);
  return (
    <>
      {user ? (
        <div className="flex flex-row">
          <ChatSideBar />
          {data && data.chatID ? <UserChat /> : null}
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default ChatSection;
