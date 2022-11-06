import React from "react";

const UserTile = ({
  userProfile,
  userName,
  lastMessage,
}: {
  userProfile: string;
  userName: string;
  lastMessage: string;
}) => {
  return (
    <div
      className="px-0 py-2 flex flex-row my-3 justify-start hover:bg-green-200 cursor-pointer"
      onClick={() => {}}
    >
      <img
        className="object-cover h-12 w-12 rounded-full my-auto mx-3"
        src={userProfile}
      />
      <section className="flex flex-col">
        <h3 className="font-bold">{userName}</h3>
        <p>{lastMessage}</p>
      </section>
      <hr />
    </div>
  );
};

export default UserTile;
