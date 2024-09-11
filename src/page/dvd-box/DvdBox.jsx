import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { ReactComponent as DvdBoxs } from "../../img/box.svg";
import "./dvdbox.css";

const DvdBox = () => {
  const [correct, setCorrect] = useState(null);

  let boxs = [];
  const create = () => {
    for (let x = 1; x <= 6; x++) {
      boxs.push(
        <DvdBoxs
          onClick={() => (correct != null && correct === x) ? alert(`win ! ${correct}`) : null}
          style={{ width: "91px", height: "104px" }}
        />
      );
    }
    return boxs;
  };

  return (
    <div className="dvd-game">
      <Header />
      <div className="pnn">
        <div className="game_">{create()}</div>
        <button onClick={() => setCorrect(Math.floor((Math.random() * 6) + 1))}>Start</button>
      </div>
    </div>
  );
};

export default DvdBox;
