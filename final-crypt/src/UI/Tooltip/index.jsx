import React from "react";
import "../Tooltip/index.css";

function Tooltip(props) {
  const { text = "", position = "top", children } = props;
  const className = `tooltip tooltip--${position}`;
  const [show, setShow] = React.useState(false);

  return (
    <div
      className={className}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
          {children}
      {show && <div className="tooltip-text">{text}</div>}
    
    </div>
  );
}

export default Tooltip;
