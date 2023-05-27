import "./style.css";
import { useState } from "react";
import { useToggle } from "./Toggle";

const SecondComponent = ({ cendol, handleIncrement, circleColor }) => {
  const [buttonColor, setButtonColor] = useToggle();
  const [circleBg, setCircleBg] = useState(circleColor);

  // Handle Color Functionality
  const handleColor = () => {
    setButtonColor(!buttonColor);
    setCircleBg(!buttonColor ? "#272789" : "#b41e1e");
  };

  return (
    <div className="center container">
      <div className="center square">
        <div className="center container-2" style={{ background: circleColor }}>
          <span
            className="incrementNumber"
            // style={{ fontSize: "3rem", fontWeight: "700" }}
          >
            {cendol}
          </span>
          <span
            className="incrementText"
            onClick={() => handleIncrement(circleBg)}
          >
            Click to increase counter
          </span>
        </div>
      </div>
      <div>
        <button
          className="color__btn"
          style={{ backgroundColor: buttonColor ? "#272789" : "#b41e1e" }}
          onClick={handleColor}
        >
          Change Color
        </button>
      </div>
    </div>
  );
};

export default SecondComponent;
