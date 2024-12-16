import React, { useState } from "react";
import "../Accordion/index.css";

function Accordion(props){
  const { title, defaultOpen = false, children } = props;
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const className = `accordion ${isOpen ? "accordion--open" : ""}`;


  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={className}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <div>{title}</div>
        <div>{isOpen ? "-" : "+"}</div>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

export default Accordion;
