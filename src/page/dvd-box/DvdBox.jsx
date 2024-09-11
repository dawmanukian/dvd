import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { ReactComponent as DvdBoxs } from "../../img/box.svg";
import { ReactComponent as Dvd } from "../../img/dvd_.svg";
import "./dvdbox.css";

const DvdBox = () => {
  const [correct, setCorrect] = useState(null);
  const [win, setWin] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  if (win) {
    setTimeout(() => {
      setGameStarted(false)
      setWin(false);
    }, "3000");
  }

  let boxs = [];
  const create = () => {
    for (let x = 1; x <= 6; x++) {
      boxs.push(
        <div className="dvd_box">
          <DvdBoxs
            onClick={() =>
              correct != null && correct === x ? setWin(true) : null
            }
            style={{ width: "91px", height: "104px", zIndex: "999" }}
          />
          <Dvd
            className="ddvd"
            style={win && x === correct ? { left: "92%" } : null}
          />
        </div>
      );
    }
    return boxs;
  };

  return (
    <div className="dvd-game">
      <Header />
      <div className="pnn">
        <div className="game_">{create()}</div>
        <button
          disabled={gameStarted}
          onClick={() => {
            setWin(false);
            setGameStarted(true);
            setCorrect(Math.floor(Math.random() * 6 + 1));
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default DvdBox;
