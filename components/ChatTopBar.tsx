import React, { useContext } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { ChatContext, ChatContextType } from "../context/ChatContext";

function ChatTopBar() {
  const { data } = useContext<ChatContextType>(ChatContext);
  return (
    <div className="top-0 sticky h-20 bg-green-200 w-full flex flex-row justify-between shadow-md">
      <section className="mx-4 my-auto flex flex-row">
        <BsPersonCircle size={40} className="mr-2" />
        <b className="mx-0 my-auto">{data && data.user.name}</b>
      </section>
    </div>
  );
}

export default ChatTopBar;
