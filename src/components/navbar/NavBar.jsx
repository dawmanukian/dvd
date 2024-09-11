import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ReactComponent as Quest } from "../../img/Frame 86-1.svg";
import { ReactComponent as Premium } from "../../img/Frame 86-2.svg";
import { ReactComponent as Top } from "../../img/Frame 86-3.svg";
import { ReactComponent as Tap } from "../../img/Frame 86-4.svg";
import { ReactComponent as Upgrade } from "../../img/Frame 86.svg";

import { ReactComponent as Quest1 } from "../../img/wh/Frame 86-3.svg";
import { ReactComponent as Premium1 } from "../../img/wh/Frame 86-2.svg";
import { ReactComponent as Top1 } from "../../img/wh/Frame 86-4.svg";
import { ReactComponent as Tap1 } from "../../img/wh/Frame 86.svg";
import { ReactComponent as Upgrade1 } from "../../img/wh/Frame 86-1.svg";

import { ReactComponent as Gr } from "../../img/Group 12.svg";

const NavBar = () => {
  const location = useLocation();
  return (
    <div className="navbar">
      <Gr className="gr" />
      <Link to={"/"}>
        {location.pathname === '/' ? <Tap1 className="lnk" /> : <Tap className="lnk" />}
        <p style={location.pathname === '/' ? {color: '#fff'} : null}>Tap</p>
      </Link>
      <Link to={"/upgrade/tap"}>
        {location.pathname.includes('/upgrade') ? <Upgrade1 /> : <Upgrade />}
        <p style={location.pathname.includes('/upgrade') ? {color: '#fff'} : null}>Upgrade</p>
      </Link>
      <Link to={"/quest"}>
        {location.pathname === '/quest' ? <Quest1 /> : <Quest />}
        <p style={location.pathname === '/quest' ? {color: '#fff'} : null}>Quest</p>
      </Link>
      <Link to={"/premium"}>
        {location.pathname === '/premium' ? <Premium1 /> : <Premium />}
        <p style={location.pathname === '/premium' ? {color: '#fff'} : null}>Premium</p>
      </Link>
      <Link to={"/top"}>
        {location.pathname === '/top' ? <Top1 /> : <Top />}
        <p style={location.pathname === '/top' ? {color: '#fff'} : null}>Top</p>
      </Link>
    </div>
  );
};

export default NavBar;
