import { createClient } from "@/prismicio";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = async ({ children }) => {
  const client = createClient();
  const header = await client.getSingle("header");
  const footer = await client.getSingle("footer");

  return (
    <>
      <Header header={header} />
      {children}
      <Footer footer={footer} />
    </>
  );
};

export default Layout;
