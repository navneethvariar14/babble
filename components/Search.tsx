import Link from "next/link";
import React, { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";
import UserTile from "./UserTile";
import { useAuth } from "../context/AuthContext";

const Search = () => {
  const { user } = useAuth();
  const [userName, setUserName] = useState("");
  const [selectedUser, setUser] = useState<any>(null);
  const [err, setErr] = useState(false);

  const handleSearch = async (e: any) => {
    e.preventDefault();
    const q = query(collection(db, "users"), where("name", "==", userName));
    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.docs[0]) {
        setErr(false);
        setUser(querySnapshot.docs[0].data());
      } else {
        setUser(null);
        setErr(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = async (e: any) => {
    const combinedID =
      selectedUser.uid > user.uid
        ? selectedUser.uid + user.uid
        : user.uid + selectedUser.uid;
    const q = query(collection(db, "chats"), where("name", "==", userName));
    const res = await getDoc(doc(db, "chats", combinedID));
    if (!res.exists()) {
      await setDoc(doc(db, "chats", combinedID), { messages: [] });
      await updateDoc(doc(db, "userChats", selectedUser.uid), {
        [combinedID + ".userinfo"]: {
          name: user.displayName,
          combinedID: combinedID,
          uid: user.uid,
        },
        [combinedID + ".date"]: serverTimestamp(),
      });
      await updateDoc(doc(db, "userChats", user.uid), {
        [combinedID + ".userinfo"]: {
          name: selectedUser.name,
          combinedID: combinedID,
          uid: selectedUser.uid,
        },
        [combinedID + ".date"]: serverTimestamp(),
      }).then(() => {
        setUser(null);
        setUserName("");
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex flex-row">
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="Search for user"
          className="w-full mx-2 py-2 px-2 border-black-200 rounded-lg focus:border-grey-200"
        />
        <button className="mx-3" type="submit">
          <BsSearch size={23} />
        </button>
      </form>
      {err && (
        <section className="bg-red-500 text-white w-full my-2 p-3 text-center">
          No user found!
        </section>
      )}
      {selectedUser && (
        <div className="found-users" onClick={handleSelect}>
          <UserTile
            user={selectedUser}
            uid={selectedUser.uid}
            userName={selectedUser.name}
            userProfile="https://i.imgflip.com/2ft03l.jpg"
            lastMessage=""
          />
        </div>
      )}
      <hr className="border-1 border-black" />
    </div>
  );
};

export default Search;
