import { doc, DocumentData, onSnapshot, Timestamp } from "firebase/firestore";
import React, { useContext, useEffect, useRef, useState } from "react";
import { db } from "../config/firebase";
import { ChatContext, ChatContextType } from "../context/ChatContext";
import ChatTopBar from "./ChatTopBar";
import Input from "./Input";
import Message from "./Message";

const UserChat = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext<ChatContextType>(ChatContext);
  const chatWindow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("from userchat", data);
    const unsubscribe = onSnapshot(doc(db, "chats", data.chatID), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => unsubscribe();
  }, [data]);

  useEffect(() => {
    if (chatWindow.current) {
      chatWindow.current.scrollTop = chatWindow.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="grow flex flex-col h-screen">
      <ChatTopBar />
      <section
        ref={chatWindow}
        className="px-3 message-section grow flex flex-col-reverse overflow-auto"
      >
        {messages &&
          messages
            .sort((x, y) => {
              return y["date"] - x["date"];
            })
            .map(
              (message: {
                id: string;
                text: string;
                senderId: string;
                date: Timestamp;
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
