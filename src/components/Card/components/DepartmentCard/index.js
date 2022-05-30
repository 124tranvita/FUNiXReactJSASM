import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function DepartmentCard({ department }) {
  return (
    <Link to={`/departments/${department.id}`} className="text-decoration-none">
      <Card className="my-2 bg-light" id="departmentCard">
        <Card.Img variant="top" src="/assets/images/department.svg" />
        <Card.Body>
          <h6>{department.name}</h6>
          <p className="text-muted">Nhân viên: {department.numberOfStaff}</p>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default DepartmentCard;
