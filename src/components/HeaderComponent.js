import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaHome, FaAddressCard, FaMoneyBillAlt } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';

function Header() {
  return (
    <div className="row">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <img
              src="/assets/images/logo.svg"
              width="32"
              height="32"
              className="d-inline-block align-top"
              alt="People Manage Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/"><FaHome /> Trang chủ</NavLink>
              <NavLink className="nav-link" to="/staffs"><IoIosPeople /> Nhân viên</NavLink>
              <NavLink className="nav-link" to="/departments"><FaAddressCard /> Phòng ban</NavLink>
              <NavLink className="nav-link" to="/salaries"><FaMoneyBillAlt /> Bảng lương</NavLink>
            </Nav>
            <Nav>
              <Nav.Link className="nav-link">Quản lý</Nav.Link>
              <NavLink className="nav-link" to="/test">
                Go to Test
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header