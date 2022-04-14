import './App.css';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Form } from 'react-bootstrap';
import { StoreContext } from './store';
import { STAFFS } from './shared/staffs'
import StaffList from './components/StaffListComponent'
import ViewColumn from './components/ViewColumnComponent';

const col = {
  mobile: 'col-12',
  tablet: 'col-sm-6',
  pc: 'col-xl-4'
}

function App() {

  const [state, dispath] = useContext(StoreContext);


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
              <ViewColumn />
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <StaffList props={[STAFFS, state]} />
      </Container>
    </div>
  );
}

export default App;
