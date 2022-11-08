import React, { useContext } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../config/firebase";
import { ChatContext } from "../context/ChatContext";

const UserTile = ({
  user,
  uid,
  userProfile,
  userName,
  lastMessage,
}: {
  user: Object;
  uid: string;
  userProfile: string;
  userName: string;
  lastMessage: string;
}) => {
  const { dispatch } = useContext(ChatContext);
  const handleSelect = () => {
    console.log("user", user);
    dispatch({ type: "USER_CHANGE", payload: user });
  };
  return (
    <div
      className="px-0 py-2 flex flex-row my-3 justify-start hover:bg-green-200 cursor-pointer"
      onClick={handleSelect}
    >
      <img
        className="object-cover h-12 w-12 rounded-full my-auto mx-3"
        src={userProfile}
      />
      <section className="flex flex-col">
        <h3 className="font-bold">{userName}</h3>
        <em>{lastMessage}</em>
      </section>
      <hr />
    </div>
  );
};

export default UserTile;
