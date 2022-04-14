import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { StoreContext, actions } from '../store';

function ViewColumn() {
  // Set column state
  const [state, dispath] = useContext(StoreContext);
  console.log(state);

  const handleColView = (value) => {
    switch (value) {
      case 'col-xl-12':
        dispath(actions.setPCCol1(value))
        break;
      case 'col-xl-4':
        dispath(actions.setPCCol3(value))
        break;
      case 'col-xl-2':
        dispath(actions.setPCCol6(value))
        break;
      case 'col-sm-12':
        dispath(actions.setTabletCol1(value))
        break;
      case 'col-sm-6':
        dispath(actions.setTabletCol2(value))
        break;
    }
  }

  return (
    <>
      <Form.Select aria-label="Default select example" onChange={(e) => handleColView(e.target.value)}>
        <option value='default'>Chọn định dang cột</option>
        <option value="col-xl-12">PC - 1 cột</option>
        <option value="col-xl-4">PC - 3 cột</option>
        <option value="col-xl-2">PC - 6 cột</option>
        <option value="col-sm-12">Tablet - 1 cột</option>
        <option value="col-sm-6">Tablet - 2 cột</option>
      </Form.Select>
    </>
  )
}

export default ViewColumn