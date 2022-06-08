import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function DepartmentCard({ deparmentList }) {
  return (
    <Card className="dept-card">
      <Card.Body className="scroll-list">
        {deparmentList.map((dept) => (
          <div className="row mb-3 pb-2 mx-2 border-bottom" key={dept.id}>
            <div className="col-2" style={{ textAlign: 'center' }}>
              <Card.Img
                src="./assets/images/department.svg"
                width="64"
                height="64"
              />
            </div>
            <div className="col-10">
              <Link
                to={`/departments/${dept.id}`}
                className="text-decoration-none"
              >
                <Card.Title>{dept.name}</Card.Title>
              </Link>
              <span className="text-muted">Mã PB: {dept.id}</span>
              <span className="text-muted mx-2">|</span>
              <span className="text-muted">
                Số nhân viên: {dept.numberOfStaff}{' '}
              </span>
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default DepartmentCard;
