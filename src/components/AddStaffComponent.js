import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AddStaff({ currentStaffList }) {
  const storageStaffs = JSON.parse(localStorage.getItem("staffs"));
  console.log(storageStaffs);

  const [show, setShow] = useState(false);
  const [staffs, setStaffs] = useState(storageStaffs ?? []);
  const [staffId, setStaffId] = useState(
    storageStaffs === null
      ? currentStaffList.length
      : currentStaffList.length + storageStaffs.length
  );

  console.log(staffId);

  const [staff, setStaff] = useState({
    id: 0,
    name: "",
    doB: "",
    salaryScale: "",
    startDate: "",
    department: "",
    annualLeave: "",
    overTime: "",
    image: "/assets/images/employee.svg",
  });

  // Show/Close Modal handler
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setStaff({
      ...staff,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    //console.log("Current State is: " + JSON.stringify(staff));
    //alert("Current State is: " + JSON.stringify(staff));

    setStaffs((prevState) => {
      const newStaffs = [...prevState, { ...staff, id: staffId }];

      localStorage.setItem("staffs", JSON.stringify(newStaffs));

      return newStaffs;
    });

    //event.preventDefault();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Staff
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm nhân viên</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(event) => handleSubmit(event)}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Tên</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Họ và Tên"
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="doB">
              <Form.Label>Ngày sinh</Form.Label>
              <Form.Control
                type="date"
                name="doB"
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="startDate">
              <Form.Label>Ngày vào công ty</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="department">
              <Form.Label>Phòng ban</Form.Label>
              <Form.Select
                aria-label="Department Select"
                name="department"
                onChange={(event) => handleInputChange(event)}
              >
                <option value="1">Sale</option>
                <option value="2">HR</option>
                <option value="3">Marketing</option>
                <option value="4">IT</option>
                <option value="5">Finance</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="salaryScale">
              <Form.Label>Hệ số lương</Form.Label>
              <Form.Control
                type="text"
                name="salaryScale"
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="annualLeave">
              <Form.Label>Số ngày nghỉ còn lại</Form.Label>
              <Form.Control
                type="text"
                name="annualLeave"
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="overTime">
              <Form.Label>Số ngày đã làm thêm</Form.Label>
              <Form.Control
                type="text"
                name="overTime"
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Thêm
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddStaff;
