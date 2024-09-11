import React from "react";
import "./premium.css";

const Premium = () => {
  return (
    <div className="premium">
      <p>Premium</p>
      <div className="premium_texts">
        <div style={{padding: "20px"}}>
          <p>Increased chance</p>
          <div style={{display: 'flex', flexDirection:'column', marginTop: "10px"}}>
            <span className="line">Orange - 15 tokens (50%)</span>
            <span className="line">Blue - 25 tokens (30%)</span>
            <span className="line">Red - 50 tokens (20%)</span>
          </div>
        </div>
        <div>
          <p>10% on referrals</p>
        </div>
        <div>
          <p>Timeout games 30 minutes</p>
        </div>
        <div>
          <p>
            <span>Unique</span> nickname color
          </p>
        </div>
      </div>
    </div>
  );
};

export default Premium;
