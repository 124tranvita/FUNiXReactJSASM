import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import style from './DepartmentCard.module.css';

function DepartmentCard({ department, imageUrl }) {
  return (
    <Card className="m-4">
      <Card.Img
        variant="top"
        src={imageUrl}
        style={{ width: '120px', margin: 'auto' }}
        alt={department.name}
        className="rounded-circle mb-2 mt-2"
      />
      <Card.Body className="text-white bg-dark">
        <Card.Title>{department.name}</Card.Title>
        <Card.Text>
          Số lượng nhân viên: <span>{department.numberOfStaff}</span>
        </Card.Text>
        <Link to={`/departments/${department.id}`}>
          <Button variant="primary">Chi tiết</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default DepartmentCard;
