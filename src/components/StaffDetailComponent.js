import { Container, Card } from 'react-bootstrap';
import dateFormat from 'dateformat';

function StaffDetail({ selectedStaff }) {
  console.log(selectedStaff);
  return (
    <Container>
      <Card>
        <Card.Header>Họ và tên: {selectedStaff.name}
        </Card.Header>
        <Card.Body>
          <Card.Text>Ngày sinh: {dateFormat(selectedStaff.doB, "dd/mm/yyyy")}</Card.Text>
          <Card.Text>Ngày vào công ty: {dateFormat(selectedStaff.startDate, "dd/mm/yyyy")}</Card.Text>
          <Card.Text>Phòng ban: {selectedStaff.department.name}</Card.Text>
          <Card.Text>Số ngày nghỉ còn lại: {selectedStaff.annualLeave}</Card.Text>
          <Card.Text>Số ngày đã làm thêm: {selectedStaff.overTime}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default StaffDetail