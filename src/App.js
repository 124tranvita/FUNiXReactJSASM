import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Form } from 'react-bootstrap';
import { STAFFS } from './shared/staffs'
import StaffList from './components/StaffListComponent'

function App() {
  // Set column state
  const [col, setCol] = useState('col-12 col-sm-6 col-xl-4');

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ứng dụng quản lý nhân sự v1.0</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#"></Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Item>
              <Form.Select aria-label="Default select example" onChange={(e) => setCol(e.target.value)}>
                <option>Chọn định dang cột</option>
                <option value="col-12 col-sm-6 col-xl-12">PC - 1 cột</option>
                <option value="col-12 col-sm-6 col-xl-4">PC - 3 cột</option>
                <option value="col-12 col-sm-6 col-xl-2">PC - 6 cột</option>
                <option value="col-12 col-sm-12 col-xl-4">Tablet - 1 cột</option>
                <option value="col-12 col-sm-6 col-xl-4">Tablet - 2 cột</option>
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
