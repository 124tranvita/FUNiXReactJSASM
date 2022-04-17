import React from "react";
import { Chart } from 'react-google-charts';
import { DEPARTMENTS } from '../shared/staffs'

/*
const dataArry = DEPARTMENTS.map((dept) => {
  return [dept.name, dept.numberOfStaff]
})



export const data = [
  ["Phòng ban", "Nhân viên"],
].concat(dataArry);


export const options = {
  chartArea: { width: '80%', height: '75%' },
  legend: { position: "top" },
  backgroundColor: "#f8f9fa",
  title: "Thống kê nhân viên",
  colors: ['#212529'],
};
*/
export function StaffBarChart() {

  const dataArry = DEPARTMENTS.map((dept) => {
    return [dept.name, dept.numberOfStaff]
  })


  const data = [
    ["Phòng ban", "Nhân viên"],
  ].concat(dataArry);

  const options = {
    chartArea: { width: '80%', height: '75%' },
    legend: { position: "top" },
    backgroundColor: "#f8f9fa",
    title: "Thống kê nhân viên",
    colors: ['#212529'],
  };

  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}