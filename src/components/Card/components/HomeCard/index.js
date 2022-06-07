import { Card } from 'react-bootstrap';
import styles from './HomeCard.module.css';

function HomeCard({ name, variant, list }) {
  return (
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
      className="card-home mb-2"
    >
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Title>Tổng {name} </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default HomeCard;
