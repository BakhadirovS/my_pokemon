import React from 'react';

function PercentageBar({ color, percent, height }) {
  const parentingStyle = {
    height: height,
    width: '50%',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    marginRight: "-100px"
  };

  const childishStyle = {
    height: '100%',
    width: `${percent}%`,
    backgroundColor: color,
    borderRadius: 40,
  };

  const textStyle = {
    padding: 10,
    color: 'black',
    fontWeight: 900
  };

  return (
    <div style={parentingStyle}>
      <div style={childishStyle}>
        <span style={textStyle} />
      </div>
    </div>
  );
}

export default PercentageBar;
