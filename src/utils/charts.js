import React from 'react';
import { useSelector } from 'react-redux';
import { Chart } from 'react-google-charts';

export function StaffBarChart() {
  const deptList = useSelector((state) => state.department.get.departments);

  const generateRandomColor = () => {
    const color = Math.random().toString(16).substr(-6);
    return color;
  };

  const dataArry = deptList.map((dept) => {
    return [dept.name, dept.numberOfStaff, generateRandomColor()];
  });

  const data = [['Phòng ban', 'Nhân viên', { role: 'style' }]].concat(dataArry);

  const options = {
    chartArea: { width: '80%', height: '75%' },
    legend: { position: 'top' },
    backgroundColor: '#f1f3fb',
    title: 'Thống kê nhân viên',
  };

  return (
    <Chart chartType="ColumnChart" width="100%" height="400px" data={data} options={options} />
  );
}

export function DeptsBudgetPieChart() {
  const deptList = useSelector((state) => state.department.get.departments);

  const generateRandomColor = (arrLength) => {
    const colors = [];
    for (let i = 0; i < arrLength; i++) {
      colors.push(Math.random().toString(16).substr(-6));
    }
    return colors;
  };

  const dataArry = deptList.map((dept) => {
    return [dept.name, dept.numberOfStaff];
  });

  const data = [['Phòng ban', 'Nhân viên']].concat(dataArry);
  // const data = [
  //   ['Department', 'VND by month'],
  //   ['Sale', 11],
  //   ['HR', 2],
  //   ['Marketing', 2],
  //   ['IT', 2],
  //   ['Finance', 7],
  // ];

  const options = {
    title: 'Ngân sách Phòng ban',
    backgroundColor: '#f1f3fb',
    colors: generateRandomColor(deptList.length),
  };

  return (
    <Chart chartType="PieChart" data={data} options={options} width={'100%'} height={'400px'} />
  );
}
