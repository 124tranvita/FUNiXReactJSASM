import { useState } from 'react';
import { Modal, Card } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../../../../utils/formikInput';

function AddDept() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className="my-2 bg-light" id="addStaffCard" onClick={handleShow}>
        <Card.Img variant="top" src="/assets/images/addDept.svg" />
        <Card.Body>
          <h6>+</h6>
          <p className="text-muted">Thêm phòng ban</p>
        </Card.Body>
      </Card>

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
                .required('Yêu cầu nhập'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              alert(JSON.stringify(values, null, 2));
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

export default AddDept;
