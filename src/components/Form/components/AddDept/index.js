import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { CgSpinner, CgCheck } from 'react-icons/cg';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../../../../utils/formikInput';
import { addDept } from '../../../../features/Deparments/departmentSlice';
import { capitalize } from '../../../../utils/data';

function AddDept() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => ({
    status: state.department.modify.status,
    error: state.department.modify.error,
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
      <Button className="btn btn-add btn-outline-secondary" onClick={handleShow}>
        <AiOutlineAppstoreAdd />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm phòng ban</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/**FORM */}
          <Formik
            initialValues={{
              name: '',
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
              //alert(JSON.stringify(values, null, 2));
              values.name = capitalize(values.name);
              dispatch(addDept(values));
              setSubmitting(false);
              setOriginBtn(false);
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
                {originBtn && (
                  <button className="btn btn-primary" type="submit">
                    Thêm
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

export default AddDept;
