import { useState } from 'react';
import { Container, Card, Table, InputGroup, FormControl, Button, Dropdown } from 'react-bootstrap';
import { FaSearch, FaFilter } from 'react-icons/fa';
import HomeBreadcrumb from './HomeBreadcrumbComponent';

function Salaries({ staffs }) {

  const [staffList, setStaffList] = useState(staffs);

  const handleSearchStaff = (searchedStaff) => (
    setStaffList(staffs.filter((staff) => (staff.name.includes(searchedStaff) || staff.id == searchedStaff))
    )
  )

  const Salary = ({ staff }) => {
    const calSalary = staff.salaryScale * 3000000 + staff.overTime * 200000;
    return (
      <>
        <h3>{calSalary.toFixed(0)}$</h3>
      </>
    )
  }

  const OverTime = ({ times }) => {
    if (times < 8) {
      return (
        <>{times} giờ</>
      )
    } else {
      return (
        <>{(times / 8).toFixed(0)} ngày {times % 8} giờ</>
      )
    }
  }

  const salariesSort = (sortType) => {
    const staffSalaries = staffList.map((staff) => {
      return {
        ...staff,
        salary: (staff.salaryScale * 3000000 + staff.overTime * 200000).toFixed(0)
      }
    })

    switch (sortType) {
      case "salaryAsc":
        staffSalaries.sort((a, b) => a.salary - b.salary);
        break;
      case "salaryDes":
        staffSalaries.sort((a, b) => b.salary - a.salary);
        break;
      default:
        throw new Error("Sort Error!");
    }

    return staffSalaries
  }

  return (
    <div className="mt-3 mb-5">
      <Container>
        <div className="row">
          {/* Breadcrumb */}
          <HomeBreadcrumb active={"Bảng lương"} />
          {/* Breadcrumb */}

          {/* Staff Search - Filter*/}
          <div className="col-12 col-sm-6">
            <div className="row">
              <div className="col-12 col-xl-4"></div>
              {/* Staff Search */}
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
              {/* Staff Search */}

              {/* Filter */}
              <div className="col-12 col-xl-2">
                <Dropdown onSelect={(eventKey) => setStaffList(salariesSort(eventKey))}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <FaFilter />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="salaryAsc">Lương tăng dần</Dropdown.Item>
                    <Dropdown.Item eventKey="salaryDes">Lương giảm dần</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              {/* Filter */}
            </div>
          </div>
          {/* Staff Search - Filter */}
        </div>

        <div className="row">
          {staffList.map((staff) => (
            <div className="col-12 col-sm-6 col-xl-4" key={staff.id}>
              <Card className="m-2">
                <Card.Header className="bg-dark text-white">
                  <Card.Title>{staff.name}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Table hover size="sm">
                    <tbody>
                      <tr>
                        <td>Mã nhân viên:</td>
                        <td>{staff.id}</td>
                      </tr>
                      <tr>
                        <td>Hệ số lương:</td>
                        <td>{staff.salaryScale}</td>
                      </tr>
                      <tr>
                        <td>Số giờ làm thêm:</td>
                        <td>{<OverTime times={staff.overTime} />}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <Card.Title>Lương: {<Salary staff={staff} />}</Card.Title>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Salaries