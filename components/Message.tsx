import React from "react";

function Message({
  sender,
  content,
  isMine,
}: {
  sender: string;
  content: string;
  isMine: boolean;
}) {
  const messageColor = isMine ? "bg-green-300" : "bg-blue-300";
  return (
    <div className="flex flex-row align-middle">
      {isMine ? null : (
        <img
          className="object-cover h-12 w-12 rounded-full my-auto mx-0"
          src="https://i.imgflip.com/2ft03l.jpg"
        />
      )}
      <div
        className={`min-h-5 p-3 break-words max-w-xl min-w-[5%] m-4 align-middle rounded-xl ${messageColor} ${
          isMine ? "ml-auto" : "mr-auto"
        }`}
      >
        <p>{content}</p>
        <em className="text-xs">Now</em>
      </div>
    </div>
  );
}

export default Message;
