import React from "react";
import Header from "./Header";
import Search from "./Search";
import Recommended from "./Recommended";
import Others from "./Others";

export default function Home() {
  return (
    <>
      <Header name="Julia" />
      <Search />
      <Recommended />
      <Others />
    </>
  );
}
