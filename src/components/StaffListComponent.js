import { useState, useRef } from "react";
import {
  Container,
  Card,
  InputGroup,
  FormControl,
  Button,
  Dropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch, FaFilter } from "react-icons/fa";
import HomeBreadcrumb from "./HomeBreadcrumbComponent";
import AddStaff from "./AddStaffComponent";

function StaffList({ staffs }) {
  const [staffList, setStaffList] = useState(
    staffs.sort((a, b) => b.id - a.id)
  );
  console.log(staffList);

  const searchInput = useRef();

  // Uncontrolled Form
  const handleSearch = () => {
    //console.log(searchInput.current.value);
    const searchValue = searchInput.current.value;
    const filteredStaffList = staffs.filter((staff) =>
      staff.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setStaffList(filteredStaffList);
  };

  const handleFilter = (value) => {
    const copiedStaffList = [...staffList];

    if (value === "idAsc") {
      copiedStaffList.sort((a, b) => a.id - b.id);
    }
    else {
      copiedStaffList.sort((a, b) => b.id - a.id);
    }

    setStaffList(copiedStaffList);
  }

  return (
    <div className="mt-3 mb-5">
      <Container>
        <div className="row">
          {/* Breadcrumb */}
          <HomeBreadcrumb active={"Nhân viên"} />
          {/* Breadcrumb */}

          {/* Staff Search */}
          <div className="col-12 col-sm-6">
            <div className="row">
              <div className="col-12 col-xl-4"></div>
              <div className="col-12 col-xl-6">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Tên nhân viên..."
                    aria-label="staff's name"
                    aria-describedby="basic-addon2"
                    ref={searchInput}
                  />
                  <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={handleSearch}
                  >
                    <FaSearch />
                  </Button>
                </InputGroup>
              </div>
              {/* Filter */}
              <div className="col-12 col-xl-2">
                <Dropdown onSelect={(eventKey) => handleFilter(eventKey)}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <FaFilter />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="idAsc">Mã NV tăng dần</Dropdown.Item>
                    <Dropdown.Item eventKey="idDes">Mã NV giảm dần</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              {/* Filter */}
            </div>
          </div>
          {/* Staff Search */}
        </div>

        {/* Display List of Staff */}
        <div className="row text-center">
          <div className="col-6 col-sm-4 col-xl-2">
            <AddStaff currentStaffList={staffs} />
          </div>
          {staffList.map((staff) => (
            <div className="col-6 col-sm-4 col-xl-2" key={staff.id}>
              <Link
                to={`/staffs/${staff.id}`}
                className="text-decoration-none text-white"
              >
                <Card className="my-1 bg-light">
                  <Card.Img variant="top" src={staff.image} />
                  <Card.Body className="bg-dark">
                    <Card.Text>{staff.name}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
        {/* Display List of Staff */}
      </Container>
    </div>
  );
}

export default StaffList;
