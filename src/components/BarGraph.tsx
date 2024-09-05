import React, { useContext, useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import CustomLegend from './CustomLegend';
import { SidebarContext } from './SidebarContext';

export const data = [
  [
    'Date',
    'Wafer',
    'PV Glass',
    'Aluminium Frame',
    'Encapsulants',
    'Silver Paste',
    'Copper',
    'Others',
  ],
  ['Jan-24 PV Infolink', 30, 14, 13, 7, 5, 3, 28],
  ['May-24 PV Infolink', 24, 15, 14, 8, 6, 4, 29],
  ['May-24 Adani Solar', 24, 12, 14, 9, 7, 4, 30],
];

export const options = {
  // title: "Cost Contribution",
  chartArea: { width: '90%' },
  isStacked: true,
  legend: { position: 'none' },
  colors: [
    '#f27177',
    '#ad76b1',
    '#6baddf',
    '#9cd373',
    '#e194bc',
    '#da8868',
    '#939393',
  ],
  vAxis: {
    format: '#\'%\'',
    textStyle: { color: '#333', fontSize: 12 },
    title: 'Cost Contribution %',
    titleTextStyle: { color: '#333', fontSize: 14 },
  },
};

const labels = [
  'Wafer',
  'PV Glass',
  'Aluminium Frame',
  'Encapsulants',
  'Silver Paste',
  'Copper',
  'Others',
];

const BarGraph = () => {
  const [key, setKey] = useState(0);
  const { sidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    setKey(key + 1)
  }, [sidebarOpen])

  return (
    <div className="w-[100%]" style={{ width: "370px", marginLeft: sidebarOpen ? "0" : "40px" }}>
      <Chart
        key={key}
        width={"100%"}
        height="280px"
        data={data}
        options={options}
        chartType="ColumnChart"
      />
      <CustomLegend labels={labels} />
    </div>
  );
};

export default BarGraph;
