import { FaHome, FaEnvelope, FaPhoneSquareAlt, FaPrint } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="bg-dark text-center text-lg-start text-white">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Quản lý nhân viên 4.0
            </h6>
            <p>
              Website quản lý nhân viên được thiết kế bằng ReactJS.
            </p>
          </div>
          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Quản lý</h6>
            <p>
              <a className="text-white">Nhân viên</a>
            </p>
            <p>
              <a className="text-white">Phòng ban</a>
            </p>
            <p>
              <a className="text-white">Bảng lương</a>
            </p>
            <p>
              <a className="text-white">Khác</a>
            </p>
          </div>
          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Liên hệ</h6>
            <p><FaHome /> Củ Chi, HCMC</p>
            <p><FaEnvelope /> phuocthFX15563@funix.edu.vn</p>
            <p><FaPhoneSquareAlt /> + 01 234 567 88</p>
            <p><FaPrint /> + 01 234 567 89</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer