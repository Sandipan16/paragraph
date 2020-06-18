import React from "react";
import "../styles.css";

export default props => {
  return (
    <div
      className="note"
      onClick={() => {
        props.onDel(props.id);
      }}
    >
      <p>{props.par}</p>
    </div>
  );
};
