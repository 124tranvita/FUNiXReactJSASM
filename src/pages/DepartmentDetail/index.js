import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import HomeBreadcrumb from '../../components/HomeBreadcrumb';
import { UpdateDept } from '../../components/Form';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

function DepartmentDetail() {
  let params = useParams();
  let deptId = parseInt(params.deptId, 10);

  const deptList = useSelector((state) => state.department.get.departments);
  const staffList = useSelector((state) => state.staff.get.staffs);

  if (deptList.length === 0) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (deptList.length !== 0) {
    const dept = deptList.filter((dept) => dept.id === deptId)[0];
    const deptStaff = staffList.filter((staff) => staff.department.id === deptId);

    return (
      <>
        <div className="row">
          <div className="col-12 col-sm-6">
            <HomeBreadcrumb
              links={[
                {
                  to: '/departments',
                  name: 'Phòng ban',
                },
              ]}
              active={dept.name}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-3">
            <Card id="deptDetailCard">
              <Card.Img variant="top" src="/assets/images/department.svg" />
              <Card.Body>
                <Card.Title>{dept.name}</Card.Title>
                <Card.Text className="text-muted">Số nhân viên: {dept.numberOfStaff}</Card.Text>
                <div className="row">
                  <div className="col-12 col-lg-6 mb-3">
                    <UpdateDept dept={dept} />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <button className="btn btn-danger btn-profile" styles={{ width: '15rem' }}>
                      Xóa
                    </button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sm-9">
            <Card id="deptStaffListCard">
              <Card.Body className="scroll-list">
                {deptStaff.map((staff) => (
                  <div className="row mb-3 pb-2 mx-2 border-bottom" key={staff.id}>
                    <div className="col-2">
                      <Card.Img src={staff.image} width="64" height="64" />
                    </div>
                    <div className="col-10">
                      <Link to={`/staffs/${staff.id}`} className="text-decoration-none">
                        <Card.Title>{staff.name}</Card.Title>
                      </Link>
                      <span className="text-muted">Ngày vào làm: {staff.startDate}</span>
                      <span className="text-muted mx-2">|</span>
                      <span className="text-muted">Hệ số lương: {staff.salaryScale} </span>
                      <span className="text-muted mx-2">|</span>
                      <span className="text-muted">Số giờ đã làm thêm {staff.overTime}</span>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default DepartmentDetail;
