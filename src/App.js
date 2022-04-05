import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { STAFFS } from './shared/staffs'
import StaffList from './components/StaffListComponent'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ứng dụng quản lý nhân sự v1.0</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#"></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <StaffList staffs={STAFFS} />
      </Container>
    </div>
  );
}

export default App;
