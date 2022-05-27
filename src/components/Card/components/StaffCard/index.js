import { Card } from 'react-bootstrap';
import style from './StaffCard.module.css';

function StaffCard({ staff }) {
  return (
    <Card className="my-1 bg-light">
      <Card.Img variant="top" src={staff.image} />
      <Card.Body className="bg-dark">
        <Card.Text>{staff.name}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StaffCard;
