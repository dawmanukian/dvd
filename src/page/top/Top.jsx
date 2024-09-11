import React from "react";
import "./top.css";

const Top = () => {
  return (
    <div className="top">
      <p>The luckiest</p>
      <div className="top_users">
        <div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/640px-Grosser_Panda.JPG"
              alt=""
            />
            <div>
              <p className="us_name">2017</p>
              <span className="us_balance">1 000</span>
            </div>
          </div>
          <p className="nums" style={{right: "123px", top: '-10px'}}>1</p>
        </div>
        <div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/640px-Grosser_Panda.JPG"
              alt=""
            />
            <div>
              <p className="us_name">2017</p>
              <span className="us_balance">1 000</span>
            </div>
          </div>
          <p className="nums" style={{ transform: "rotate(-48.61deg)" }}>
            2
          </p>
        </div>
        <div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/640px-Grosser_Panda.JPG"
              alt=""
            />
            <div>
              <p className="us_name">2017</p>
              <span className="us_balance">1 000</span>
            </div>
          </div>
          <p className="nums" style={{transform: 'rotate(38.79deg)', right: "49px"}}>3</p>
        </div>
      </div>
    </div>
  );
};

export default Top;
