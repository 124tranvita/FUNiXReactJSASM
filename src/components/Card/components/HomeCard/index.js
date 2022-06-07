import { Card } from 'react-bootstrap';
import { BsPeopleFill, BsFillHouseDoorFill, BsWalletFill, BsLink45Deg } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function HomeCard({ name, description, list, path }) {
  return (
    <Card className="home-card mb-2">
      <Card.Header>
        {name === 'Nhân viên' && <>{<BsPeopleFill />}</>}
        {name === 'Phòng ban' && <>{<BsFillHouseDoorFill />}</>}
        {name === 'Tổng chi' && <>{<BsWalletFill />}</>}
      </Card.Header>
      <Card.Body>
        <Card.Title>
          {list.length} {name}{' '}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <BsLink45Deg />
        <Link to={path}>{name}</Link>
      </Card.Footer>
    </Card>
  );
}

export default HomeCard;
