import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { CgSpinner, CgCheck } from 'react-icons/cg';
import { Formik, Form } from 'formik';
import moment from 'moment';
import * as Yup from 'yup';
import dateFormat from 'dateformat';
import { MyTextInput, MySelect } from '../../../../utils/formikInput';
import { updateStaff } from '../../../../features/Staffs/staffsSlice';

function UpdateStaff({ staff }) {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => ({
    status: state.staff.modify.status,
    error: state.staff.modify.error,
  }));

  const deptList = useSelector((state) => state.department.get.departments);

  const [show, setShow] = useState(false);
  const [originBtn, setOriginBtn] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setOriginBtn(true);
    setShow(true);
  };

  useEffect(() => {
    let timeId;

    if (status === 'succeeded') {
      timeId = setTimeout(() => {
        setShow(false);
      }, 500);
    }

    return () => clearTimeout(timeId);
  }, [status]);

  return (
    <>
      <Button className="btn-edit btn-profile" styles={{ width: '2rem' }} onClick={handleShow}>
        Chỉnh sửa
      </Button>

      <Modal show={show} onHide={status !== 'loading' ? handleClose : null}>
        <Modal.Header closeButton>
          <Modal.Title>Thông tin nhân viên</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/**FORM */}
          <Formik
            initialValues={{
              name: staff.name,
              doB: staff.doB,
              salaryScale: staff.salaryScale,
              startDate: staff.startDate,
              deptId: staff.department.id,
              annualLeave: staff.annualLeave,
              overTime: staff.overTime,
              image: staff.image,
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
              deptId: Yup.string().required('Hãy chọn phòng ban'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              //alert(JSON.stringify(values, null, 2));
              dispatch(updateStaff({ staffId: staff.id, data: values }));
              setSubmitting(false);
              setOriginBtn(false);
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
              <MySelect label="Phòng ban" name="deptId">
                <option value="">Phòng ban</option>
                {deptList.map((dept) => (
                  <option value={dept.id} key={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </MySelect>
              <MyTextInput label="Hệ số lương" name="salaryScale" type="number" />
              <MyTextInput label="Số ngày nghỉ còn lại" name="annualLeave" type="number" />
              <MyTextInput label="Số giờ đã làm thêm" name="overTime" type="number" />

              {/* <button type="submit">Thêm</button> */}
              <div className="col-12 mt-2 mx-auto">
                {originBtn && (
                  <button className="btn btn-primary" type="submit">
                    Lưu thay đổi
                  </button>
                )}

                {!originBtn && status === 'loading' && (
                  <button className="btn btn-secondary" disabled>
                    <CgSpinner /> Đang lưu
                  </button>
                )}

                {!originBtn && status === 'succeeded' && (
                  <button className="btn btn-success" disabled>
                    <CgCheck /> Hoàn thành
                  </button>
                )}
              </div>
            </Form>
          </Formik>
          {/**FORM */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateStaff;
