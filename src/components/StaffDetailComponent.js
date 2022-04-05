import { Container, Card } from 'react-bootstrap';

function StaffDetail({ selectedStaff }) {
  console.log(selectedStaff);
  return (
    <Container>
      <Card>
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default StaffDetail