import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Form } from 'react-bootstrap';
import { STAFFS } from './shared/staffs'
import StaffList from './components/StaffListComponent'

function App() {
  // Set column state
  const [col, setCol] = useState({
    mobile: 'col-12',
    tablet: 'col-sm-6',
    pc: 'col-xl-4'
  });

  const handleColView = (value) => {
    let viewedDevice = value.slice(0, 6);

    switch (viewedDevice) {
      case 'col-sm':
        setCol(prevState => (
          {
            ...prevState,
            tablet: value
          }
        ))
        break;
      case 'col-xl':
        setCol(prevState => (
          {
            ...prevState,
            pc: value
          }
        ))
        break;
    }

  }

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
              <Form.Select aria-label="Default select example" onChange={(e) => handleColView(e.target.value)}>
                <option>Chọn định dang cột</option>
                <option value="col-xl-12">PC - 1 cột</option>
                <option value="col-xl-4">PC - 3 cột</option>
                <option value="col-xl-2">PC - 6 cột</option>
                <option value="col-sm-12">Tablet - 1 cột</option>
                <option value="col-sm-6">Tablet - 2 cột</option>
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
