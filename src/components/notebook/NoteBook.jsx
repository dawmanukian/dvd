import React from "react";
import "./notebook.css";
import table from "../../img/table.png";
import notebook from "../../img/notebook.png";

const NoteBook = () => {
  return (
    <div className="notebook">
      <img className="note" width="305px" src={notebook} alt="" />
      <img src={table} alt="" />
    </div>
  );
};

export default NoteBook;
