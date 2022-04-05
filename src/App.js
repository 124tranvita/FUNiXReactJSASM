import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Form } from 'react-bootstrap';
import { STAFFS } from './shared/staffs'
import StaffList from './components/StaffListComponent'

function App() {
  // Set column state
  const [col, setCol] = useState({ col: 'col-xl-4' });

  const handleSetColumn = (value) => {
    setCol({
      col: value
    });
  }

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ứng dụng quản lý nhân sự v1.0</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#"></Nav.Link>
            <Nav.Item>
              <Form.Select aria-label="Default select example" onChange={(e) => handleSetColumn(e.target.value)}>
                <option>Chọn định dang cột</option>
                <option value="col-xl-6">2 cột</option>
                <option value="col-xl-2">6 cột</option>
                <option value="3">Three</option>
              </Form.Select>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <StaffList props={[STAFFS, col]} />
      </Container>
    </div>
  );
}

export default App;
