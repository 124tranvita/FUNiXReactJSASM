import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Breadcrumb, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function Departments({ departments }) {

  const [departmentList, setDepartmentList] = useState(departments);

  const handleSearchDep = (searchedDep) => (
    setDepartmentList(departments.filter((department) => department.name.includes(searchedDep)))
  )

  return (
    <div className="mt-3 mb-5">
      <Container>
        <div className="row">
          {/* Breadcrumb */}
          <div className="col-12 col-sm-6">
            <Breadcrumb className=" border-bottom border-dark mb-1">
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Trang chủ</Breadcrumb.Item>
              <Breadcrumb.Item active>Phòng ban</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          {/* Breadcrumb */}

          {/* Deparment Search */}
          <div className="col-12 col-sm-6">
            <div className="row">
              <div className="col-12 col-xl-6"></div>
              <div className="col-12 col-xl-6">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default"><FaSearch /></InputGroup.Text>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e) => handleSearchDep(e.target.value)}
                    placeholder="Tìm kiếm..."
                  />
                </InputGroup>
              </div>
            </div>
          </div>
          {/* Deparment Search */}
        </div>

        {/* Display List of Departments */}
        <div className="row">
          {departmentList.map((department) => (
            <div className="col-12 col-sm-6 col-xl-4" key={department.id}>
              <Card className="m-4">
                <Card.Img
                  variant="top"
                  src="/assets/images/department.svg"
                  style={{ width: '120px', margin: "auto" }}
                  alt={department.name}
                  className="rounded-circle mb-2 mt-2"
                />
                <Card.Body className="text-white bg-dark">
                  <Card.Title>{department.name}</Card.Title>
                  <Card.Text>
                    Số lượng nhân viên: <span>{department.numberOfStaff}</span>
                  </Card.Text>
                  <Link to={`/departments/${department.id}`}>
                    <Button variant="primary">Chi tiết</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        {/* Display List of Departments */}
      </Container>
    </div>
  )
}

export default Departments