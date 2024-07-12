import React from 'react';

interface Props {
  // define your props here
}

const FilterColor: React.FC<Props> = () => {
  return (
    <div className="filter-color">
      <div className="filter-title">MÀU SẮC</div>
      <div className="color-options">
        <div className="color-option red"></div>
        <div className="color-option navy"></div>
        <div className="color-option gray"></div>
        <div className="color-option black"></div>
      </div>
    </div>
  );
};

export default FilterColor;
