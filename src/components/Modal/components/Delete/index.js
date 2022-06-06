import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { notifyShow } from '../../../../features/Notification/notificationSlice';

function Delete({ action, disabled, component }) {
  const dispatch = useDispatch();
  // Monitor Modal show and close
  const isClose = useRef(false);
  // Get deparment's modify status
  const status = useSelector((state) => state[component].modify.status);
  // Modal useState
  const [show, setShow] = useState(false);

  // Button useState
  const [button, setButton] = useState({
    variant: 'danger',
    label: 'Xóa',
    disabled: false,
  });

  // Change Button when modify's status is changed
  useEffect(() => {
    if (status === 'loading') {
      setButton({
        variant: 'secondary',
        label: '\u27F3 Đang xóa...',
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

  const handleClose = () => {
    setShow(false);
  };

  const handleDispatch = () => {
    dispatch(action());
    isClose.current = true;
  };

  const handleShow = () => {
    setButton({
      variant: 'danger',
      label: 'Xóa',
      disabled: false,
    });
    setShow(true);
  };

  // Delay close Modal by 500ms when request succeeded
  useEffect(() => {
    let timeId;

    if (isClose.current && status === 'succeeded') {
      timeId = setTimeout(() => {
        dispatch(notifyShow());
        isClose.current = false;
      }, 500);
    }
    // eslint-disable-next-line
    return () => clearTimeout(timeId);
  }, [status]);

  return (
    <>
      <Button
        variant="danger"
        onClick={handleShow}
        disabled={disabled}
        style={{ width: '7rem' }}
      >
        Xóa
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa nhân viên/phòng ban</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có muốn xóa?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button
            variant={button.variant}
            type="submit"
            disabled={button.disabled}
            onClick={handleDispatch}
          >
            {button.label}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Delete;
