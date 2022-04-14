import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaHome, FaAddressCard, FaMoneyBillAlt } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';

function Header() {
  return (
    <>
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
              <Nav.Link href="/home"><FaHome /> Trang chủ</Nav.Link>
              <Nav.Link href="/home"><IoIosPeople /> Nhân viên</Nav.Link>
              <Nav.Link href="/home"><FaAddressCard /> Phòng ban</Nav.Link>
              <Nav.Link href="/home"><FaMoneyBillAlt /> Bảng lương</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Login</Nav.Link>
              <Nav.Link href="#memes">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header