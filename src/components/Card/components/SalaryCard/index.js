import { Card } from 'react-bootstrap';
import style from './SalaryCard.module.css';

function SalaryCard({ staff }) {
  return (
    <Card className="m-2">
      <Card.Header className="bg-dark text-white">
        <Card.Title>{staff.name}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Table hover size="sm">
          <tbody>
            <tr>
              <td>Mã nhân viên:</td>
              <td>{staff.id}</td>
            </tr>
            <tr>
              <td>Hệ số lương:</td>
              <td>{staff.salaryScale}</td>
            </tr>
            <tr>
              <td>Số giờ làm thêm:</td>
              <td>{<OverTime times={staff.overTime} />}</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Card.Title>Lương: {<Salary staff={staff} />}</Card.Title>
      </Card.Footer>
    </Card>
  );
}

const Salary = ({ staff }) => {
  let vnd = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });

  const calSalary = staff.salaryScale * 3000000 + staff.overTime * 25000;
  return (
    <>
      <h3>{vnd.format(calSalary.toFixed(0))}</h3>
    </>
  );
};

export default SalaryCard;
