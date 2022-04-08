import { Container, Card } from 'react-bootstrap';
import dateFormat from 'dateformat';

function StaffDetail({ selectedStaff }) {
  console.log(selectedStaff);
  return (
    <Container>
      <Card className='mb-5'>
        <Card.Header><strong>{selectedStaff.name}</strong>
        </Card.Header>
        <Card.Body>
          <div className='row'>
            <div className='col-12 col-sm-6 col-xl-4'>
              <Card.Img src={selectedStaff.image} style={{ width: '240px' }} />
            </div>
            <div className='col-12 col-sm-6 col-xl-8'>
              <Card.Text>Họ và tên: {selectedStaff.name}</Card.Text>
              <Card.Text>Ngày sinh: {dateFormat(selectedStaff.doB, "dd/mm/yyyy")}</Card.Text>
              <Card.Text>Ngày vào công ty: {dateFormat(selectedStaff.startDate, "dd/mm/yyyy")}</Card.Text>
              <Card.Text>Phòng ban: {selectedStaff.department.name}</Card.Text>
              <Card.Text>Số ngày nghỉ còn lại: {selectedStaff.annualLeave}</Card.Text>
              <Card.Text>Số ngày đã làm thêm: {selectedStaff.overTime}</Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default StaffDetail