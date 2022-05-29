import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function StaffCard({ staff }) {
  return (
    <Link to={`/staffs/${staff.id}`} className="text-decoration-none">
      <Card className="my-2 bg-light" id="staffCard">
        <Card.Img variant="top" src={staff.image} />
        <Card.Body>
          <h6>{staff.name}</h6>
          <p className="text-muted">{staff.department.name}</p>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default StaffCard;
