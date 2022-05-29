import { useDispatch } from 'react-redux';
import { InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function Search({ action }) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(action(event.target.value));
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Tên nhân viên..."
        aria-label="Tên nhân viên..."
        aria-describedby="search-input"
        onChange={handleChange}
      />
      <InputGroup.Text id="searchFormLabel">
        <FaSearch />
      </InputGroup.Text>
    </InputGroup>
  );
}

export default Search;
