import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../../../../utils/formikInput';
import { updateDept } from '../../../../features/Deparments/departmentSlice';
import { capitalize } from '../../../../utils/data';
import { notifyShow } from '../../../../features/Notification/notificationSlice';

function UpdateDept({ dept }) {
  const dispatch = useDispatch();
  // Monitor Modal show and close
  const isClose = useRef(false);
  // Get deparment's modify status
  const status = useSelector((state) => state.department.modify.status);
  // Get department list to validate dept's name input
  const deptList = useSelector((state) => state.department.get.departments);
  // Modal useState
  const [show, setShow] = useState(false);
  // Button useState
  const [button, setButton] = useState({
    variant: 'primary',
    label: 'Thêm',
    disabled: false,
  });

  // Change Button when modify's status has changed
  useEffect(() => {
    if (status === 'loading') {
      setButton({
        variant: 'secondary',
        label: '\u27F3 Đang lưu...',
        disabled: true,
      });
    }

    if (status === 'succeeded') {
      setButton({
        variant: 'success',
        label: '\u2713 Hoàn thành',
        disabled: true,
      });
    }
  }, [status]);

  // Handle show/close Modal
  const handleClose = () => setShow(false);
  const handleDispatch = () => {
    setShow(false);
    dispatch(notifyShow());
  };
  const handleShow = () => {
    setButton({
      variant: 'primary',
      label: 'Chỉnh sửa',
      disabled: false,
    });
    setShow(true);
  };

  // Delay close Modal by 500ms when request succeeded
  useEffect(() => {
    let timeId;

    if (isClose.current && status === 'succeeded') {
      timeId = setTimeout(() => {
        handleDispatch();
        isClose.current = false;
      }, 500);
    }

    return () => clearTimeout(timeId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <>
      <Button
        className="btn-edit btn-outline-secondary"
        style={{ width: '6rem' }}
        onClick={handleShow}
      >
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
                  const found = deptList.filter(
                    (dept) => dept.name === value,
                  )[0];
                  return !found;
                })
                .required('Yêu cầu nhập'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              //alert(JSON.stringify(values, null, 2));
              values.name = capitalize(values.name);
              dispatch(updateDept({ deptId: dept.id, data: values }));
              isClose.current = true;
              setSubmitting(false);
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
                <Button
                  variant={button.variant}
                  type="submit"
                  disabled={button.disabled}
                >
                  {button.label}
                </Button>
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
