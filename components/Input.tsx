import React, { useContext, useState } from "react";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { BiSend } from "react-icons/bi";
import { useAuth } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { v4 as uuid } from "uuid";

function Input() {
  const { user } = useAuth();
  const { data } = useContext(ChatContext);
  const [text, setText] = useState("");

  const handleInput = async () => {
    await updateDoc(doc(db, "chats", data.chatID), {
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId: user.uid,
        date: Timestamp.now(),
      }),
    });
    console.log("from input: ", data);
    await updateDoc(doc(db, "userChats", user.uid), {
      [data.chatID + ".lastMessage"]: text,
      [data.chatID + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatID + ".lastMessage"]: text,
      [data.chatID + ".date"]: serverTimestamp(),
    });

    setText("");
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleInput();
      }}
    >
      <section className="h-16 p-4 w-full right-0 input-field flex flex-row align-middle bottom-0 bg-green-200 sticky px-3 shadow-lg">
        <input
          type="text"
          value={text}
          className="bg-white border text-gray-900 justify-between text-sm rounded-lg focus:ring-blue-500 grow p-2.5 mx-5"
          placeholder="Enter message to send"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-green-500 w-20 h-10 text-white rounded-lg px-3 py-1 my-auto mx-0"
        >
          <BiSend size={25} className="mx-auto my-0" />
        </button>
      </section>
    </form>
  );
}

export default Input;
