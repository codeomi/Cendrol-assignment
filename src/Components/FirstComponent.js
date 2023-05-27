import { useState } from 'react';
import SecondComponent from './SecondComponent';

const FirstComponent = () => {
  const [cendol, setCendol] = useState(2);
  const [circleColor, setCircleColor] = useState('#b41e1e');

  // Handle Increment Functionality
  const handleIncrement = (circleBg) => {
    setCendol(cendol + 10);
    setCircleColor(circleBg);
  };

  return (
    <>
      <SecondComponent
        cendol={cendol}
        handleIncrement={handleIncrement}
        circleColor={circleColor}
      />
    </>
  );
};

export default FirstComponent;
