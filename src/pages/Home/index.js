import { useSelector } from 'react-redux';
import HomeCard from '../../components/Card/components/HomeCard';
import { StaffLineChart, DeptsBudgetLineChart, DeptsBudgetPieChart } from '../../utils/charts';

function Home() {
  const { staffList, deptList } = useSelector((state) => ({
    staffList: state.staff.get.staffs,
    deptList: state.department.get.departments,
  }));

  const cards = [
    {
      name: 'Nhân viên',
      description: 'Quản lý thông tin nhân viên.',
      list: staffList,
      path: '/staffs',
    },
    {
      name: 'Phòng ban',
      description: 'Quản lý thông tin phòng ban.',
      list: deptList,
      path: '/departments',
    },
    {
      name: 'Tổng chi',
      description: 'Quan lý thông tin chi tiêu.',
      list: staffList,
      path: '/salaries',
    },
  ];
  return (
    <>
      <div className="row">
        {cards.map((card) => (
          <div className="col-12 col-sm-4" key={card.name}>
            <HomeCard
              name={card.name}
              description={card.description}
              list={card.list}
              path={card.path}
            />
          </div>
        ))}
      </div>
      <div className="row mt-5">
        <div className="col-12 col-sm-6">
          <div className="chart-card">
            <StaffLineChart depts={deptList} />
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <div className="chart-card">
            <DeptsBudgetLineChart depts={deptList} />
          </div>
        </div>
        <div className="col-12">
          <div className="chart-card">
            <DeptsBudgetPieChart depts={deptList} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
