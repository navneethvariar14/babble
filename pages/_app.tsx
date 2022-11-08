import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../config/firebase";
import { AuthContextProvider } from "../context/AuthContext";
import Layout from "../components/Layout";
import { ChatContextProvider } from "../context/ChatContext";
import { Head } from "next/document";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ChatContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChatContextProvider>
    </AuthContextProvider>
  );
}
