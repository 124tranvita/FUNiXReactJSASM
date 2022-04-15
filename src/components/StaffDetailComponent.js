import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
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
    <Container>
      <Card className='mb-5'>
        <Card.Header><strong>{staff.name}</strong>
        </Card.Header>
        <Card.Body>
          <div className='row'>
            <div className='col-12 col-sm-6 col-xl-4'>
              <Card.Img src={staff.image} style={{ width: '240px' }} />
            </div>
            <div className='col-12 col-sm-6 col-xl-8'>
              <Card.Text>Họ và tên: {staff.name}</Card.Text>
              <Card.Text>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</Card.Text>
              <Card.Text>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</Card.Text>
              <Card.Text>Phòng ban: {staff.department.name}</Card.Text>
              <Card.Text>Số ngày nghỉ còn lại: {staff.annualLeave}</Card.Text>
              <Card.Text>Số ngày đã làm thêm: {staff.overTime}</Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default StaffDetail