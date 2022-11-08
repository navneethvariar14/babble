import { userAgent } from "next/server";
import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { useAuth } from "../context/AuthContext";
import { Timestamp } from "firebase/firestore";
import { isContext } from "vm";

function Message({
  content,
}: {
  content: { text: string; senderId: string; date: Timestamp };
}) {
  const { user } = useAuth();
  const { data } = useContext(ChatContext);

  const isMine = content.senderId === user.uid;

  const messageColor = isMine ? "bg-green-300" : "bg-blue-300";
  return (
    <div className="flex flex-row align-middle">
      {isMine ? null : (
        <img
          className="object-cover h-12 w-12 rounded-full my-auto mx-0"
          src="/images/avatar.jpg"
        />
      )}
      <div
        className={`min-h-5 p-3 break-words shadow-md max-w-xl min-w-[5%] m-4 align-middle rounded-xl ${messageColor} ${
          isMine ? "ml-auto" : "mr-auto"
        }`}
      >
        <p>{content.text}</p>
        <em className="text-xs">
          {new Date(content.date.toDate()).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </em>
      </div>
    </div>
  );
}

export default Message;
