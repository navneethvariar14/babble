import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { auth, db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { stringify } from "querystring";
import { Head } from "next/document";

function SignUp() {
  const router = useRouter();
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [err, setErr] = useState(false);
  const handleSignup = async (e: any) => {
    e.preventDefault();
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", userData.user.uid), {
        name,
        email: userData.user.email,
        uid: userData.user.uid,
      }).then(() => {
        console.log("User added to db");
        router.push("/");
      });
      await setDoc(doc(db, "userChats", userData.user.uid), {});
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div>
      <Head>
        <title>Sign Up to Babble</title>
      </Head>
      <div className="bg-gray-200 min-h-screen flex flex-col">
        <div className="container rounded-lg max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h2 className="text-center text-[35px] mb-8">
              <b className="">Babble</b>
            </h2>
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            {err ? (
              <section className="bg-red-500 text-white w-full my-2 p-3 text-center">
                Something' not right! Please check the values that you've
                entered!
              </section>
            ) : null}
            <form onSubmit={handleSignup}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Full Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password"
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-300 text-black hover:bg-green-400"
              >
                Create Account
              </button>
            </form>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <button
              className="no-underline border-b border-blue text-blue"
              onClick={() => {
                router.push("/login");
              }}
            >
              Log in
            </button>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
