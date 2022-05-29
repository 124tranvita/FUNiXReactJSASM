import { Link } from 'react-router-dom';
import { Card, Table } from 'react-bootstrap';
import dateFormat from 'dateformat';

function StaffDetailCard({ staff }) {
  return (
    <Card className="m-5 p-0">
      <Card.Header className="bg-dark text-white">
        <strong>Thông tin nhân viên</strong>
      </Card.Header>
      <Card.Body>
        <div className="row">
          <div className="col-12 col-sm-4 col-xl-3">
            <Card.Img src={staff.image} style={{ width: '100%' }} />
          </div>
          <div className="col-12 col-sm-8 col-xl-9">
            <Table>
              <tbody>
                <tr>
                  <td>Họ và tên:</td>
                  <th>{staff.name}</th>
                </tr>
                <tr>
                  <td>Ngày sinh:</td>
                  <th>{dateFormat(staff.doB, 'dd/mm/yyyy')}</th>
                </tr>
                <tr>
                  <td>Ngày vào công ty:</td>
                  <th>{dateFormat(staff.startDate, 'dd/mm/yyyy')}</th>
                </tr>
                <tr>
                  <td>Phòng ban:</td>
                  <th>
                    <Link to="/departments">{staff.department.name || staff.department}</Link>
                  </th>
                </tr>
                <tr>
                  <td>Số ngày nghỉ còn lại:</td>
                  <th>{staff.annualLeave} ngày</th>
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
  );
}

export default StaffDetailCard;
