import { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { Container, Card, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import HomeBreadcrumb from './HomeBreadcrumbComponent';

function DepartmentStaff({ getDepartmentStaffs }) {
  let params = useParams();
  let deptId = params.deptId;

  const staffs = getDepartmentStaffs(deptId);

  const [staffList, setStaffList] = useState(staffs);

  const handleSearchStaff = (searchedStaff) => {
    return (
      setStaffList(staffs.filter((staff) => staff.name.includes(searchedStaff))
      )
    )
  }

  return (
    <div className="mt-3 mb-5" style={{ height: "70vh" }}>
      <Container>
        <div className="row">
          {/* Breadcrumb */}
          <HomeBreadcrumb
            links={[
              {
                to: "/departments",
                name: "Phòng ban"
              }
            ]}
            active={"Nhân Viên"}
          />
          {/* Breadcrumb */}

          {/* Staff Search */}
          <div className="col-12 col-sm-6">
            <div className="row">
              <div className="col-12 col-xl-6"></div>
              <div className="col-12 col-xl-6">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default"><FaSearch /></InputGroup.Text>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e) => handleSearchStaff(e.target.value)}
                    placeholder="Tìm kiếm..."
                  />
                </InputGroup>
              </div>
            </div>
          </div>
          {/* Staff Search */}
        </div>

        {/* Display List of Staff */}
        <div className="row text-center">
          {staffList.map((staff) => (
            <div className="col-6 col-sm-4 col-xl-2" key={staff.id}>
              <Link to={`/staffs/${staff.id}`} className="text-decoration-none text-white">
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
  )
}

export default DepartmentStaff