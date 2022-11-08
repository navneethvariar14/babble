import Head from "next/head";
import Login from "./login";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import ChatSection from "./chatsection";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();
  if (user) {
    router.push("/chatsection");
  } else {
    router.push("/login");
  }
}
