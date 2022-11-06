import React from "react";
import ChatTopBar from "./ChatTopBar";
import Input from "./Input";
import Message from "./Message";

const UserChat = () => {
  return (
    <div className="grow flex flex-col h-screen">
      <ChatTopBar />

      <section className="px-3 message-section grow overflow-auto">
        <Message isMine={true} content="Helloo" sender="you" />
        <Message isMine={true} content="hai" sender="you" />
        <Message isMine={false} content="morning" sender="him" />
      </section>
      <Input />
    </div>
  );
};

export default UserChat;
