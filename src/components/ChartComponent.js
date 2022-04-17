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

export function DeptsBudgetPieChart() {
  const data = [
    ["Department", "VND by month"],
    ["Sale", 11],
    ["HR", 2],
    ["Marketing", 2],
    ["IT", 2],
    ["Finance", 7],
  ];

  const options = {
    title: "Ngân sách Phòng ban",
    backgroundColor: "#f8f9fa",
    colors: ['black', '#212529', '#495057', '#6c757d', 'gray']
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}