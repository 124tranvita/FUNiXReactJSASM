import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import dateFormat from 'dateformat';

let date = new Date();
date = dateFormat(date, "yyyy-mm-dd")

function AddStaff({ currentStaffList }) {

  console.log(date);
  //console.log(reformat);

  const storageStaffs = JSON.parse(localStorage.getItem("staffs"));
  //console.log(storageStaffs);

  const [show, setShow] = useState(false);
  const [staffs, setStaffs] = useState(storageStaffs ?? []);
  const [staffId, setStaffId] = useState(
    storageStaffs === null
      ? currentStaffList.length
      : currentStaffList.length + storageStaffs.length
  );

  const [touched, setTouched] = useState({
    name: false,
    doB: false,
    startDate: false
  })

  const [errors, setErrors] = useState({
    name: "",
    doB: "",
    startDate: "",
  })

  const [staff, setStaff] = useState({
    id: 0,
    name: "",
    doB: "",
    salaryScale: 0,
    startDate: "",
    department: "",
    annualLeave: 0,
    overTime: 0,
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

  const handleBlur = (event) => {
    const target = event.target;
    const name = target.name;

    setTouched({
      ...touched,
      [name]: true
    })
  }

  //console.log(touched);

  /*
  const validate = (name, doB, startDate) => {
    const errors = {
      name: "",
      doB: "",
      startDate: "",
    };

    if (touched.name && name.length < 3)
      errors.name = "Yêu cầu nhiều hơn 2 ký tự";
    else if (touched.name && name.length > 15)
      errors.name = "Yêu cầu dưới 15 ký tự";

    if (touched.doB && !doB)
      errors.doB = "Yêu cầu nhập ngày sinh";
    else if (touched.doB && doB.slice(0, 4) >= date.slice(0, 4))
      errors.doB = "Năm sinh lớn hơn năm hiện tại";


    if (touched.startDate && !startDate)
      errors.startDate = "Yêu cầu nhập ngày vào công ty";
    else if (touched.startDate && startDate > date)
      errors.startDate = "Ngày vào không được lớn hơn ngày hiện tại";

    return errors;
  }
  

  const errors = validate(staff.name, staff.doB, staff.startDate);
  */

  console.log(errors);

  const handleSubmit = (event) => {
    if (staff.name === "") {
      setErrors({
        ...errors,
        name: "Yêu cầu nhập"
      })
      event.preventDefault();
    }
    //console.log("Current State is: " + JSON.stringify(staff));
    //alert("Current State is: " + JSON.stringify(staff));

    //console.log('staff name: ' + staff.name);

    setStaffs((prevState) => {
      const newStaffs = [...prevState, { ...staff, id: staffId }];

      localStorage.setItem("staffs", JSON.stringify(newStaffs));

      return newStaffs;
    });

    event.preventDefault();
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
                isValid={errors.name === ""}
                isInvalid={errors.name !== ""}
                onChange={(event) => handleInputChange(event)}
                onBlur={(event) => handleBlur(event)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="doB">
              <Form.Label>Ngày sinh</Form.Label>
              <Form.Control
                type="date"
                name="doB"
                isValid={errors.doB === ""}
                isInvalid={errors.doB !== ""}
                onChange={(event) => handleInputChange(event)}
                onBlur={(event) => handleBlur(event)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.doB}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="startDate">
              <Form.Label>Ngày vào công ty</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                isValid={errors.startDate === ""}
                isInvalid={errors.startDate !== ""}
                onChange={(event) => handleInputChange(event)}
                onBlur={(event) => handleBlur(event)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.startDate}
              </Form.Control.Feedback>
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
                value={staff.salaryScale}
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="annualLeave">
              <Form.Label>Số ngày nghỉ còn lại</Form.Label>
              <Form.Control
                type="text"
                name="annualLeave"
                value={staff.annualLeave}
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="overTime">
              <Form.Label>Số ngày đã làm thêm</Form.Label>
              <Form.Control
                type="text"
                name="overTime"
                value={staff.overTime}
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Thêm
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddStaff;
