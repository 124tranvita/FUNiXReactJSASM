import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Card } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import moment from 'moment';
import * as Yup from 'yup';
import { MyTextInput, MySelect } from '../../../../utils/formikInput';
import { addStaff } from '../../../../features/Staffs/staffsSlice';

function AddStaff() {
  const dispatch = useDispatch();
  const staffs = useSelector((state) => state.staffs);
  const departments = useSelector((state) => state.departments);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className="my-2 bg-light" id="addStaffCard" onClick={handleShow}>
        <Card.Img variant="top" src="/assets/images/addStaff.svg" />
        <Card.Body>
          <h6>+</h6>
          <p className="text-muted">Thêm nhân viên</p>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm nhân viên</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/**FORM */}
          <Formik
            initialValues={{
              name: '',
              doB: '',
              salaryScale: 0,
              startDate: '',
              department: '',
              annualLeave: 0,
              overTime: 0,
              image: '',
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .min(2, 'Yêu cầu nhiều hơn 2 ký tự')
                .max(15, 'Yêu cầu dưới 15 ký tự')
                .required('Yêu cầu nhập'),
              doB: Yup.string()
                .required('Yêu cầu nhập')
                .test('doB', 'Phải lớn hơn 18 tuổi', (value) => {
                  return moment().diff(moment(value), 'years') >= 18;
                }),
              startDate: Yup.date()
                .max(new Date(), 'Ngày vào không được lớn hơn ngày hiện tại')
                .required('Yêu cầu nhập'),
              image: Yup.string().required('Hãy chọn ảnh đại diện'),
              department: Yup.string().required('Hãy chọn phòng ban'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              values.id = staffs.length;
              values.department = departments.filter(
                (dept) => dept.id === values.department,
              )[0];
              //alert(JSON.stringify(values, null, 2));
              dispatch(addStaff(values));
              setSubmitting(false);
              handleClose();
            }}
          >
            <Form>
              <MyTextInput
                label="Tên nhân viên"
                name="name"
                type="text"
                placeholder="Họ và tên"
              />
              <MyTextInput label="Ngày sinh" name="doB" type="date" />
              <MySelect label="Ảnh đại diện" name="image">
                <option value="">Chọn ảnh</option>
                <option value="/assets/images/man.svg">Nam</option>
                <option value="/assets/images/woman.svg">Nữ</option>
              </MySelect>
              <MyTextInput label="Ngày vào công ty" name="startDate" type="date" />
              <MySelect label="Phòng ban" name="department">
                <option value="">Phòng ban</option>
                <option value="Dept01">Sale</option>
                <option value="Dept02">HR</option>
                <option value="Dept03">Marketing</option>
                <option value="Dept04">IT</option>
                <option value="Dept05">Finance</option>
              </MySelect>
              <MyTextInput label="Hệ số lương" name="salaryScale" type="number" />
              <MyTextInput label="Số ngày nghỉ còn lại" name="annualLeave" type="number" />
              <MyTextInput label="Số giờ đã làm thêm" name="overTime" type="number" />

              {/* <button type="submit">Thêm</button> */}
              <div class="col-12 mt-2 mx-auto">
                <button class="btn btn-primary" type="submit">
                  Thêm
                </button>
              </div>
            </Form>
          </Formik>
          {/**FORM */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddStaff;
