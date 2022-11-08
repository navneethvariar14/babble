import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../config/firebase";
import { AuthContextProvider } from "../context/AuthContext";
import Layout from "../components/Layout";
import { ChatContextProvider } from "../context/ChatContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ChatContextProvider>
        <Layout title={Component.title}>
          <Component {...pageProps} />
        </Layout>
      </ChatContextProvider>
    </AuthContextProvider>
  );
}
