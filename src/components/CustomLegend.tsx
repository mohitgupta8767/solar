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
    <div className="flex flex-wrap mt-2.5 text-sm">
      {labels.map((label, index) => (
        <div key={index} className="flex items-center mr-5">
          <span
            className="w-4 h-4 inline-block mr-2"
            style={{ backgroundColor: colors[index] }}
          ></span>
          {label}
        </div>
      ))}
    </div>
  );
};

export default CustomLegend;
