import React, { useContext } from "react";
import { ChatContext, ChatContextType } from "../context/ChatContext";

function ChatTopBar() {
  const { data } = useContext<ChatContextType>(ChatContext);
  return (
    <div className="top-0 sticky h-20 bg-blue-300 w-full flex flex-row justify-between">
      {data.user.name}
    </div>
  );
}

export default ChatTopBar;
