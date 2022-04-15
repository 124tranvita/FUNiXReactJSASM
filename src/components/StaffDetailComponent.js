import { useParams, Link } from 'react-router-dom';
import { Container, Card, Table, Breadcrumb } from 'react-bootstrap';
import dateFormat from 'dateformat';

/**
 * Sử dụng useParams để đọc giá trị từ URL (https://reactrouter.com/docs/en/v6/getting-started/tutorial#reading-url-params)
 */

function StaffDetail({ getStaff }) {

  let params = useParams();
  let staffId = parseInt(params.staffId, 10);
  // Filter trả về 1 mảng -> dùng Destructuring để lấy giá trị trong mảng (thông tin staff)
  const [staff] = getStaff(staffId);

  return (
    <div className="mt-3 mb-5">
      <Container style={{ height: "100%" }}>
        {/* Breadcrumb */}
        <div className="col-12 col-sm-6">
          <Breadcrumb className=" border-bottom border-dark mb-1">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Trang chủ</Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/staffs" }}>Nhân viên</Breadcrumb.Item>
            <Breadcrumb.Item active>{staff.name}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {/* Breadcrumb */}

        <Card className='m-5'>
          <Card.Header className="bg-dark text-white"><strong>Thông tin nhân viên</strong>
          </Card.Header>
          <Card.Body>
            <div className='row'>
              <div className='col-12 col-sm-4 col-xl-3'>
                <Card.Img src={staff.image} style={{ width: '100%' }} />
              </div>
              <div className='col-12 col-sm-8 col-xl-9'>
                <Table>
                  <tbody>
                    <tr>
                      <td>Họ và tên:</td>
                      <th>{staff.name}</th>
                    </tr>
                    <tr>
                      <td>Ngày sinh:</td>
                      <th>{dateFormat(staff.doB, "dd/mm/yyyy")}</th>
                    </tr>
                    <tr>
                      <td>Ngày vào công ty:</td>
                      <th>{dateFormat(staff.startDate, "dd/mm/yyyy")}</th>
                    </tr>
                    <tr>
                      <td>Phòng ban:</td>
                      <th><Link to="/departments">{staff.department.name}</Link></th>
                    </tr>
                    <tr>
                      <td>Số ngày nghỉ còn lại:</td>
                      <th>{staff.annualLeave}</th>
                    </tr>
                    <tr>
                      <td>Số ngày đã làm thêm:</td>
                      <th>{staff.overTime}</th>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default StaffDetail