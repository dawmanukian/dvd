import React from "react";
import Balance from "../../components/balance/Balance";
import "./upgrade.css";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as Redu } from "../../img/Frame 147.svg";
import { ReactComponent as Green } from "../../img/Frame 147-1.svg";
import { ReactComponent as Yellow } from "../../img/Frame 147-2.svg";
import { ReactComponent as Orange } from "../../img/Frame 147-3.svg";
import { ReactComponent as Blue } from "../../img/Frame 147-4.svg";
import { ReactComponent as Red } from "../../img/Frame 147-5.svg";
import { ReactComponent as Scream } from "../../img/speaking-head-svgrepo-com 1.svg";
import { ReactComponent as Speed } from "../../img/Group 20.svg";
import { ReactComponent as DvdBox } from "../../img/box.svg";
import { ReactComponent as Pass } from "../../img/pass.svg";

const Upgrade = () => {
  const { type } = useParams();

  function generatePage() {
    switch (type) {
      case "tap":
        return (
          <>
            <div>
              <div>
                <Redu />
                <div>
                  <p>Reducing the timer</p>
                  <span>Game timeout - </span>
                </div>
              </div>
              <button>250</button>
            </div>
            <div>
              <div>
                <Green />
                <div>
                  <p>Green DVD</p>
                  <span>Total income - 5</span>
                </div>
              </div>
              <button>100</button>
            </div>
            <div>
              <div>
                <Yellow />
                <div>
                  <p>Yellow DVD</p>
                  <span>Total income - 20</span>
                </div>
              </div>
              <button>200</button>
            </div>
            <div>
              <div>
                <Orange />
                <div>
                  <p>Orange DVD</p>
                  <span>Total income - 15</span>
                </div>
              </div>
              <button>300</button>
            </div>
            <div>
              <div>
                <Blue />
                <div>
                  <p>Blue DVD</p>
                  <span>Total income - 25</span>
                </div>
              </div>
              <button>500</button>
            </div>
            <div>
              <div>
                <Red />
                <div>
                  <p>Red DVD</p>
                  <span>Total income - 50</span>
                </div>
              </div>
              <button>1000</button>
            </div>
          </>
        );
      case "income":
        return (
          <>
            <div>
              <div>
                <Pass />
                <div>
                  <p>Passive DVD</p>
                  <span>Total income - 100 000</span>
                </div>
              </div>
              <button style={type === "income" ? { background: "#EAA269" } : null}>1000</button>
            </div>
          </>
        );
      case "games":
        return (
          <>
            <div>
              <div>
                <Speed />
                <div>
                  <p>Speed</p>
                  <span>Game timeout - 30</span>
                </div>
              </div>
              <button style={type === "games" ? { background: "#8EE480" } : null}>500</button>
            </div>
            <div>
              <div>
                <Scream />
                <div>
                  <p>Scream</p>
                  <span>Game timeout - 45</span>
                </div>
              </div>
              <button style={type === "games" ? { background: "#8EE480" } : null}>1 000</button>
            </div>
            <div>
              <div>
                <DvdBox />
                <div>
                  <p>DVD BOX</p>
                  <span>Game timeout - 45</span>
                </div>
              </div>
              <button style={type === "games" ? { background: "#8EE480" } : null}>250</button>
            </div>
          </>
        );
    }
  }

  return (
    <div className="upgrade_">
      <Balance />
      <div className="upgrade_link">
        <Link
          to={"/upgrade/tap"}
          style={type === "tap" ? { background: "#63b8ed" } : null}
        >
          Tap up
        </Link>
        <Link
          to={"/upgrade/income"}
          style={type === "income" ? { background: "#EAA269" } : null}
        >
          Income
        </Link>
        <Link
          to={"/upgrade/games"}
          style={type === "games" ? { background: "#8EE480" } : null}
        >
          Mini-games
        </Link>
      </div>
      <div className="up_blocks">{generatePage()}</div>
    </div>
  );
};

export default Upgrade;
