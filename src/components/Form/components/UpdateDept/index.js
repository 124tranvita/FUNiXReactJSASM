import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../../../../utils/formikInput';
import { updateDept } from '../../../../features/Deparments/departmentSlice';
import { capitalize } from '../../../../utils/data';

function UpdateDept({ dept }) {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => ({
    status: state.department.modify.status,
    error: state.department.modify.error,
  }));

  const deptList = useSelector((state) => state.department.get.departments);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="btn-edit btn-profile" styles={{ width: '2rem' }} onClick={handleShow}>
        Chỉnh sửa
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thông tin phòng ban</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/**FORM */}
          <Formik
            initialValues={{
              name: dept.name,
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .min(2, 'Yêu cầu nhiều hơn 2 ký tự')
                .max(15, 'Yêu cầu dưới 15 ký tự')
                .test('name', 'Phòng ban đã được đăng ký', (value) => {
                  const found = deptList.filter((dept) => dept.name === value)[0];
                  return !found;
                })
                .required('Yêu cầu nhập'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              alert(JSON.stringify(values, null, 2));
              values.name = capitalize(values.name);
              dispatch(updateDept({ deptId: dept.id, data: values }));
              setSubmitting(false);
              handleClose();
            }}
          >
            <Form>
              <MyTextInput
                label="Tên phòng ban"
                name="name"
                type="text"
                placeholder="IT, Sale, Makerting,..."
              />

              {/* <button type="submit">Thêm</button> */}
              <div className="col-12 mt-2 mx-auto">
                <button className="btn btn-primary" type="submit">
                  Lưu
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

export default UpdateDept;
