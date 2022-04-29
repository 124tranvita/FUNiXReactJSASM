import { useState } from "react";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Modal, Button, Card } from "react-bootstrap";
import { FaPlus } from "react-icons/fa"
import dateFormat from "dateformat";

let date = new Date();
date = dateFormat(date, "yyyy-mm-dd");

const isRequired = (val) => val && val.length;
const minLength = (len) => (val) => val && val.length >= len;
const maxLength = (len) => (val) => !val || val.length <= len;
const isDoB = (val) => !val || val.slice(0, 4) < date.slice(0, 4);
const isStartDate = (val) => !val || val <= date;

function AddStaff({ currentStaffList }) {
  // Get the staff list from the localStorage
  const storageStaffs = JSON.parse(localStorage.getItem("staffs"));

  /** -----STATE AREA----- */
  // Show/Unshow modal state
  const [show, setShow] = useState(false);

  // localStorage staff list state (if localStorage === null => use empty array [])
  const [staffs, setStaffs] = useState(storageStaffs ?? []);

  /**
   * Set Staff's ID state.
   * The new Id will contiune from the current Staff List
   */
  const [staffId, setStaffId] = useState(currentStaffList.length);

  /**
   * Add new staff state
   */
  const [staff, setStaff] = useState({
    id: 0,
    name: "",
    doB: "",
    salaryScale: 0,
    startDate: "",
    department: "Sale",
    annualLeave: 0,
    overTime: 0,
    image: "",
  });

  /** -----STATE AREA----- */

  /** -----HANDLER AREA----- */
  // Show/Close Modal handler
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (values) => {
    setStaff({
      ...values,
    });
  }
  /**
   * Submit Handler. When user submit form:
   * Check touched status and show "Yeu cau nhap" for the field that not touched yet. (1)
   * If have any field that not touched yet -> prevent form to submit and end function by use return (2)
   */
  const handleSubmit = () => {

    setStaffId(staffId + 1);
    // Add new staffs into new staff list (that saved on localStrage) - include add staff's id
    setStaffs((prevState) => {
      const newStaffs = [...prevState, { ...staff, id: staffId }];

      // save new staff list to localStorage
      localStorage.setItem("staffs", JSON.stringify(newStaffs));

      return newStaffs;
    });

    // Reload page after submit
    window.location.reload()
  };
  /** -----HANDLER AREA----- */

  return (
    <>
      <Card className="my-1 bg-light add-card" onClick={handleShow}>
        <Card.Img
          variant="top"
          src="/assets/images/addStaff.svg"
          alt="add staff icon"
        />
        <Card.Body className="bg-dark text-white text-center">
          <Card.Text><FaPlus /></Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm nhân viên</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LocalForm
            onSubmit={handleSubmit}
            onChange={(values) => handleChange(values)}
          >
            {/* name */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">Tên</label>
              <Control.text
                className="form-control"
                model=".name"
                id="name"
                name="name"
                placeholder="Họ và Tên"
                validators={{
                  isRequired,
                  minLength: minLength(2),
                  maxLength: maxLength(15)
                }}
              />
              <Errors
                className="text-danger"
                model=".name"
                show="touched"
                messages={{
                  isRequired: "Yêu cầu nhập. ",
                  minLength: "Tên phải nhiều hơn 2 ký tự.",
                  maxLength: "Tên không vượt quá 15 ký tự.",
                }}
              />
            </div>
            {/* name */}

            {/* doB */}
            <div className="form-group">
              <label htmlFor="doB" className="form-label">Ngày sinh</label>
              <Control
                type="date"
                className="form-control"
                model=".doB"
                id="doB"
                name="doB"
                validators={{
                  isRequired,
                  isDoB
                }}
              />
              <Errors
                className="text-danger"
                model=".doB"
                show="touched"
                messages={{
                  isRequired: "Yêu cầu nhập. ",
                  isDoB: "Năm sinh không lớn hơn hoặc bằng năm hiện tại.",
                }}
              />
            </div>
            {/* doB */}

            {/* startDate */}
            <div className="form-group">
              <label htmlFor="startDate" className="form-label">Ngày vào công ty</label>
              <Control
                type="date"
                className="form-control"
                model=".startDate"
                id="startDate"
                name="startDate"
                validators={{
                  isRequired,
                  isStartDate
                }}
              />
              <Errors
                className="text-danger"
                model=".startDate"
                show="touched"
                messages={{
                  isRequired: "Yêu cầu nhập. ",
                  isStartDate: "Ngày vào không lớn hơn ngày hiện tại.",
                }}
              />
            </div>
            {/* startDate */}

            {/* gender */}
            <div className="form-group">
              <label htmlFor="image" className="form-label">Phòng ban</label>
              <Control.select
                aria-label="Gender Select"
                className="form-control"
                model=".image"
                id="image"
                name="image"
                defaultValue="/assets/images/man.svg"
              >
                <option value="/assets/images/man.svg">Nam</option>
                <option value="/assets/images/woman.svg">Nữ</option>
              </Control.select>
            </div>
            {/* gender */}

            {/* department */}
            <div className="form-group">
              <label htmlFor="department" className="form-label">Phòng ban</label>
              <Control.select
                aria-label="Department Select"
                className="form-control"
                model=".department"
                id="department"
                name="department"
                defaultValue="Sale"
              >
                <option value="Sale">Sale</option>
                <option value="HR">HR</option>
                <option value="Marketing">Marketing</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
              </Control.select>
            </div>
            {/* department */}

            {/* salaryScale */}
            <div className="form-group">
              <label htmlFor="salaryScale" className="form-label">Hệ số lương</label>
              <Control.text
                className="form-control"
                model=".salaryScale"
                id="salaryScale"
                name="salaryScale"
                defaultValue={staff.salaryScale}
              />
            </div>
            {/* salaryScale */}

            {/* annualLeave */}
            <div className="form-group">
              <label htmlFor="annualLeave" className="form-label">Số ngày nghỉ còn lại</label>
              <Control.text
                className="form-control"
                model=".annualLeave"
                id="annualLeave"
                name="annualLeave"
                defaultValue={staff.annualLeave}
              />
            </div>
            {/* annualLeave */}

            {/* overTime */}
            <div className="form-group">
              <label htmlFor="overTime" className="form-label">Số giờ đã làm thêm</label>
              <Control.text
                className="form-control"
                model=".overTime"
                id="overTime"
                name="overTime"
                defaultValue={staff.overTime}
              />
            </div>
            {/* overTime */}
            <div className="form-group mt-3">
              <Button variant="primary" type="submit">
                Thêm
              </Button>
            </div>
          </LocalForm>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddStaff;
