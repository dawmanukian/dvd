import React from "react";
import UserName from "../../components/username/UserName";
import Header from "../../components/header/Header";
import LinkBlocks from "../../components/link-blocks/LinkBlocks";
import Balance from "../../components/balance/Balance";
import NoteBook from "../../components/notebook/NoteBook";

const Home = () => {
  return (
    <div>
      <Header />
      <LinkBlocks />
      <Balance />
      <NoteBook />
    </div>
  );
};

export default Home;
