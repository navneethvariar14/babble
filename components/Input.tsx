import React from "react";

import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { BiSend } from "react-icons/bi";

function Input() {
  return (
    <section className="h-16 p-4 w-full right-0 input-field flex flex-row align-middle align-middle bottom-0 bg-green-100 sticky px-3">
      <BsEmojiHeartEyesFill size={23} className="my-auto mx-2" />
      <input
        type="text"
        className="bg-white border text-gray-900 justify-between text-sm rounded-lg focus:ring-blue-500 grow p-2.5 mx-5"
        placeholder="Enter message to send"
      />
      <button className="bg-green-500 w-20 h-10 text-white rounded-lg px-3 py-1 my-auto mx-0">
        <BiSend size={25} className="mx-auto my-0" />
      </button>
    </section>
  );
}

export default Input;
