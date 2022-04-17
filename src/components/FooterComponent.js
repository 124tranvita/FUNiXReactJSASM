import { FaEnvelope } from 'react-icons/fa';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="row bg-dark text-white pt-4 pb-2 text-center">
      <Container>
        <div className="row">
          <h6 className="text-uppercase mb-4 font-weight-bold">
            Quản lý nhân viên 4.0
          </h6>
        </div>

        <div className="row">
          <div className="col-4 m-auto">
            <div className="row">
              <div className="col-3">
                <BsFacebook />
              </div>
              <div className="col-3">
                <BsInstagram />
              </div>
              <div className="col-3">
                <BsTwitter />
              </div>
              <div className="col-3">
                <BsGithub />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <h6 className="mt-4 text-muted">
            <FaEnvelope /> phuocthFX15563@funix.edu.vn
          </h6>
        </div>
      </Container>
    </footer>
  )
}

export default Footer