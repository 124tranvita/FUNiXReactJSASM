import { Dropdown } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {
  setStaffIdAsc,
  setStaffIdDes,
  setDeptIdAsc,
  setDeptIdDes,
  setSalaryAsc,
  setSalaryDes,
} from '../../features/Sort/sortSlice';

export const StaffIdSort = () => {
  const dispatch = useDispatch();

  const handleSort = (value) => {
    if (value === 'idAsc') {
      dispatch(setStaffIdAsc());
    } else {
      dispatch(setStaffIdDes());
    }
  };

  return (
    <>
      <Dropdown onSelect={(eventKey) => handleSort(eventKey)}>
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

export const DeptIdSort = () => {
  const dispatch = useDispatch();

  const handleSort = (value) => {
    if (value === 'idAsc') {
      dispatch(setDeptIdAsc());
    } else {
      dispatch(setDeptIdDes());
    }
  };

  return (
    <>
      <Dropdown onSelect={(eventKey) => handleSort(eventKey)}>
        <Dropdown.Toggle variant="success" id="dropdownStaffFilter">
          <FaFilter />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="idAsc">Số NV tăng dần</Dropdown.Item>
          <Dropdown.Item eventKey="idDes">Số NV giảm dần</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export const SalarySort = () => {
  const dispatch = useDispatch();

  const handleSort = (value) => {
    switch (value) {
      case 'salaryAsc':
        dispatch(setSalaryAsc());
        break;
      case 'salaryDes':
        dispatch(setSalaryDes());
        break;
      case 'idAsc':
        dispatch(setStaffIdAsc());
        break;
      case 'idDes':
        dispatch(setStaffIdDes());
        break;
      default:
        throw new Error('Sort Error!');
    }
  };

  return (
    <>
      <Dropdown onSelect={(eventKey) => handleSort(eventKey)}>
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
