import React from "react";
import "./quest.css";

const Quest = () => {
  return (
    <div className="quest">
      <p className="ern_extra">Earn extra coins</p>
      <div>
        <p>Unicorn</p>
        <div className="questions">
          <div>
            <p>Subscribe to YouTube +250</p>
          </div>
          <div>
            <p>Subscribe to Twitter +250</p>
          </div>
          <div>
            <p>Subscribe to TG Channel +250</p>
          </div>
          <div>
            <p>Subscribe to TG Chat +250</p>
          </div>
          <div>
            <p>Connect wallet +500</p>
          </div>
          <div>
            <p>Invite 3 friends +2500</p>
          </div>
        </div>
      </div>
      <p className="daily">Daily reward</p>
      <div className="dayss">
        <div style={{ background: "#050505" }}>
          <span>Day 1</span>
          <p>50</p>
        </div>
        <div>
          <span>Day 2</span>
          <p>75</p>
        </div>
        <div>
          <span>Day 3</span>
          <p>100</p>
        </div>
        <div>
          <span>Day 4</span>
          <p>150</p>
        </div>
        <div>
          <span>Day 5</span>
          <p>200</p>
        </div>
        <div>
          <span>Day 6</span>
          <p>250</p>
        </div>
        <div>
          <span>Day 7</span>
          <p>500</p>
        </div>
      </div>
    </div>
  );
};

export default Quest;
