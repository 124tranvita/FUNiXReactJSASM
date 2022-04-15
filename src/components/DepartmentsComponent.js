import { Link } from 'react-router-dom';
import { Card, Button, Container } from 'react-bootstrap';

function Departments({ departments }) {
  return (
    <Container>
      <div className="row">
        {departments.map((department) => (
          <div className="col-12 col-sm-6 col-xl-4" key={department.id}>
            <Card className="m-4 p-2">
              <Card.Img
                variant="top"
                src="/assets/images/department.svg"
                style={{ width: '120px', margin: "auto" }}
                alt={department.name}
                className="rounded-circle mb-2"
              />
              <Card.Body className="bg-light">
                <Card.Title>{department.name}</Card.Title>
                <Card.Text>
                  Số lượng nhân viên: <span>{department.numberOfStaff}</span>
                </Card.Text>
                <Link to={`/departments/${department.id}`}>
                  <Button variant="primary">Chi tiết</Button>
                </Link>

              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Departments