import { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import StaffDetail from './StaffDetailComponent';

function StaffList({ staffs }) {
  // Show StaffDetail Component State
  const [show, setShow] = useState(false);
  // Get StaffDetail State
  const [selectedStaff, setSelectedStaff] = useState({});

  const handleViewStaffDetail = (staff) => {
    setSelectedStaff(staff);
    setShow(!show);
  }

  return (
    <>
      <Container>
        <div className="row">
          {staffs.map((staff) => (
            <div className="col-12 col-md-6 col-xl-4" key={staff.id}>
              <Card className="my-1" key={staff.id}>
                <Card.Body onClick={() => handleViewStaffDetail(staff)}>{staff.name}</Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <div className='row'>
          {(show && <StaffDetail selectedStaff={selectedStaff} />) || 'Bấm vào tên nhân viên để xem thông tin.'}
        </div>
      </Container>
    </>
  )
}

export default StaffList