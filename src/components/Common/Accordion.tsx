import "../../assets/styles/Accordian.css";
import { useState } from "react";
function Accordion({ accordionData }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      {accordionData.map((item, index) => (
        <div
          key={index}
          className={`accordion ${activeIndex === index ? "active" : ""}`}
        >
          {item.title}
          <i
            className={
              activeIndex == index ? "fa-solid fa-minus" : "fa-solid fa-plus"
            }
            style={{
              float: "right",
              marginRight: "0.5rem",
            }}
            onClick={() => toggleAccordion(index)}
          ></i>
          <div
            className='panel'
            style={{
              display: activeIndex === index ? "block" : "none",
            }}
          >
            {item.content}
          </div>

          <hr
            style={{
              marginTop: "0.9rem",
              border: "1px solid #E2E2E2"
            }}
          />
        </div>
      ))}
    </>
  );
}
export default Accordion;
