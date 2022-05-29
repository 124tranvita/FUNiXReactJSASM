import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import HomeBreadcrumb from '../../components/HomeBreadcrumb';
import StaffDetailCard from '../../components/Card/components/StaffDetailCard';

function StaffDetail() {
  // Declare useParams() variable to take the params from URL
  let params = useParams();
  let staffId = parseInt(params.staffId, 10);

  // Get Staff list in redux store
  const staffList = useSelector((state) => state.staffs);

  // Filter the staff with Id
  const [staff] = staffList.filter((staff) => staff.id === staffId);

  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-6">
          <HomeBreadcrumb
            links={[
              {
                to: '/staffs',
                name: 'Nhân viên',
              },
            ]}
            active={staff.name}
          />
        </div>
      </div>
      <div className="row">
        <StaffDetailCard staff={staff} />
      </div>
    </>
  );
}

export default StaffDetail;
