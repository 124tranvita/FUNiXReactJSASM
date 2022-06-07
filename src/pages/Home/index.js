import { useSelector } from 'react-redux';
import HomeCard from '../../components/Card/components/HomeCard';
import { StaffBarChart, DeptsBudgetPieChart } from '../../utils/charts';

import { notifyShow } from '../../features/Notification/notificationSlice';

function Home() {
  const { staffList, deptList } = useSelector((state) => ({
    staffList: state.staff.get.staffs,
    deptList: state.department.get.departments,
  }));

  const cards = [
    { name: 'Nhân viên', variant: 'Primary', list: staffList },
    { name: 'Phòng ban', variant: 'Success', list: deptList },
    { name: 'Tổng chi', variant: 'Danger', list: staffList },
  ];
  return (
    <>
      <div className="row">
        {cards.map((card) => (
          <div className="col-12 col-sm-4">
            <HomeCard name={card.name} variant={card.variant} list={card.list} />
          </div>
        ))}
      </div>
      <div className="row mt-5">
        <div className="col-12 col-sm-6">
          <StaffBarChart />
        </div>
        <div className="col-12 col-sm-6">
          <DeptsBudgetPieChart />
        </div>
      </div>
    </>
  );
}

export default Home;
