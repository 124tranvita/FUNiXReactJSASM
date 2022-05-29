import { Dropdown } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setIdAsc, setIdDes, setSalaryAsc, setSalaryDes } from '../../features/Filter/filterSlice';

export const StaffFilter = () => {
  const dispatch = useDispatch();

  const handleFilter = (value) => {
    if (value === 'idAsc') {
      dispatch(setIdAsc());
    } else {
      dispatch(setIdDes());
    }
  };

  return (
    <>
      <Dropdown onSelect={(eventKey) => handleFilter(eventKey)}>
        <Dropdown.Toggle variant="success" id="dropdownStaffFilter">
          <FaFilter />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="idAsc">Mã NV tăng dần</Dropdown.Item>
          <Dropdown.Item eventKey="idDes">Mã NV giảm dần</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export const SalaryFilter = () => {
  const dispatch = useDispatch();

  const handleFilter = (value) => {
    switch (value) {
      case 'salaryAsc':
        dispatch(setSalaryAsc());
        break;
      case 'salaryDes':
        dispatch(setSalaryDes());
        break;
      case 'idAsc':
        dispatch(setIdAsc());
        break;
      case 'idDes':
        dispatch(setIdDes());
        break;
      default:
        throw new Error('Sort Error!');
    }
  };

  return (
    <>
      <Dropdown onSelect={(eventKey) => handleFilter(eventKey)}>
        <Dropdown.Toggle variant="success" id="dropdownSalaryFilter">
          <FaFilter />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="salaryAsc">Lương tăng dần</Dropdown.Item>
          <Dropdown.Item eventKey="salaryDes">Lương giảm dần</Dropdown.Item>
          <Dropdown.Item eventKey="idAsc">Mã NV tăng dần</Dropdown.Item>
          <Dropdown.Item eventKey="idDes">Mã NV giảm dần</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
