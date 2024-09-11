import React from "react";
import "./header.css";
import UserName from "../username/UserName";
import Income from "../income/Income";

const Header = () => {
  return (
    <header>
      <UserName />
      <Income />
    </header>
  );
};

export default Header;
