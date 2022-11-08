import { doc, DocumentData, onSnapshot, Timestamp } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../config/firebase";
import { ChatContext, ChatContextType } from "../context/ChatContext";
import ChatTopBar from "./ChatTopBar";
import Input from "./Input";
import Message from "./Message";

const UserChat = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext<ChatContextType>(ChatContext);

  useEffect(() => {
    onSnapshot(doc(db, "chats", data.chatID), (doc: DocumentData) => {
      doc.exists() && setMessages(doc.data().messages);
    });
  }, [data]);
  return (
    <div className="grow flex flex-col h-screen">
      <ChatTopBar />
      <section className="px-3 message-section grow flex flex-col-reverse overflow-auto">
        {messages.map(
          (message: {
            id: string;
            text: string;
            senderId: string;
            time: Timestamp;
          }) => {
            return <Message content={message} key={message.id} />;
          }
        )}
      </section>
      {data.chatID ? <Input /> : null}
    </div>
  );
};

export default UserChat;
