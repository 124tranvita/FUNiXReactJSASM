import { FaEnvelope } from 'react-icons/fa';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="row py-2 text-center" id="footer">
      <Container>
        <div className="row">
          <h6 className="text-uppercase font-weight-bold">Quản lý nhân viên 4.0</h6>
        </div>

        <div className="row">
          <h6>
            <span className="mx-2">
              <FaEnvelope /> phuocthFX15563@funix.edu.vn
            </span>
            <span className="mx-2">
              <BsFacebook />
            </span>
            <span className="mx-2">
              <BsInstagram />
            </span>
            <span className="mx-2">
              <BsTwitter />
            </span>
            <span className="mx-2">
              <BsGithub />
            </span>
          </h6>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
