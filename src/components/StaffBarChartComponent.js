import React from "react";
import { Chart } from 'react-google-charts';
import { DEPARTMENTS } from '../shared/staffs'

const dataArry = DEPARTMENTS.map((dept) => {
  return [dept.name, dept.numberOfStaff]
})



export const data = [
  ["Phòng ban", "Nhân viên"],
].concat(dataArry);


export const options = {
  chart: {
    title: "Phòng ban",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
  chartArea: { width: '80%', height: '75%' },
  legend: { position: "top" },
  backgroundColor: "#f8f9fa",
};

export function StaffBarChart() {
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