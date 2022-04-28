import { useState } from "react";
import { Modal, Button, Form, Card } from "react-bootstrap";
import dateFormat from "dateformat";

let date = new Date();
date = dateFormat(date, "yyyy-mm-dd");

function AddStaff({ currentStaffList }) {
  // Get the staff list from the localStorage
  const storageStaffs = JSON.parse(localStorage.getItem("staffs"));

  /** -----STATE AREA----- */
  // Show/Unshow modal state
  const [show, setShow] = useState(false);

  // localStorage staff list state (if localStorage === null => use empty array [])
  const [staffs, setStaffs] = useState(storageStaffs ?? []);
  console.log(staffs);
  /**
   * Set Staff's ID state.
   * The new Id will contiune from the current Staff List
   * If localStorage already stored an users, new ID will increase by sum of {currentStaffList} and {storageStaffs}
   */
  /*
  const [staffId, setStaffId] = useState(
    storageStaffs === null
      ? currentStaffList.length
      : currentStaffList.length + (storageStaffs.length - 1)
  );
  */
  const [staffId, setStaffId] = useState(currentStaffList.length);
  /**
   * Touched state, use to monitor the input (when user focus/click on input, this input is touched)
   * Only name, doB, and startDate will be validated so only those field will be monitored
   */
  const [touched, setTouched] = useState({
    name: false,
    doB: false,
    startDate: false,
  });

  /**
   * Required state, use to monitor if user already input the infomation or not when submit form
   * If user submit form without entered valid data, error message will be displayed
   */
  const [required, setRequired] = useState({
    name: "",
    doB: "",
    startDate: "",
  });

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
    image: "/assets/images/employee.svg",
  });
  /** -----STATE AREA----- */

  /** -----HANDLER AREA----- */
  // Show/Close Modal handler
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };

  /**
   * Input Handler
   * Change the required state: When user is input, required will be set to '' (it mean user is already input and required doesn't make sense anymore)
   * Set new state for Staff: Add new state for the staff (add new starff)
   */
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setRequired((prevState) => ({
      ...prevState,
      [name]: "",
    }));

    setStaff({
      ...staff,
      [name]: value,
    });
  };

  /**
   * Blur Handler
   * Change the touched state: When user focus and blur from the input, it mean user already touched into field
   * Set touched to {True} for touched field
   */
  const handleBlur = (event) => {
    const target = event.target;
    const name = target.name;

    setTouched({
      ...touched,
      [name]: true,
    });
  };

  /**
   * Submit Handler. When user submit form:
   * Check touched status and show "Yeu cau nhap" for the field that not touched yet. (1)
   * If have any field that not touched yet -> prevent form to submit and end function by use return (2)
   */
  const handleSubmit = (event) => {
    // (1)
    for (const property in touched) {
      if (!touched[property]) {
        setRequired((prevState) => ({
          ...prevState,
          [property]: "Yêu cầu nhập",
        }));
      }
    }

    // (2)
    if (!touched.name || !touched.doB || !touched.startDate) {
      event.preventDefault();
      return;
    }

    setStaffId(staffId + 1);

    // Add new staffs into new staff list (that saved on localStrage) - include add staff's id
    setStaffs((prevState) => {
      const newStaffs = [...prevState, { ...staff, id: staffId }];

      // save new staff list to localStorage
      localStorage.setItem("staffs", JSON.stringify(newStaffs));

      return newStaffs;
    });
  };
  /** -----HANDLER AREA----- */

  // Validate input function
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

    if (touched.doB && !doB) errors.doB = "Yêu cầu nhập ngày sinh";
    else if (touched.doB && doB.slice(0, 4) >= date.slice(0, 4))
      errors.doB = "Năm sinh lớn hơn năm hiện tại";

    if (touched.startDate && !startDate)
      errors.startDate = "Yêu cầu nhập ngày vào công ty";
    else if (touched.startDate && startDate > date)
      errors.startDate = "Ngày vào không được lớn hơn ngày hiện tại";

    return errors;
  };

  // Call validate function
  const errors = validate(staff.name, staff.doB, staff.startDate);

  return (
    <>
      <Card className="my-1 bg-light" onClick={handleShow}>
        <Card.Img
          variant="top"
          src="/assets/images/addStaff.svg"
          alt="add staff icon"
        />
        <Card.Body className="bg-dark text-white text-center">
          <Card.Text>Thêm</Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm nhân viên</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(event) => handleSubmit(event)}>
            {/* name */}
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Tên</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Họ và Tên"
                isValid={touched.name && errors.name === ""}
                isInvalid={errors.name !== "" || required.name !== ""}
                onChange={(event) => handleInputChange(event)}
                onBlur={(event) => handleBlur(event)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name || required.name}
              </Form.Control.Feedback>
            </Form.Group>
            {/* name */}

            {/* doB */}
            <Form.Group className="mb-3" controlId="doB">
              <Form.Label>Ngày sinh</Form.Label>
              <Form.Control
                type="date"
                name="doB"
                isValid={touched.doB && errors.doB === ""}
                isInvalid={errors.doB !== "" || required.doB}
                onChange={(event) => handleInputChange(event)}
                onBlur={(event) => handleBlur(event)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.doB || required.doB}
              </Form.Control.Feedback>
            </Form.Group>
            {/* doB */}

            {/* startDate */}
            <Form.Group className="mb-3" controlId="startDate">
              <Form.Label>Ngày vào công ty</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                isValid={touched.startDate && errors.startDate === ""}
                isInvalid={errors.startDate !== "" || required.startDate !== ""}
                onChange={(event) => handleInputChange(event)}
                onBlur={(event) => handleBlur(event)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.startDate || required.startDate}
              </Form.Control.Feedback>
            </Form.Group>
            {/* startDate */}

            {/* department */}
            <Form.Group className="mb-3" controlId="department">
              <Form.Label>Phòng ban</Form.Label>
              <Form.Select
                aria-label="Department Select"
                name="department"
                defaultValue="Sale"
                onChange={(event) => handleInputChange(event)}
              >
                <option value="Sale">Sale</option>
                <option value="HR">HR</option>
                <option value="Marketing">Marketing</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
              </Form.Select>
            </Form.Group>
            {/* department */}

            {/* salaryScale */}
            <Form.Group className="mb-3" controlId="salaryScale">
              <Form.Label>Hệ số lương</Form.Label>
              <Form.Control
                type="text"
                name="salaryScale"
                value={staff.salaryScale}
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>
            {/* salaryScale */}

            {/* annualLeave */}
            <Form.Group className="mb-3" controlId="annualLeave">
              <Form.Label>Số ngày nghỉ còn lại</Form.Label>
              <Form.Control
                type="text"
                name="annualLeave"
                value={staff.annualLeave}
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>
            {/* annualLeave */}

            {/* overTime */}
            <Form.Group className="mb-3" controlId="overTime">
              <Form.Label>Số ngày đã làm thêm</Form.Label>
              <Form.Control
                type="text"
                name="overTime"
                value={staff.overTime}
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>
            {/* overTime */}
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
