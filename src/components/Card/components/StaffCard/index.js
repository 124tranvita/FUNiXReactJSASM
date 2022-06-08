import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function StaffCard({ staffList }) {
  return (
    <Card className="staff-card">
      <Card.Body className="scroll-list">
        {staffList.map((staff) => (
          <div className="row mb-3 pb-2 mx-2 border-bottom" key={staff.id}>
            <div className="col-2" style={{ textAlign: 'center' }}>
              <Card.Img src={staff.image} width="64" height="64" />
            </div>
            <div className="col-10">
              <Link to={`/staffs/${staff.id}`} className="text-decoration-none">
                <Card.Title>{staff.name}</Card.Title>
              </Link>
              <span className="text-muted">Mã NV: {staff.id}</span>
              <span className="text-muted mx-2">|</span>
              <span className="text-muted">
                Phòng ban: {staff.department.name}{' '}
              </span>
              <span className="text-muted mx-2">|</span>
              <span className="text-muted">
                Ngày vào làm: {staff.startDate}
              </span>
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default StaffCard;
