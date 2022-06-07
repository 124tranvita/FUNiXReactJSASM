import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Toast, ToastContainer } from 'react-bootstrap';
import dateFormat from 'dateformat';
import { notifyClose } from '../../../../features/Notification/notificationSlice';

const now = new Date();

function Notification() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.notification.show);

  const { staffModiyError, deptModifyError } = useSelector((state) => ({
    staffModiyError: state.staff.modify.error,
    deptModifyError: state.department.modify.error,
  }));

  const [toastInfo, setToastInfo] = useState({
    bg: 'success',
    message: 'Tác vụ hoàn tất!',
  });

  useEffect(() => {
    // Staff modified error
    if (staffModiyError) {
      setToastInfo({
        bg: 'danger',
        message: staffModiyError,
      });
    }

    // Department modified error
    if (deptModifyError) {
      setToastInfo({
        bg: 'danger',
        message: deptModifyError,
      });
    }
  }, [staffModiyError, deptModifyError]);

  return (
    <Row>
      <Col xs={6}>
        <ToastContainer className="p-3 mt-5" position="top-end">
          <Toast
            onClose={() => dispatch(notifyClose())}
            show={show}
            bg={toastInfo.bg}
            delay={3500}
            autohide
          >
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">Thông báo</strong>
              <small>{dateFormat(now)}</small>
            </Toast.Header>
            <Toast.Body>{toastInfo.message}</Toast.Body>
          </Toast>
        </ToastContainer>
      </Col>
    </Row>
  );
}

export default Notification;
