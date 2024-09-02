import React from 'react';

interface CustomLegendProps {
  labels: string[];
}

const colors = [
    '#f27177',
    '#ad76b1', 
    '#6baddf', 
    '#9cd373', 
    '#e194bc',
    '#da8868',
    '#939393', 
  ];

const CustomLegend: React.FC<CustomLegendProps> = ({ labels }) => {
  return (
    <div className="custom-legend">
      {labels.map((label, index) => (
        <div key={index} className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: colors[index] }}
          ></span>
          {label}
        </div>
      ))}
    </div>
  );
};

export default CustomLegend;
