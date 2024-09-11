import React from "react";
import "./link-blocks.css";
import { ReactComponent as Scream } from "../../img/speaking-head-svgrepo-com 1.svg";
import { ReactComponent as Speed } from "../../img/Group 20.svg";
import { ReactComponent as DvdBox } from "../../img/box.svg";
import { Link } from "react-router-dom";

const LinkBlocks = () => {
  return (
    <div className="link-blocks">
      <Link to={'/scream'}>
        <Scream />
        <p>Scream</p>
      </Link>
      <Link to={'/speed'}>
        <Speed />
        <p>Speed</p>
      </Link>
      <Link to={'/dvdbox'}>
        <DvdBox />
        <p>DVD BOX</p>
      </Link>
    </div>
  );
};

export default LinkBlocks;
