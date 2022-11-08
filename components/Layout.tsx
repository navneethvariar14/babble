import Head from "next/head";
import React, { ReactComponentElement } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="noe">
      <Head>
        <title></title>
      </Head>
      {children}
    </div>
  );
};

export default Layout;
