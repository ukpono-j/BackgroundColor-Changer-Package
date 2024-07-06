// BackgroundChanger.jsx
import React, { useState } from 'react';

const BackgroundChanger = ({ children, colors }) => {
  const [bgColor, setBgColor] = useState(colors[0] || 'white');

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, padding: '10px', minHeight: "100vh" }} onClick={changeColor}>
      {children}
    </div>
  );
};

export default BackgroundChanger;
