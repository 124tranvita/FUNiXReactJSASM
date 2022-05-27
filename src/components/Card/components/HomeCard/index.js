import { Card } from 'react-bootstrap';
import styles from './HomeCard.module.css';

function HomeCard({ name, list, icon }) {
  return (
    <Card>
      <Card.Body>
        <div className="row">
          <div className="col-8">
            <Card.Title>
              <h1 style={{ fontSize: '300%' }}>{list.length}</h1>
            </Card.Title>
            <Card.Text>{name}</Card.Text>
          </div>
          <div className="col-4">
            <Card.Title className="text-center">
              <h1 style={{ fontSize: '300%' }}>{icon}</h1>
            </Card.Title>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default HomeCard;
