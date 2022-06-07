import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import dateFormat from 'dateformat';
import HomeBreadcrumb from '../../components/HomeBreadcrumb';
import { UpdateStaff, Delete } from '../../components/Modal';
import { getOverTime } from '../../utils/data';
import Loader from '../../components/Loader';
import { deleteStaff } from '../../features/Staffs/staffsSlice';

function StaffDetail() {
  let navigate = useNavigate();
  // Declare useParams() variable to take the params from URL
  let params = useParams();
  let staffId = parseInt(params.staffId, 10);

  // Get Staff list in redux store
  const staffList = useSelector((state) => state.staff.get.staffs);

  // Return if staffList is empty
  if (!staffList[0]) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (staffList.length !== 0) {
    const staff = staffList.filter((staff) => staff.id === staffId)[0];

    if (!staff) {
      navigate('/staffs');
      return;
    }

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

        <div className="container my-3">
          <div className="row">
            <div className="col-12 col-sm-3 mb-3">
              <Card id="staffDetailCard">
                <Card.Img variant="top" src={staff.image} />
                <Card.Body>
                  <Card.Title>{staff.name}</Card.Title>
                  <Card.Text className="text-muted">{staff.department.name}</Card.Text>
                  <div className="row">
                    <div className="col-12 col-xl-6 mb-3">
                      <UpdateStaff staff={staff} />
                    </div>
                    <div className="col-12 col-xl-6 mb-3">
                      <Delete
                        action={() => deleteStaff(staff.id)}
                        disabled={false}
                        component={'staff'}
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-sm-9 mb-3">
              <Card id="staffInfoCard">
                <Card.Body>
                  <div className="row">
                    <div className="col-sm-6 col-xl-4">
                      <strong>Họ và tên</strong>
                    </div>
                    <div className="col-sm-6 col-xl-8">{staff.name}</div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-xl-4">
                      <strong>Ngày sinh</strong>
                    </div>
                    <div className="col-sm-6 col-xl-8">
                      {dateFormat(staff.doB, 'dd/mm/yyyy')}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-xl-4">
                      <strong>Ngày vào công ty</strong>
                    </div>
                    <div className="col-sm-6 col-xl-8">
                      {dateFormat(staff.startDate, 'dd/mm/yyyy')}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-xl-4">
                      <strong>Phòng ban</strong>
                    </div>
                    <div className="col-sm-6 col-xl-8">
                      <Link
                        to={`/departments/${staff.department.id}`}
                        className="text-decoration-none"
                      >
                        <strong>{staff.department.name}</strong>
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-xl-4">
                      <strong>Số ngày nghỉ còn lại</strong>
                    </div>
                    <div className="col-sm-6 col-xl-8">{staff.annualLeave} ngày</div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-xl-4">
                      <strong>Số ngày đã làm thêm</strong>
                    </div>
                    <div className="col-sm-6 col-xl-8">{getOverTime(staff.overTime)}</div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StaffDetail;
