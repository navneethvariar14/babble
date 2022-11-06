import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="flex flex-row">
      <input
        type="text"
        placeholder="Search for user"
        className="w-full mx-2 py-2 px-2 border-black-200 rounded-lg"
      />
      <button>
        <BsSearch size={23} />
      </button>
    </div>
  );
};

export default Search;
