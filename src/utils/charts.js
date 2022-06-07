import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Chart } from 'react-google-charts';

export function StaffLineChart({ staff, depts }) {
  const [data, setData] = useState([]);

  const dataArry = depts.map((dept) => {
    return [dept.name, dept.numberOfStaff];
  });

  useEffect(() => {
    setData([['Phòng ban', 'Nhân viên']].concat(dataArry));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options = {
    chartArea: { width: '80%', height: '75%' },
    legend: { position: 'top' },
    backgroundColor: '#f8f9ff',
    title: 'Thống kê nhân viên',
    pointSize: 10,
  };

  return (
    <Chart chartType="LineChart" width="100%" height="400px" data={data} options={options} />
  );
}

export function DeptsBudgetLineChart({ staff, depts }) {
  const [data, setData] = useState([]);

  const getRandomBudger = () => {
    return Math.floor(Math.random() * 20);
  };

  const dataArry = depts.map((dept) => {
    return [dept.name, getRandomBudger()];
  });

  useEffect(() => {
    setData([['Phòng ban', 'Ngân sách (triệu VND)']].concat(dataArry));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options = {
    chartArea: { width: '80%', height: '75%' },
    legend: { position: 'top' },
    backgroundColor: '#f8f9ff',
    title: 'Ngân sách phòng ban',
    pointSize: 10,
  };

  return (
    <Chart chartType="LineChart" width="100%" height="400px" data={data} options={options} />
  );
}

export function DeptsBudgetPieChart({ staffs, depts }) {
  const deptList = useSelector((state) => state.department.get.departments);

  // const generateRandomColor = (arrLength) => {
  //   const colors = [];
  //   for (let i = 0; i < arrLength; i++) {
  //     colors.push(Math.random().toString(16).substr(-6));
  //   }
  //   return colors;
  // };

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

  //console.log(data);

  const options = {
    title: 'Ngân sách Phòng ban',
    backgroundColor: '#f8f9ff',
  };

  return (
    <Chart chartType="PieChart" data={data} options={options} width={'100%'} height={'400px'} />
  );
}
